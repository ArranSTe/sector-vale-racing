create or replace function public.delete_racing_record(
  record_kind text,
  record_id uuid,
  confirmation text
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  race_ids uuid[];
  record_name text;
begin
  if not private.is_staff(true) then
    raise exception 'Administrator permission and authenticator verification required' using errcode = '42501';
  end if;

  if confirmation is distinct from 'DELETE' then
    raise exception 'Type DELETE to confirm.';
  end if;

  if record_kind = 'championship' then
    select name into record_name from public.championships where id = record_id for update;
    if not found then raise exception 'Championship not found.'; end if;

    race_ids := array(
      select id from public.race_sessions where championship_id = record_id order by id for update
    );
  elsif record_kind = 'race' then
    select title into record_name from public.race_sessions where id = record_id for update;
    if not found then raise exception 'Race not found.'; end if;

    race_ids := array[record_id];
  else
    raise exception 'Choose a race or championship to delete.';
  end if;

  if exists (
    select 1 from public.race_sessions where id = any(race_ids) and status in ('checkin', 'live')
  ) then
    raise exception 'Finish any active race before deleting it.';
  end if;

  delete from public.results where session_id = any(race_ids);
  delete from public.incidents where session_id = any(race_ids);
  delete from public.penalties where session_id = any(race_ids);
  delete from public.race_sessions where id = any(race_ids);

  if record_kind = 'championship' then
    delete from public.championships where id = record_id;
  end if;

  insert into private.audit_log(actor_id, action, payload)
  values (
    auth.uid(),
    'delete_' || record_kind,
    jsonb_build_object('id', record_id, 'name', record_name, 'race_ids', race_ids)
  );
end;
$$;

revoke execute on function public.delete_racing_record(text, uuid, text) from public, anon;
grant execute on function public.delete_racing_record(text, uuid, text) to authenticated;
