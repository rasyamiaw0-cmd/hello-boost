
const WHATSAPP_NUMBER="6283179090525";

const DATA={
 Instagram:{
  icon:`<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="igGrad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#ffdc80"/><stop offset=".45" stop-color="#f43f8d"/><stop offset="1" stop-color="#8a3ffc"/></linearGradient></defs><rect class="grad" x="2" y="2" width="20" height="20" rx="6"/><rect x="6.5" y="6.5" width="11" height="11" rx="3"/><circle cx="12" cy="12" r="2.8"/><circle cx="17.2" cy="6.9" r="1" fill="#fff" stroke="none"/></svg>`,cls:"ig",desc:"Tingkatkan popularitas akun Instagram kamu sekarang!",
  services:[
   ["Followers Indonesia","Followers asli & berkualitas dari Indonesia",5000,100],
   ["Followers Mix","Followers dari berbagai negara (Mix)",2000,100],
   ["Likes Indonesia","Like asli dari Indonesia",2000,100],
   ["Likes Mix","Like dari berbagai negara (Mix)",100,100],
   ["Views","Tampilan video/reels/story",10,1000],
   ["Comments","Komentar berkualitas",4000,100],
   ["Story Views","Tampilan story",20,1000]
  ]},
 TikTok:{icon:`<svg viewBox="0 0 24 24"><path d="M14.2 3h3.2c.3 2.1 1.5 3.7 3.6 4.2v3.1c-1.3 0-2.5-.4-3.6-1v6.2c0 3.8-2.5 5.8-5.7 5.8-3 0-5.3-2-5.3-4.8 0-3.1 2.5-5.1 5.5-5.1.5 0 1 .1 1.5.2v3.2c-.5-.2-.9-.3-1.4-.3-1.1 0-2.2.7-2.2 2 0 1.1.9 1.8 2 1.8 1.3 0 2.4-.8 2.4-2.7V3z"/></svg>`,cls:"tt",desc:"Boost akun TikTok dan tingkatkan jangkauan konten.",
  services:[["Followers Indonesia","Followers Indonesia",11000,100],["Followers Mix","Followers berbagai negara (Mix)",4000,100],["Likes","Like video TikTok",700,100],["Views","Views video TikTok",20,1000],["Comments","Komentar TikTok",14000,100]]},
 YouTube:{icon:`<svg viewBox="0 0 24 24"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2C1.9 9 1.9 12 1.9 12s0 3 .5 4.8a2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-4.8.5-4.8s0-3-.5-4.8zM10 15.5v-7l6 3.5-6 3.5z"/></svg>`,cls:"yt",desc:"Bantu channel dan video YouTube kamu berkembang.",
  services:[["Subscribers","Subscriber channel",62000,100],["Views","Views video YouTube",4000,1000],["Likes","Like video YouTube",3000,100]]},
 Facebook:{icon:`<svg viewBox="0 0 24 24"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.5V10H7v3h2.7v8z"/></svg>`,cls:"fb",desc:"Layanan boosting Facebook yang praktis.",
  services:[["Followers","Followers Facebook",500,100],["Likes","Likes Facebook",500,100],["Views","Views Facebook",200,1000]]},
 Telegram:{icon:`<svg viewBox="0 0 24 24"><path d="M21.8 4.3 18.5 20c-.3 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L5.9 13.5.9 11.9c-1.1-.3-1.1-1.1.2-1.6L20.6 3c.9-.3 1.6.2 1.2 1.3z"/></svg>`,cls:"tg",desc:"Boost channel Telegram dengan pilihan layanan.",
  services:[["Followers Saluran","Followers channel Telegram",500,100],["Views","Views posting Telegram",30,1000]]},
 WhatsApp:{icon:`<svg viewBox="0 0 24 24"><path d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.9-1.3A9.5 9.5 0 1 0 12 2.5zm0 17.1a7.6 7.6 0 0 1-3.9-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A7.5 7.5 0 1 1 12 19.6zm4.1-5.7c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1l-.7.9c-.1.2-.3.2-.5.1-.3-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.4l.4-.5c.1-.1.1-.3.2-.4 0-.1 0-.3-.1-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.5 3.8 3.5.5.2.9.4 1.2.5.5.2 1 .2 1.3.1.4-.1 1.4-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.2-.3-.2-.5-.3z"/></svg>`,cls:"wa",desc:"Followers untuk Saluran WhatsApp.",
  services:[["Followers Saluran","Followers Saluran WhatsApp",1000,100]]},
 Threads:{icon:`<svg viewBox="0 0 24 24"><path d="M12.1 4.1c-4.5 0-7.6 3.2-7.6 7.4 0 3.2 2.2 5.3 5.1 5.3 1.6 0 2.8-.6 3.7-1.7.7 1.1 1.8 1.7 3.1 1.7 2.8 0 4.7-2.4 4.7-5.9 0-4.3-3.4-6.8-7.5-6.8zm-2.2 9.9c-1.4 0-2.3-1-2.3-2.5 0-2.1 1.5-3.8 3.8-3.8 1.2 0 2.1.4 2.7 1.1l-.5 3.1c-.3 1.3-1.5 2.1-3.7 2.1zm5.9-.1c-.6 0-1-.4-1-.9 0-.3.1-.8.2-1.3l.5-2.7c.5.6.8 1.5.8 2.5 0 1.5-.1 2.4-.5 2.4z"/></svg>`,cls:"th",desc:"Tingkatkan followers dan likes Threads.",
  services:[["Followers","Followers Threads",10000,100],["Likes","Likes Threads",3000,100]]},
 "X / Twitter":{icon:`<svg viewBox="0 0 24 24"><path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.2-8.2L2.9 2h6.4l4.4 5.8zM17.8 19.6h1.7L8.4 4.3H6.6z"/></svg>`,cls:"xx",desc:"Followers, likes dan views untuk X / Twitter.",
  services:[["Followers","Followers X / Twitter",20000,100],["Likes","Likes X / Twitter",2000,100],["Views","Views X / Twitter",100,1000]]}
};

const rupiah=n=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);
let currentPlatform="Instagram", currentService=0;

function buildPlatforms(){
 const box=document.getElementById("platforms"), select=document.getElementById("platformSelect");
 box.innerHTML="";select.innerHTML="";
 Object.entries(DATA).forEach(([name,d])=>{
  const b=document.createElement("button");b.className="platform"+(name===currentPlatform?" active":"");b.innerHTML=`<div class="picon ${d.cls}">${d.icon}</div>${name}`;
  b.onclick=()=>selectPlatform(name);box.appendChild(b);
  select.add(new Option(name,name));
 });
 select.value=currentPlatform;
 select.onchange=()=>selectPlatform(select.value);
}
function selectPlatform(name){
 currentPlatform=name;currentService=0;
 document.querySelectorAll(".platform").forEach(x=>x.classList.remove("active"));
 [...document.querySelectorAll(".platform")].find(x=>x.textContent.trim()===name)?.classList.add("active");
 document.getElementById("platformSelect").value=name;
 const d=DATA[name];document.getElementById("catName").textContent=name;document.getElementById("catDesc").textContent=d.desc;
 const ic=document.getElementById("catIcon");ic.className="picon "+d.cls;ic.innerHTML=d.icon;
 document.getElementById("count").textContent=d.services.length+" Layanan Tersedia";
 const ps=document.getElementById("products");ps.innerHTML="";
 d.services.forEach((s,i)=>{
  const card=document.createElement("div");card.className="product";
  card.innerHTML=`<h3>${s[0]}</h3><p>${s[1]}</p><div class="price">${rupiah(s[2])} <span class="unit">/ ${s[3].toLocaleString("id-ID")}</span></div><div style="font-size:9px;color:#9b8c98;margin-top:4px">🛡️ Garansi 7 Hari: <b style="color:#ff5fa2">${rupiah(s[2]*1.5)}</b></div><button class="choose" onclick="chooseService(${i})">Pilih</button>`;
  ps.appendChild(card);
 });
 const ss=document.getElementById("serviceSelect");ss.innerHTML="";
 d.services.forEach((s,i)=>ss.add(new Option(s[0]+" — "+rupiah(s[2])+" / "+s[3].toLocaleString("id-ID"),i)));
 ss.value=0;ss.onchange=()=>{currentService=Number(ss.value);updateTotal()};
 updateTotal();
}
function chooseService(i){currentService=i;document.getElementById("serviceSelect").value=i;document.getElementById("order").scrollIntoView({behavior:"smooth",block:"center"});updateTotal()}
function changeQty(delta){const q=document.getElementById("qty");q.value=Math.max(1,Number(q.value||1)+delta);updateTotal()}
function updateTotal(){
 const s=DATA[currentPlatform].services[currentService];const q=Math.max(1,Number(document.getElementById("qty").value)||1);
 const multiplier=Number(document.getElementById("guaranteeSelect")?.value||1);
 const unitPrice=s[2]*multiplier;
 const total=Math.ceil(q/s[3])*unitPrice;
 document.getElementById("sumService").textContent=s[0];
 document.getElementById("sumQty").textContent=q.toLocaleString("id-ID");
 document.getElementById("sumPrice").textContent=rupiah(unitPrice)+" / "+s[3].toLocaleString("id-ID");
 document.getElementById("sumGuarantee").textContent=multiplier===1.5?"Garansi 7 Hari":"Tanpa Garansi";
 document.getElementById("sumTotal").textContent=rupiah(total);
}
function orderWA(){
 const s=DATA[currentPlatform].services[currentService],q=Math.max(1,Number(document.getElementById("qty").value)||1);
 const multiplier=Number(document.getElementById("guaranteeSelect")?.value||1);
 const total=Math.ceil(q/s[3])*(s[2]*multiplier);
 document.getElementById("payTotal").textContent=rupiah(total);
 document.getElementById("paymentModal").classList.add("show");
 document.body.style.overflow="hidden";
}
function closePayment(){
 document.getElementById("paymentModal").classList.remove("show");
 document.body.style.overflow="";
}
function confirmPaymentWA(){
 const s=DATA[currentPlatform].services[currentService],q=Math.max(1,Number(document.getElementById("qty").value)||1);
 const multiplier=Number(document.getElementById("guaranteeSelect")?.value||1);
 const guarantee=multiplier===1.5?"Garansi 7 Hari":"Tanpa Garansi";
 const name=document.getElementById("customer").value.trim()||"-",link=document.getElementById("link").value.trim()||"-";
 const total=Math.ceil(q/s[3])*(s[2]*multiplier);
 const msg=`Halo HelloBoost! 🎀

Saya sudah melakukan pembayaran dan ingin konfirmasi pesanan:
🌸 Platform: ${currentPlatform}
✨ Layanan: ${s[0]}
🛡️ Garansi: ${guarantee}
🔢 Jumlah: ${q.toLocaleString("id-ID")}
🔗 Link: ${link}
👤 Nama: ${name}
💰 Total: ${rupiah(total)}

Saya akan mengirimkan bukti pembayaran di chat ini. Mohon dicek dan diproses yaa. Terima kasih 💗`;
 window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(msg),"_blank");
}
function openWA(){window.open("https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent("Halo HelloBoost! Saya ingin bertanya tentang layanan 😊"),"_blank")}
function buildAll(){
 const box=document.getElementById("allgrid");box.innerHTML="";
 Object.entries(DATA).forEach(([name,d])=>{
  const c=document.createElement("div");c.className="allcard";
  c.innerHTML=`<div class="allhead"><span class="tiny ${d.cls}">${d.icon}</span>${name}</div>`+d.services.map(s=>`<div class="allitem"><span>${s[0]}</span><b>${rupiah(s[2])}<br><small style="font-weight:500">7H ${rupiah(s[2]*1.5)}</small></b></div>`).join("");
  box.appendChild(c);
 });
}
function initHelloBoost(){
  buildPlatforms();
  buildAll();
  selectPlatform("Instagram");
  document.getElementById("paymentModal").addEventListener("click",e=>{if(e.target.id==="paymentModal")closePayment();});
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closePayment();});
}
document.addEventListener("DOMContentLoaded", initHelloBoost);
