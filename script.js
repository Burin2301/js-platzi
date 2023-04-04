let playerAttack;
let enemyAttack;
let enemyMokepon;
let roundWinner;
let playerLifes = 3;
let enemyLifes = 3;

function startGame(){


    //Escondo secciones para que al inicio solo se pueda elegir el mokepon

    let sectionAtk = document.getElementById("chooseAttack")
    sectionAtk.style.display = `none`;
    let sectionMsg = document.getElementById(`messages`)
    sectionMsg.style.display = `none`
    let sectionRestart = document.getElementById(`restart`)
    sectionRestart.style.display = `none`


    let btnPetPlayer = document.getElementById(`btn-choose-pet`);
    btnPetPlayer.addEventListener(`click`, choosePetPlayer);
    btnPetPlayer.addEventListener(`click`, choosePetEnemy);

    let btnWater = document.getElementById(`btnWaterAtk`);
    btnWater.addEventListener(`click`, waterAttack);
    btnWater.addEventListener(`click`, enemyChooseAttack);
    

    let btnFire = document.getElementById(`btnFireAtk`);
    btnFire.addEventListener(`click`, fireAttack);
    btnFire.addEventListener(`click`, enemyChooseAttack);

    let btnDirt = document.getElementById(`btnDirtAtk`);
    btnDirt.addEventListener(`click`, dirtAttack);
    btnDirt.addEventListener(`click`, enemyChooseAttack);


    let btnRestart = document.getElementById("btn-restart");
    btnRestart.addEventListener(`click`,restartGame)
    
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
    let petEnemy = document.getElementById(`petEnemigo`);
    petEnemy.innerHTML= enemyPetChosen;
    
}

function choosePetPlayer(){
    
    let sectionPets = document.getElementById(`pets`)
    sectionPets.style.display = `none`
    let sectionAtk = document.getElementById("chooseAttack")
    sectionAtk.style.display = `block`; 



    let inputHipodoge = document.getElementById(`hipodoge`);
    let inputCapipepo = document.getElementById(`capipepo`);
    let inputRatigueya = document.getElementById(`ratigueya`);
    let inputLangostelvis = document.getElementById(`langostelvis`);
    let inputTucapalma = document.getElementById(`tucapalma`);
    let inputPydos = document.getElementById(`pydos`);

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

    let playerPet = document.getElementById(`petPlayer`);
    let playerPetTwo = document.getElementById(`petPlayerTwo`);
    playerPet.innerHTML= pet;
    playerPetTwo.innerHTML= pet;

    let btnPetPlayer = document.getElementById(`btn-choose-pet`);
    btnPetPlayer.disabled = true;

}

function waterAttack(){
    playerAttack = `Agua`;
    let playerAttackTipe = document.getElementById(`playerAtk`);
    playerAttackTipe.innerHTML= playerAttack;
    let sectionMsg = document.getElementById(`messages`)
    sectionMsg.style.display = `block`
}
function fireAttack(){
    playerAttack = `Fuego`;
    let playerAttackTipe = document.getElementById(`playerAtk`);
    playerAttackTipe.innerHTML= playerAttack;
    let sectionMsg = document.getElementById(`messages`)
    sectionMsg.style.display = `block`
    
}
function dirtAttack(){
    playerAttack = `Tierra`;
    let playerAttackTipe = document.getElementById(`playerAtk`);
    playerAttackTipe.innerHTML= playerAttack;
    let sectionMsg = document.getElementById(`messages`)
    sectionMsg.style.display = `block`
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
    let parrafo = document.createElement(`p`);
    parrafo.innerHTML = `El enemigo uso `+ enemyMokepon + ` y ataco con ` + enemyAttack +` - `+ resultado;
    let msgSection = document.getElementById(`messages`);
    msgSection.appendChild(parrafo)

}

function crearMensajeFinal(resultadoFinal){
    let parrafoFinal = document.createElement(`p`);
    parrafoFinal.innerHTML = resultadoFinal
    let msgSection = document.getElementById(`messages`);
    msgSection.appendChild(parrafoFinal)

    let btnWater = document.getElementById(`btnWaterAtk`);
    btnWater.disabled = true
    ;
    

    let btnFire = document.getElementById(`btnFireAtk`);
    btnFire.disabled = true;


    let btnDirt = document.getElementById(`btnDirtAtk`);
    btnDirt.disabled = true;

}

//logica: water>fire fire>dirt dirt>water Winner
//logica: fire>water dirt>fire water>dirt Lose

function battle(a,b){

    let vidasPlayer = document.getElementById("ownLifes");
    let vidasEnemy = document.getElementById ("enemyLifes");

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
        let sectionRestart = document.getElementById(`restart`)
        sectionRestart.style.display = `block`
        

    }else if(playerLifes == 0){
        crearMensajeFinal("Has perdido, tu Mokepon se ha debilitado")
        let sectionRestart = document.getElementById(`restart`)
        sectionRestart.style.display = `block`
        
    }
}

startGame()