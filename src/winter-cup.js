export function findWinterCup(championships){
 return championships.find(({name,season,published})=>{
  const title=String(name??'').trim().replace(/\s+/g,' ').toLowerCase();
  return published&&(title==='porsche winter cup 2026'||(title==='porsche winter cup'&&String(season).trim()==='2026'));
 });
}
