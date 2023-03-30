let playerAttack
let enemyAttack
let playerLifes
let enemyLifes

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

    battle()
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
    let petEnemy = document.getElementById(`petEnemigo`);
    let petEnemyTwo = document.getElementById(`petEnemigoTwo`);
    petEnemy.innerHTML= enemyPetChosen;
    petEnemyTwo.innerHTML= enemyPetChosen;
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
    playerAttack = `Water Attack!!`;
    let playerAttackTipe = document.getElementById(`playerAtk`);
    playerAttackTipe.innerHTML= playerAttack;
}
function fireAttack(){
    playerAttack = `Fire Attack!!`;
    let playerAttackTipe = document.getElementById(`playerAtk`);
    playerAttackTipe.innerHTML= playerAttack;
}
function dirtAttack(){
    playerAttack = `Dirt Attack!!`;
    let playerAttackTipe = document.getElementById(`playerAtk`);
    playerAttackTipe.innerHTML= playerAttack;
}
function enemyChooseAttack(){
    enemyAttack = Math.floor((Math.random() * 3 ) + 1)
    if(enemyAttack == 1){
        enemyAttack = `Water Attack!!`;
    }else if(enemyAttack == 2){
        enemyAttack = `Fire Attack!!`;
    }else if(enemyAttack == 3){
        enemyAttack = `Dirt Attack!!`;
    }

    let enemyAtk = document.getElementById(`enemyAtk`);
    enemyAtk.innerHTML= enemyAttack;
}

//logica: water>fire fire>dirt dirt>water

function battle(playerAttack,enemyAttack){

    let roundWinner
    
    
    if(playerAttack==`Water Attack!!` && enemyAttack == `Fire Attack!!`){
        playerLifes ++;
        roundWinner = `The Player!`
    }else if(playerAttack==`Fire Attack!!` && enemyAttack == `Dirt Attack!!`){
        playerLifes ++;
        roundWinner = `The Player!`
    }else if(playerAttack==`Dirt Attack!!` && enemyAttack == `Water Attack!!`){
        playerLifes ++;
        roundWinner = `The Player!`
    }else if(playerAttack == enemyAttack){
        roundWinner = `No one, it is a Draw!!`
    }else{
        enemyLifes ++;
        roundWinner = `The Enemy!!`
    }

    
    let winnerSpan = document.getElementById(`winner`)
    winnerSpan.innerHTML = roundWinner;
}

startGame()

