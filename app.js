const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.main-nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}))}

function updateTime(){const now=new Date();const clock=document.querySelector('#clock');const date=document.querySelector('#date');if(clock)clock.textContent=new Intl.DateTimeFormat('tr-TR',{hour:'2-digit',minute:'2-digit'}).format(now);if(date)date.textContent=new Intl.DateTimeFormat('tr-TR',{weekday:'long',day:'numeric',month:'long',year:'numeric'}).format(now)}
updateTime();setInterval(updateTime,30000);

const weatherCodes={0:'Açık',1:'Çoğunlukla açık',2:'Parçalı bulutlu',3:'Kapalı',45:'Sisli',48:'Sisli',51:'Hafif çisenti',53:'Çisenti',55:'Yoğun çisenti',61:'Hafif yağmurlu',63:'Yağmurlu',65:'Kuvvetli yağmur',71:'Hafif kar',73:'Karlı',75:'Yoğun kar',80:'Sağanak',81:'Sağanak',82:'Kuvvetli sağanak',95:'Gök gürültülü'};
async function loadWeather(){const status=document.querySelector('#weather-status');const temperature=document.querySelector('#temperature');if(!status||!temperature)return;try{const response=await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.5489&longitude=34.9533&current=temperature_2m,weather_code&timezone=Europe%2FIstanbul');if(!response.ok)throw new Error();const data=await response.json();temperature.textContent=`${Math.round(data.current.temperature_2m)}°`;status.textContent=weatherCodes[data.current.weather_code]||'Güncel hava'}catch{status.textContent='Hava bilgisi alınamadı';temperature.textContent='--°'}}
loadWeather();

const esc=value=>String(value??'').replace(/[&<>'"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));
const defaults=[{id:1,title:'Alfa Temizlik’e hoş geldiniz',text:'Güncel hizmet duyurularımız bu bölümde paylaşılacaktır.',start:'2026-08-01',end:'2026-12-31',important:false}];
const announcements=JSON.parse(localStorage.getItem('alfa_announcements')||JSON.stringify(defaults));
const today=new Date().toISOString().slice(0,10);
const visible=announcements.filter(x=>(!x.start||x.start<=today)&&(!x.end||x.end>=today));
document.querySelector('#announcement-list').innerHTML=visible.length?visible.map(x=>`<article class="announcement-card ${x.important?'important':''}"><span>${x.important?'Önemli Duyuru':'Duyuru'}</span><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p><small>${x.end?`Son tarih: ${new Date(x.end+'T00:00:00').toLocaleDateString('tr-TR')}`:''}</small></article>`).join(''):'<article class="announcement-card"><h3>Güncel duyuru bulunmuyor</h3><p>Yeni bilgilendirmeler burada yayınlanacaktır.</p></article>';

const home=JSON.parse(localStorage.getItem('alfa_home_settings')||'{}');
if(home.title)document.querySelector('#home-title').innerHTML=esc(home.title).replace(/\n/g,'<br>');
if(home.description)document.querySelector('#home-description').textContent=home.description;

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
