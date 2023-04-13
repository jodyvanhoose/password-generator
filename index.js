const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordBtn = document.getElementById('password-btn')
const password1Display = document.getElementById('password-oneEl')
const password2Display = document.getElementById('password-twoEl')

passwordBtn.addEventListener('click', ()=>{
    password1Display.value = ''
    password2Display.value = ''
    let randomIndex1;
    let randomIndex2;
    let randomNum = '';
    for(let i = 0; i < 15; i++){
        randomIndex1 = Math.floor(Math.random() * characters.length)
        password1Display.value += characters[randomIndex1]
        randomIndex2 = Math.floor(Math.random() * characters.length)
        password2Display.value += characters[randomIndex2]
    }
})




const copyBtn1 = document.getElementById('clipboard1')

copyBtn1.onclick = function() {
    password1Display.select()
    
    document.execCommand('Copy')
    clearSelection()
    document.getElementById('copy-confirm').textContent = 'Copied!'
    setTimeout(()=>{
        document.getElementById('copy-confirm').textContent = ''
    },2500)
    
}

const copyBtn2 = document.getElementById('clipboard2')

copyBtn2.onclick = function() {
    password2Display.select()
    
    document.execCommand('Copy')
    clearSelection()
    document.getElementById('copy-confirm2').textContent = 'Copied!'
    setTimeout(()=>{
        document.getElementById('copy-confirm2').textContent = ''
    },2500)
    
}

function clearSelection()
{
 if (window.getSelection) {window.getSelection().removeAllRanges();}
 else if (document.selection) {document.selection.empty();}
}



// dark mode
const toggle = document.getElementById('switch')
const titleEl = document.getElementById('title')
const titleTextEl = document.getElementById('title__text')
const copyEls = Array.from(document.getElementsByClassName('copy-confirm'))
let isToggled = false

toggle.addEventListener('change', ()=>{
    if(isToggled){
        document.body.style.backgroundColor = '#1F2937'
        titleEl.style.color = '#fff'
        titleTextEl.style.color = '#D5D4D8'
        copyEls.map(el => el.style.color = '#fff')
        isToggled = false
    }else{
        document.body.style.backgroundColor = '#ECFDF5'
        titleEl.style.color = '#2B283A'
        titleTextEl.style.color = '#6B7280'
        copyEls.map(el => el.style.color = '#6B7280')
        isToggled = true
    }
})