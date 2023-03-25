// Earth is being attacked by a hord of aliens
// You are the captain of the USS Assembly and the mission is to destroy the alien ship
// You will use lasers to destroy the aliens
// there are 6 alien ships
// the aliens weakness is that they attack one at a time
// You can only attack aliens in order becaus you can only target one at a time
// once you destroy a ship you can chose to stay and fight or retreat 

//Game flow
// 1. You attack the first alien ship
// 2. if the ship survives, it attacks you
// 3. if you survive, you attack the same ship again
// 4. if it survivies it attacks you again..etc
// 5. if you destroy the ship, you ahve the option to ATTACK the next ship or to RETREAT
// 6. if you retreat, the game is OVER, perhaps leaving the game open for further developments or options
// 7. You win the game if you destroy all of the aliens
// 8. You lose the game if you are destroyed 

//Ship properites
// HULL is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed
// hull variable == your health 
// FIREPOWER is the amount of damage done to the HULL of the target with a successful hit
// firepower variable == damage output
// ACCURACY is the change between 0 and 1 that the ship will hit its target
// accuracy variable == boolean, random whole between 0 and 1

// your spaceship, the USS Assembly should have the following properites 
// hull = 20
// firepower = 5
// accuracy = .7

// alien ship should have the following RANGED properties determined randomly 
// hull between 3 and 6
// firepower between 2 and 4
// accuracy between .6 and .8 

// example us of accuracy to determine a hit:
// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }


// PSEUDO CODE

// your ship
// your ship variable = US Assembly
// your ship has attributes
// your ship attributes are hull, firepower, and accuracy 
// hull = 20
// firepower = 5
// accuracy = .7


//Ship properites
// HULL is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed
// hull variable == your health 
// FIREPOWER is the amount of damage done to the HULL of the target with a successful hit
// firepower variable == damage output
// ACCURACY is the change between 0 and 1 that the ship will hit its target
// accuracy variable == boolean, random whole between 0 and 1

class Ship{
    constructor(hull, firepower, accuracy, name){
        this.hull = hull
        this.firepower = firepower
        this.accuracy = accuracy 
        this.name = name
    }
    attack(){
        console.log(`${this.name} is attacking`)
        // ${badGuy.name}`)
        if(this.accuracy > Math.random()){
            console.log('Direct Hit!')
            this.damage(this.firepower)
        }else{
            console.log('You missed!')
        }
    }
    
    damage(x){
        this.hull -= x
        if(this.hull <= 0){
            console.log(`${this.name} was destroyed!`)
        }else{
            console.log(`${this.name} hull: ${this.hull} After that big hit!`)
            }
        }
    }
  

class alienShip extends Ship {
    constructor(hull, firepower, accuracy, name){
        super(hull, firepower, accuracy, name)
        this.hull = Math.round(Math.random()*(6-3)+3);
        this.firepower = Math.round(Math.random()*(4-2)+2)
        this.accuracy = Math.round(Math.random()*(.8-.6)+.6)
        this.name = name
    }
// example us of accuracy to determine a hit:
// if (Math.random() < alien[0].accuracy) {
// 	console.log('You have been hit!');
// }
    alienAttack(){
        if(this.accuracy>Math.random()){
            ussAssembly.hull -= this.firepower
            console.log('You have been hit!' + ussAssembly.hull)
        }else{
            console.log('The alien ship has missed')
        }
    }
}

class yourShip extends Ship {
    constructor(hull, firepower, accuracy, name){
        super(hull, firepower, accuracy, name)
    }
    // attack(){
    //     if(this.accuracy > Math.random()){
    //         alienPewPew[0].hull -= this.firepower
    //         console.log('Direct Hit!')
    //     }else{
    //         console.log('You missed!')
    //     }
    }
  

    const ussAssembly = new yourShip(20,5,.7, 'USS Assembly')



// alien ship
// these need a name and since they attack one at a time they can be an array that we use a for loop to move through the 6 alien ships
// attributes of the alien ship are hull, firepower, and accuracy 
// hull = 3-6
// firepower = 2-4
// accuracy = .6-.8

const alienPewPew = [];
for(let i = 0; i < 6; i++){
    const alien = new alienShip(`Alien${i}`)
    alienPewPew.push(new alienShip(this.hull,this.firepower,this.accuracy));
}
//     let randomHull = Math.round(Math.random()*(6-3)+3);
//     let randomFirepower = Math.round(Math.random()*(4-2)+2)
//     let randomAccuracy = Math.round(Math.random()*(.8-.6)+.6)
//     //  Push those constructed objects into a predefined array.
//     alienPewPew.push(new alienShip(randomHull, randomFirepower, randomAccuracy))
// }
console.log(alienPewPew)
// your ship variable = US Assembly
// your ship has attributes
// your ship attributes are hull, firepower, and accuracy 
// hull = 20
// firepower = 5
// accuracy = .7



//create the random number generators for alienShip hull, firepower, and accuracy

// edit this does not work becuase I can not figuer out how to push this into the array of alien ships. The math still works but I  need to use actual numbers as oppsed to min or max

// function getRandomHull (min, max){
//     return Math.round(10 * (Math.random() * (max - min) + min))/10
// }

// function getRandomFP (min, max){
//     return Math.round(10 * (Math.random() * (max - min) + min))/10
// }

// function getRandomAc (min, max){
//     return Math.round(10 * (Math.random() * (max - min) + min))/10
// }

// create the 6 alien ships
// alien ship
// these need a name
// attributes of the alien ship are hull, firepower, and accuracy 
// hull = 3-6
// firepower = 2-4
// accuracy = .6-.8

// this variable data below is no longer usefull becuase I was able to put all of this inside of a loop. This new way works because the ships attack one at a time until they are defeated. If the aliens alternated or something then the loop may not work.

// const alienShip1 = new alienShip (getRandomHull(3,6),getRandomFP(2,4),getRandomAc(.6,.8))
// const alienShip2 = new alienShip (getRandomHull(3,6),getRandomFP(2,4),getRandomAc(.6,.8))
// const alienShip3 = new alienShip (getRandomHull(3,6),getRandomFP(2,4),getRandomAc(.6,.8))
// const alienShip4 = new alienShip (getRandomHull(3,6),getRandomFP(2,4),getRandomAc(.6,.8))
// const alienShip5 = new alienShip (getRandomHull(3,6),getRandomFP(2,4),getRandomAc(.6,.8))
// const alienShip6 = new alienShip (getRandomHull(3,6),getRandomFP(2,4),getRandomAc(.6,.8))

// lines 129 - 160 are old work but it is still there to show my thought progression. Future self will get a kick out of this I hope. 

// with the table set its now time to create a begin battle function that will go throuhg a series of if statments. these statements will determine if your ship attacks/hit and if the alien ships attack/hit.

function battleBegin(){
    ussAssembly.attack()
    // if the alien in the array has a hull value (health) of 0 or lower and its not the last alien ship then move onto the next ship. Your ship can one shot alien ships so we need to check if there is any hull value left after your ship attacks.
    if(alienPewPew[0].hull <= 0 && alienPewPew.length > 0){
        // if there are alien ships left then shift to move onto the next ship and remove the ship that just "died"
        alienPewPew.shift();
        console.log('You defeated an Alien ship. Here comes another one!')
        }
        //lets say you won the game by defeating the last ship
        if(alienPewPew.length == 0){
            console.log('All of the Aliens have been defeated!')
        }else
        //  if you destroy the ship, you ahve the option to ATTACK the next ship or to RETREAT
        //  if you retreat, the game is OVER, perhaps leaving the game open for further developments or options
        if(alienPewPew[0].hull <= 0){
            //create a button that offers to retreat...aka restart the game
            //was going to use document.create('button') but it wasnt working. Apparently you can use "confirm" to create a pop up that requeirs a user input.
            confirm("Retreat?")
            //Josh mentioned you can reload a page using .reload. I remember this breifly in lecturebrb
            window.location.reload()
        }else
        // lets now build an else if that says your ship has been defeated
        if(alienPewPew[0].hull > 0){
            alienPewPew[0].alienAttack();
            if(ussAssembly.hull <= 0){
                console.log('You have been defeated')
            }
        }
}

function reloadPage(){
    location.reload()
}
// // how do we cache the new hull value after an attack. Also how do we keep the FP and Accuracy to remain the same once an alien is decided. 
// // lets start a battle

// const battle = (player, alien) => {

// }

console.log(battleBegin())
console.log(ussAssembly)