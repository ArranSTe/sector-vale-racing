export function findWinterCup(championships){
 return championships.find(({name,season,published})=>{
  const title=String(name??'').trim().replace(/\s+/g,' ').toLowerCase();
  return published&&(title==='porsche winter cup 2026'||(title==='porsche winter cup'&&String(season).trim()==='2026'));
 });
}

export const advertisedRounds=Object.freeze([
 {track:'Oulton Park',startsAt:'2026-11-28T19:00:00Z'},
 {track:'Okayama',startsAt:'2026-12-05T19:00:00Z'},
 {track:'Brands Hatch',startsAt:'2026-12-12T19:00:00Z'},
 {track:'Spa-Francorchamps',startsAt:'2026-12-19T19:00:00Z'},
]);
