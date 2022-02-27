const text_area=document.getElementById("text");

const sec=document.getElementById("sec");
const mili=document.getElementById("mili");

const word_count= document.getElementById("word_count");
const char_count=document.getElementById("char_count");

var start=document.getElementById("start");
start.addEventListener("click",startInterval);
document.getElementById("reset").addEventListener("click",resetInterval);

const header=document.getElementById("header");

var count_sec=0;
var count_mili=0;

text_area.disabled=true;

var start_sec=null;
var start_mili=null;
function startInterval(){
    text_area.disabled=false;
    start_sec=setInterval(()=>{
        if(count_sec<=60) {
            sec.innerHTML=count_sec<10?"0"+count_sec++:count_sec++;
        }
        else{
            header.innerText="Ohh No! 🙄 Time is up ⏳";
            text_area.disabled=true;
        }
    },1000);
    start_mili=setInterval(()=>{
        if(count_sec>60) mili.innerText='00'; 
        else if (count_mili==11) count_mili=0;
        else mili.innerHTML=count_mili<10?"0"+count_mili++:count_mili++;
       
    },100);
    start.disabled=true;
    start.style.backgroundColor="transparent";
    
};


function resetInterval() {
    clearInterval(start_sec);
    clearInterval(start_mili);
    count_sec=0;
    count_mili=0;
    sec.innerText='00';
    mili.innerText='00';
    start.disabled=false;
    start.style.backgroundColor="white";
    text_area.value='';
    text_area.disabled=true;
    char_count.textContent=0;
    word_count.textContent=0;
    header.innerText="Test Your Pace 😎";
}



text_area.oninput= () => {
    let characters=text_area.value;
    char_count.textContent=characters.replace(/\s/g,'').length;

    let words=text_area.value.split(' ').filter((item) => {
        return item!='';
    });
    word_count.textContent=words.length;
};