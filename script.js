let playerAttack;
let enemyAttack;
let enemyMokepon;
let roundWinner;
let playerLifes = 3;
let enemyLifes = 3;

const sectionAtk = document.getElementById("chooseAttack");
const seccionMsg = document.getElementById(`messages`);
const sectionRestart = document.getElementById(`lifeCards`);
const btnPetPlayer = document.getElementById(`btn-choose-pet`);
const btnWater = document.getElementById(`btnWaterAtk`);
const btnFire = document.getElementById(`btnFireAtk`);
const btnDirt = document.getElementById(`btnDirtAtk`);
const btnRestart = document.getElementById("btn-restart");
const petEnemy = document.getElementById(`petEnemigo`);
const sectionPets = document.getElementById(`pets`);
const inputHipodoge = document.getElementById(`hipodoge`);
const inputCapipepo = document.getElementById(`capipepo`);
const inputRatigueya = document.getElementById(`ratigueya`);
const inputLangostelvis = document.getElementById(`langostelvis`);
const inputTucapalma = document.getElementById(`tucapalma`);
const inputPydos = document.getElementById(`pydos`);
const playerPet = document.getElementById(`petPlayer`);
const vidasPlayer = document.getElementById("ownLifes");
const vidasEnemy = document.getElementById ("enemyLifes");
const decision = document.getElementById(`resultado`);
const atkJugador = document.getElementById(`atkJugador`);
const atkEnemigo = document.getElementById(`atkEnemigo`);
const msgSection = document.getElementById(`messages`);
const btnR = document.getElementById(`btn-restart`);

let mokepones = []

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}
let hipodoge = new Mokepon(`Hipodoge`,`./assets/images/mokepons_mokepon_hipodoge_attack.png`, `5`)

let capipepo = new Mokepon(`Capipepo`,`./assets/images/mokepons_mokepon_capipepo_attack.png`,`5`)

let ratigueya = new Mokepon(`Ratigueya`,`./assets/images/mokepons_mokepon_ratigueya_attack.png`,`5`)

mokepones.push(hipodoge, capipepo, ratigueya)

hipodoge.ataques.push(
    {nombre: `Chorro Agua`, id:`btnWaterAtk`},
    {nombre: `Agua Congelante`, id:`btnWaterAtk`},
    {nombre: `Hidro-Rayo`, id:`btnWaterAtk`},
    {nombre: `Chispa Flameante`, id:`btnFireAtk`},
    {nombre: `Escombros`, id:`btnDirtAtk`}   
)

capipepo.ataques.push(
    {nombre: `Tumba de Piedras`, id:`btnDirtAtk`},
    {nombre: `Escombros`, id:`btnDirtAtk`},
    {nombre: `Sismo`, id:`btnDirtAtk`},
    {nombre: `Chorro Agua`, id:`btnWaterAtk`},
    {nombre: `Magma Letal`, id:`btnFireAtk`}
)

ratigueya.ataques.push(
    {nombre: `Magma Letal`, id:`btnFireAtk`},
    {nombre: `Amaterasu`, id:`btnFireAtk`},
    {nombre: `Llama Primordial`, id:`btnFireAtk`},
    {nombre: `Derrumbe`, id:`btnDirtAtk`},
    {nombre: `Chorro Agua`, id:`btnWaterAtk`},
)


function startGame(){


    //Escondo secciones para que al inicio solo se pueda elegir el mokepon

    sectionAtk.style.display = `none`;
    
    seccionMsg.style.display = `none`
        
    sectionRestart.style.display = `none`

    btnPetPlayer.addEventListener(`click`, choosePetPlayer);
    btnPetPlayer.addEventListener(`click`, choosePetEnemy);
    
    btnWater.addEventListener(`click`, waterAttack);
    btnWater.addEventListener(`click`, enemyChooseAttack);
        
    btnFire.addEventListener(`click`, fireAttack);
    btnFire.addEventListener(`click`, enemyChooseAttack);

    
    btnDirt.addEventListener(`click`, dirtAttack);
    btnDirt.addEventListener(`click`, enemyChooseAttack);


    
    btnRestart.addEventListener(`click`,restartGame)
    btnRestart.style.display = `none`
    
}

function choosePetEnemy(){
    const enemyPet = Math.floor((Math.random() * 6) + 1);
    let enemyPetChosen
    if(enemyPet==1){
        enemyPetChosen = `Hipodoge`;
    }else if(enemyPet==2){
        enemyPetChosen = `Capipepo`;
    }else if(enemyPet==3){
        enemyPetChosen = `Ratigueya`;
    }else if(enemyPet==4){
        enemyPetChosen = `Langostelvis`;
    }else if(enemyPet==5){
        enemyPetChosen = `Tucapalma`;
    }else if(enemyPet==6){
        enemyPetChosen = `Pydos`;
    }
    enemyMokepon = enemyPetChosen
    
    petEnemy.innerHTML= enemyPetChosen;
    seccionMsg.style.display = `flex`
}

function choosePetPlayer(){
        
    sectionPets.style.display = `none`
    sectionAtk.style.display = `flex`; 

    let pet

    if(inputHipodoge.checked){
        pet = `Hipodoge`        
    }else if(inputCapipepo.checked){
        pet = `Capipepo`        
    }else if(inputRatigueya.checked){
        pet = `Ratigueya`        
    }else if(inputLangostelvis.checked){
        pet = `Langostelvis`        
    }else if(inputTucapalma.checked){
        pet = `Tucapalma`        
    }else if(inputPydos.checked){
        pet = `Pydos`        
    }else alert(`Elige una mascota!!`);

    playerPet.innerHTML= pet;
    
    
    btnPetPlayer.disabled = true;

}

function waterAttack(){
    playerAttack = `Agua`;
    sectionRestart.style.display = `flex`
}
function fireAttack(){
    playerAttack = `Fuego`;    
    sectionRestart.style.display = `flex`
}
function dirtAttack(){
    playerAttack = `Tierra`;
    sectionRestart.style.display = `flex`
}



function enemyChooseAttack(){
    enemyAttack = Math.floor((Math.random() * 3 ) + 1)
    if(enemyAttack == 1){
        enemyAttack = `Agua`;
    }else if(enemyAttack == 2){
        enemyAttack = `Fuego`;
    }else if(enemyAttack == 3){
        enemyAttack = `Tierra`;
    }
    battle(playerAttack,enemyAttack);
    
}

function crearMensaje(resultado){
    

    
    let newAtkPlayer = document.createElement(`p`)
    let NewAtkEnemy = document.createElement(`p`)

    decision.innerHTML = resultado
    newAtkPlayer.innerHTML= playerAttack
    NewAtkEnemy.innerHTML = enemyAttack

   
    atkJugador.appendChild(newAtkPlayer)
    atkEnemigo.appendChild(NewAtkEnemy)
}

function crearMensajeFinal(resultadoFinal){
    let parrafoFinal = document.createElement(`p`);
    parrafoFinal.classList.add(`parrafoFinal`)
    parrafoFinal.innerHTML = resultadoFinal
    msgSection.appendChild(parrafoFinal)
    

    btnWater.disabled = true
    
    

    btnFire.disabled = true;


    btnDirt.disabled = true;

    

}


function battle(a,b){



    if(a == b){
        crearMensaje('Empate')

    }else if(a == 'Agua' && b == 'Fuego'){
        crearMensaje('Ganaste')
        enemyLifes --;
        vidasEnemy.innerHTML = enemyLifes;

    }else if(a == 'Fuego' && b == 'Tierra'){
        crearMensaje('Ganaste')
        enemyLifes --;
        vidasEnemy.innerHTML = enemyLifes;

    }else if(a == 'Tierra' && b == 'Agua'){
        crearMensaje('Ganaste')
        enemyLifes --;
        vidasEnemy.innerHTML = enemyLifes;

    }else{
        crearMensaje('Perdiste')
        playerLifes --;
        vidasPlayer.innerHTML = playerLifes;
        
    }

    checkLifes() 
}

function restartGame(){
    location.reload()
}


function checkLifes(){
    
    if(enemyLifes == 0){
        crearMensajeFinal("Has ganado, el Mokepon enemigo se ha debilitado")
        btnR.style.display = `block`
        
        
    }else if(playerLifes == 0){
        crearMensajeFinal("Has perdido, tu Mokepon se ha debilitado")
        
        btnR.style.display = `block`
        
    }
}

startGame()


