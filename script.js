const memories = [
{
image:"images/photo1.jpg",
text:"မမ ကလေးတုန်းက ပုံလေး မောင့်ကိုပို့ဖူးလို့ သိမ်းထားတာ"
},
{
image:"images/photo2.jpg",
text:"သီလရှင်ပေါက်စ, မမ"
},
{
image:"images/photo3.jpg",
text:"ဆံပင်ဖြောင့်ပြီးပြီးချင်း အတန်းလာတတ်သူ"
},
{
image:"images/photo4.jpg",
text:"ဘန်နီဖြိုးနဲ့ရုပ်သွားဆင်တယ်လို့ ချီးကျူးခံရတဲ့ မမ"
},
{
image:"images/photo5.jpg",
text:"မောင်နဲ့ပြန်တွဲခါစ အလှူဓာတ်ပုံလေး"
},
{
image:"images/photo6.jpg",
text:"မမ,တော့ မမ,ပဲ ဒါပေမယ့် မမ,ဟုတ်မနေဘူး"
},
{
image:"images/photo7.jpg",
text:"တနင်္ဂနွေနေ့တိုင်း ပျောက်ရသည့်အကြောင်းပြချက်"
},
{
image:"images/photo8.jpg",
text:"နဂါးမလေး မမ"
},
{
image:"images/photo9.jpg",
text:"မောင့်ကို အဆုံးရှုံးမခံနိုင်သူ၏ မနက်ခင်းအကြည်ဓာတ်လေး"
},
{
image:"images/photo10.jpg",
text:"VIP Pupi ၏အကျိုးခံစားခွင့်"
},
{
image:"images/photo11.jpg",
text:"ပိုက်ဆံအိတ်ထဲက မမ"
},
{
image:"images/photo12.jpg",
text:"မောင့်ကိုရောင်းစားပြီးတော့တောင် မုန့်စားမယ့် မမ"
},
{
image:"images/photo13.jpg",
text:"သူ့ကိုယ်သူ မလှဘူးလို့တော့ပြောတာပဲ မောင်,တော့မထင်"
},
{
image:"images/photo14.jpg",
text:"ယုန်မလေး မမ"
},
{
image:"images/photo15.jpg",
text:"မောင့် Tele acc အပိုင်ရလို့ ပျော်နေသော မမ"
},
{
image:"images/photo16.jpg",
text:"ချစ်စရာ ကြောင်းချေးရုပ်နဲ့ မမ"
},
{
image:"images/photo17.jpg",
text:"ဒါလေးလည်းတစ်မျိုးလေး"
},
{
image:"images/photo18.jpg",
text:"အလှပြင်ပြီးသွားပြီ လှလားတဲ့"
},
{
image:"images/photo19.jpg",
text:"မောင်တို့နှစ်ယောက်ရဲ့ ပထမဆုံးတွေ့ဆုံမှု"
}
];

const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");

const sliderSection = document.getElementById("sliderSection");
const finalSection = document.getElementById("finalSection");

const slideImage = document.getElementById("slideImage");
const slideText = document.getElementById("slideText");
const slideNumber = document.getElementById("slideNumber");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let current = 0;

function loadSlide(index){

slideImage.src = memories[index].image;

slideText.textContent = memories[index].text;

slideNumber.textContent =
`Memory ${index + 1} of ${memories.length}`;
}

startBtn.addEventListener("click",()=>{

welcome.classList.add("hidden");

sliderSection.classList.remove("hidden");

loadSlide(current);

});

nextBtn.addEventListener("click",()=>{

current++;

if(current >= memories.length){

sliderSection.classList.add("hidden");

finalSection.classList.remove("hidden");

return;
}

loadSlide(current);

});

prevBtn.addEventListener("click",()=>{

if(current > 0){

current--;

loadSlide(current);

}

});

function createHeart(){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left = Math.random()*100 + "%";

heart.style.bottom = "-20px";

heart.style.fontSize =
(Math.random()*20+15) + "px";

document.querySelector(".hearts")
.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(createHeart,500);