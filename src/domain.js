export const canAttend=(startsAt,now=Date.now(),status='scheduled')=>['scheduled','checkin'].includes(status)&&now<new Date(startsAt).getTime()-30*60*1000;
export const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const date=value=>new Intl.DateTimeFormat('en-GB',{dateStyle:'medium',timeStyle:'short',timeZone:'Europe/London'}).format(new Date(value));
