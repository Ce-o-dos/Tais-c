const btnMain = document.querySelector(".title-buton")

btnMain.addEventListener("mouseover", ()=>{

    if (btnMain.value == "Ya no vas a ver el texto uwu") {
        btnMain.value = "Ya presioname no? xd"
        btnMain.style.fontSize = "3rem"
    }

    else{
        btnMain.value = "Te gusta el amarillo y por eso acá hay mucho amarillo uwu";
        btnMain.style.fontSize = "1.9rem"
    }
} )


btnMain.addEventListener("mouseout", ()=>{
    btnMain.value = "Ya no vas a ver el texto uwu";
    btnMain.style.fontSize = "3rem"
} )



const title = document.querySelector(".title")
const meme1 = document.querySelector(".meme1")

title.addEventListener("mouseover", ()=>{
    title.innerHTML = "Toma un meme de minecraft que me hace pensar en ti para compensarlo uwu"
    title.style.marginBottom = "100px"
    title.style.marginTop = "100px"
    
    meme1.style.display = "inline"

    if(meme1.getAttribute('src') == './img/meme2.jpg'){
        title.innerHTML = "Y ya no hay más (por ahora)"
    }
})


meme1.addEventListener("click", ()=>{
    title.innerHTML = "Y acá hay otro uwu"
    meme1.setAttribute('src', './img/meme2.jpg')
})



//Section 2

const btnBeso = document.querySelector(".beso-btn")
const videoBeso = document.querySelector(".video-beso")
const gifKieto = document.querySelector(".gif-quieto")
const textYo = document.querySelector(".text-yo")
const kity = document.querySelector(".kity")
const btnB = document.querySelector(".btn-beso")
const somos = document.querySelector(".somos")
const cogeme = document.querySelector(".cogeme")
const bajando = document.querySelector(".bajando")

btnBeso.addEventListener("click", ()=>{
    if(videoBeso.style.display == "block"){
        gifKieto.style.display = "block"
        videoBeso.style.marginTop = "175px"
        btnBeso.style.display = "none"
        textYo.innerHTML = "Te gusta mucho el gif y por eso está aqui uwu"
    }
    else{
        videoBeso.style.display = "block"
        btnBeso.value = "Dale, de nuevo uwu"
        textYo.innerHTML = "Eso está tan bonito que lo vamos a dejar en el centro uwu"
    }
})

gifKieto.addEventListener("click", ()=>{
    textYo.innerHTML = "Te gusta mucho el gif y por eso está aqui uwu"
})

videoBeso.addEventListener("click", ()=>{
    textYo.innerHTML = "No sé tu pero hay que repetirlo uwu"
})

gifKieto.addEventListener("click", ()=>{

    if (textYo.innerHTML == "Ahora que harás?" || textYo.innerHTML == "No sé tu pero hay que repetirlo uwu" || textYo.innerHTML == "Te gusta mucho el gif y por eso está aqui uwu") {
        textYo.innerHTML = "te kiero <3"
        kity.style.display = "block"       
    }


    else {
        textYo.innerHTML = "Aún no presiones esto owo"
    }
})

kity.addEventListener("click", ()=>{
    textYo.innerHTML = "te kiero <3" 
    btnB.style.display = "block"   
})

btnB.addEventListener("mouseover", ()=>{
    btnB.value = "vrd amor?"
})


btnB.addEventListener("click", ()=>{
    //if (somos.style.display == "block") {
    //    
        
    //}
    somos.style.display = "block"
    textYo.innerHTML = "Somos? 👉👈" 
    btnB.style.display = "none"
})

somos.addEventListener("click", ()=>{
    textYo.innerHTML = "Somos? 👉👈 x2"
    bajando.style.display = "block"
    cogeme.style.display = "block";
    textYo.innerHTML = "Somos? x2 👉👈"; 
    cogeme.play();
})


bajando.addEventListener("click",()=>{
    alert("Si tienes problemas con esta parte te recomiendo bajar el zoom de tu navegador uwu")
})


