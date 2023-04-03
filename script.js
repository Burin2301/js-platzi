let playerAttack
let enemyAttack
let playerLifes
let enemyLifes
let enemyMokepon

let roundWinner


function startGame(){
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

}

function waterAttack(){
    playerAttack = `Agua`;
    let playerAttackTipe = document.getElementById(`playerAtk`);
    playerAttackTipe.innerHTML= playerAttack;
}
function fireAttack(){
    playerAttack = `Fuego`;
    let playerAttackTipe = document.getElementById(`playerAtk`);
    playerAttackTipe.innerHTML= playerAttack;
}
function dirtAttack(){
    playerAttack = `Tierra`;
    let playerAttackTipe = document.getElementById(`playerAtk`);
    playerAttackTipe.innerHTML= playerAttack;
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

//logica: water>fire fire>dirt dirt>water Winner
//logica: fire>water dirt>fire water>dirt Lose

function battle(a,b){

    if(a == b){
        crearMensaje('Empate')
    }else if(a == 'Agua' && b == 'Fuego'){
        crearMensaje('Ganaste')
    }else if(a == 'Fuego' && b == 'Tierra'){
        crearMensaje('Ganaste')
    }else if(a == 'Tierra' && b == 'Agua'){
        crearMensaje('Ganaste')
    }else{
        crearMensaje('Perdiste')
    }

      
}

startGame()