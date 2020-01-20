// class Board {
//     addScore(e, score, scoreString) {
        
//     if(e.target.classList.contains('circlex')) {

//           // player1 scores
//         if(e.target.id === `p1_${scoreString}`) {

//             // checks if closed
//             if(p2Twenty.classList.contains('circlex')){                
//                 twenty.style.textDecoration = 'line-through';
//             } else {
//                 // adds score
//                 p1Score += score;
//                 p1Scoreboard.innerHTML = p1Score;
//             }

//             //player2 scores
//         } else if(e.target.id === `p2_${scoreString}`) {
            
//              // checks if closed
//             if(p1Twenty.classList.contains('circlex')) {
//                 twenty.style.textDecoration = 'line-through';
//             } else {
//                 // adds scores
//                 p2Score += score;
//                 p2Scoreboard.innerHTML = p2Score;
//             }
//         }  
//     } else if(e.target.classList.contains('x')) {
       
//         // adds circlex
//         e.target.classList.remove('x');
//         e.target.classList.add('circlex');

//     } else if(e.target.classList.contains('slash')) {

//         // adds x
//         e.target.classList.remove('slash');
//         e.target.classList.add('x');


//     } else if(e.target.classList.contains('chalk')) {

//         // adds slash
//         e.target.classList.add('slash');
//     }

//     e.preventDefault();
//     }

//     subtractScore(e, score) {

//     }

//     countScore(score) {

//     }

//     countdownScore(score) {

//     }

//     alert(player, score) {

//     }


// }

// Theres probably a better way to write all of this with objects and classes, something like the // above, but I'm just getting 
// familiar to those areas so version one of cricket darts will use the code below, which does  what I wanted it to do.


// Player one variables

const p1Twenty = document.getElementById('p1_twenty'),
      p1Nineteen = document.getElementById('p1_nineteen'),
      p1Eighteen = document.getElementById('p1_eighteen'),
      p1Seventeen = document.getElementById('p1_seventeen'),
      p1Sixteen = document.getElementById('p1_sixteen'),
      p1Fifteen = document.getElementById('p1_fifteen'),
      p1Bully = document.getElementById('p1_bully');
      p1Scoreboard = document.getElementById('player1-score');
      p1Score = 0;

let p1Name = document.getElementById('player1');    

// Player two Variables

const p2Twenty = document.getElementById('p2_twenty'),
      p2Nineteen = document.getElementById('p2_nineteen'),
      p2Eighteen = document.getElementById('p2_eighteen'),
      p2Seventeen = document.getElementById('p2_seventeen'),
      p2Sixteen = document.getElementById('p2_sixteen'),
      p2Fifteen = document.getElementById('p2_fifteen'),
      p2Bully = document.getElementById('p2_bully');   
      p2Scoreboard = document.getElementById('player2-score');  
      p2Score = 0;
      
      
      
let p2Name = document.getElementById('player2');

// Numbers

const twenty = document.getElementById('twenty'),
      nineteen = document.getElementById('nineteen'),
      eighteen = document.getElementById('eighteen'),
      seventeen = document.getElementById('seventeen'),
      sixteen = document.getElementById('sixteen'),
      fifteen = document.getElementById('fifteen'),
      bully = document.getElementById('bully');

// Alerts

let alertCount = 1;

let alert;



// Counters

let p1TwentyCount = 0,
    p1NineteenCount = 0,
    p1EighteenCount = 0,
    p1SeventeenCount = 0,
    p1SixteenCount = 0,
    p1FifteenCount = 0,
    p1BullyCount = 0;

let p2TwentyCount = 0,
    p2NineteenCount = 0,
    p2EighteenCount = 0,
    p2SeventeenCount = 0,
    p2SixteenCount = 0,
    p2FifteenCount = 0,
    p2BullyCount = 0;


    
let slider = document.getElementById('checkbox');

// Event Listeners


//  TO DOOOO
// 
//  Add the if else statement with slider check on all the clicks
// 
//  And make all the subtract functions for the else statements on these
// 
//  Also fix/figure out the alerts for all the scoring
// 



p1Twenty.addEventListener('click', function(e) {
    if(slider.checked) {
        addTwenty(e);
        console.log(alertCount);
    } else {
        console.log('Remove 20');
        e.preventDefault();
    }
});

p2Twenty.addEventListener('click', function(e) {
    if(slider.checked) {
        addTwenty(e);
        console.log(alertCount);
    } else {
        console.log('Remove 20');
        e.preventDefault();
    }
});

p1Nineteen.addEventListener('click', function(e) {
    if(slider.checked) {
        addNineteen(e);
        console.log(alertCount);
    } else {
        console.log('Remove 19');
        e.preventDefault();
    }
});

p2Nineteen.addEventListener('click', function(e) {
    if(slider.checked) {
        addNineteen(e);
        console.log(alertCount);
    } else {
        console.log('Remove 19');
        e.preventDefault();
    }
});

p1Eighteen.addEventListener('click', function(e) {
    if(slider.checked) {
        addEighteen(e);
        console.log(alertCount);
    } else {
        console.log('Remove 18');
        e.preventDefault();
    }
});

p2Eighteen.addEventListener('click', function(e) {
    if(slider.checked) {
        addEighteen(e);
        console.log(alertCount);
    } else {
        console.log('Remove 18');
        e.preventDefault();
    }
});


// p1Twenty.addEventListener('click', addTwenty);
// p2Twenty.addEventListener('click', addTwenty);
// p1Twenty.addEventListener('dblclick', subtractTwenty);
// p2Twenty.addEventListener('dblclick', subtractTwenty);
// p1Nineteen.addEventListener('click', addNineteen);
// p2Nineteen.addEventListener('click', addNineteen);

// p1Eighteen.addEventListener('click', addEighteen);
// p2Eighteen.addEventListener('click', addEighteen);

p1Seventeen.addEventListener('click', addSeventeen);
p2Seventeen.addEventListener('click', addSeventeen);

p1Sixteen.addEventListener('click', addSixteen);
p2Sixteen.addEventListener('click', addSixteen);

p1Fifteen.addEventListener('click', addFifteen);
p2Fifteen.addEventListener('click', addFifteen);

p1Bully.addEventListener('click', addBully);
p2Bully.addEventListener('click', addBully);



// Add Twenty

function addTwenty(e) {
    
    // resets alertCount
    if(alertCount > 3){
        alertCount = 1;
    }

    // grabs correct alert element
    let alert = document.getElementById(`alert-${alertCount}`);
   

    if(e.target.classList.contains('circlex')) {
        if(e.target.id === 'p1_twenty') {
            // player1 scores

            if(p2Twenty.classList.contains('circlex')){
                // checks if closed
                twenty.style.textDecoration = 'line-through';
            } else {
                // adds score, updates alert
                p1TwentyCount += 1;
                p1Score += 20;
                p1Scoreboard.innerHTML = p1Score;
                alert.innerHTML = `${p1Name.value}: 20 (${p1TwentyCount})`;
                alertCount += 1;
                console.log(`P1 Twentys: ${p1TwentyCount}`);
            }

        } else if(e.target.id === 'p2_twenty') {
            //player2 scores
            
            if(p1Twenty.classList.contains('circlex')) {
                // checks if closed
                twenty.style.textDecoration = 'line-through';
            } else {
                // adds scores, updates alert
                p2TwentyCount += 1;
                p2Score += 20;
                p2Scoreboard.innerHTML = p2Score;
                alert.innerHTML = `${p2Name.value}: 20 (${p2TwentyCount})`;
                alertCount += 1;
                console.log(`P2 Twentys: ${p2TwentyCount}`);
            }
        }  
    } else if(e.target.classList.contains('x')) {
       
        // adds circlex, updates alert
        e.target.classList.remove('x');
        e.target.classList.add('circlex');
        alertCount += 1;

        if(e.target.id === 'p1_twenty') {
            alert.innerHTML = `${p1Name.value}: 20`;
        } else {
            alert.innerHTML = `${p2Name.value}: 20`;
        }

    } else if(e.target.classList.contains('slash')) {

        // adds x, updates alert
        e.target.classList.remove('slash');
        e.target.classList.add('x');
        alertCount += 1;

        if(e.target.id === 'p1_twenty') {
            alert.innerHTML = `${p1Name.value}: 20`
        } else {
            alert.innerHTML = `${p2Name.value}: 20`;
        }

    } else if(e.target.classList.contains('chalk')) {

        // adds slash, updates alert
        e.target.classList.add('slash');
        alertCount += 1;

        if(e.target.id === 'p1_twenty') {
            alert.innerHTML = `${p1Name.value}: 20`;
        } else {
            alert.innerHTML = `${p2Name.value}: 20`;
        }
    }

    e.preventDefault();
}

// add nineteen

function addNineteen(e) {
    
    // resets alertCount
    if(alertCount > 3){
        alertCount = 1;
    }

    // grabs correct alert element
    let alert = document.getElementById(`alert-${alertCount}`);
   

    if(e.target.classList.contains('circlex')) {
        if(e.target.id === 'p1_nineteen') {
            // player1 scores

            if(p2Nineteen.classList.contains('circlex')){
                // checks if closed
                nineteen.style.textDecoration = 'line-through';
            } else {
                // adds score, updates alert
                p1NineteenCount += 1;
                p1Score += 19;
                p1Scoreboard.innerHTML = p1Score;
                alert.innerHTML = `${p1Name.value}: 19 (${p1NineteenCount})`;
                alertCount += 1;
                // console.log(`P1 19s: ${p1NineteenCount}`);
            }

        } else if(e.target.id === 'p2_nineteen') {
            //player2 scores
            
            if(p1Nineteen.classList.contains('circlex')) {
                // checks if closed
                nineteen.style.textDecoration = 'line-through';
            } else {
                // adds scores, updates alert
                p2NineteenCount += 1;
                p2Score += 19;
                p2Scoreboard.innerHTML = p2Score;
                alert.innerHTML = `${p2Name.value}: 19 (${p2NineteenCount})`;
                alertCount += 1;
                console.log(`P2 19s: ${p2NineteenCount}`);
            }
        }  
    } else if(e.target.classList.contains('x')) {
       
        // adds circlex, updates alert
        e.target.classList.remove('x');
        e.target.classList.add('circlex');
        alertCount += 1;

        if(e.target.id === 'p1_nineteen') {
            alert.innerHTML = `${p1Name.value}: 19`;
        } else {
            alert.innerHTML = `${p2Name.value}: 19`;
        }

    } else if(e.target.classList.contains('slash')) {

        // adds x, updates alert
        e.target.classList.remove('slash');
        e.target.classList.add('x');
        alertCount += 1;

        if(e.target.id === 'p1_nineteen') {
            alert.innerHTML = `${p1Name.value}: 19`
        } else {
            alert.innerHTML = `${p2Name.value}: 19`;
        }

    } else if(e.target.classList.contains('chalk')) {

        // adds slash, updates alert
        e.target.classList.add('slash');
        alertCount += 1;

        if(e.target.id === 'p1_nineteen') {
            alert.innerHTML = `${p1Name.value}: 19`;
        } else {
            alert.innerHTML = `${p2Name.value}: 19`;
        }
    }

    e.preventDefault();
}

// Add Eighteen

function addEighteen(e) {
    
    // resets alertCount
    if(alertCount > 3){
        alertCount = 1;
    }

    // grabs correct alert element
    let alert = document.getElementById(`alert-${alertCount}`);
   

    if(e.target.classList.contains('circlex')) {
        if(e.target.id === 'p1_eighteen') {
            // player1 scores

            if(p2Eighteen.classList.contains('circlex')){
                // checks if closed
                eighteen.style.textDecoration = 'line-through';
            } else {
                // adds score, updates alert
                p1EighteenCount += 1;
                p1Score += 18;
                p1Scoreboard.innerHTML = p1Score;
                alert.innerHTML = `${p1Name.value}: 18 (${p1EighteenCount})`;
                alertCount += 1;
                // console.log(`P1 18s: ${p1EighteenCount}`);
            }

        } else if(e.target.id === 'p2_eighteen') {
            //player2 scores
            
            if(p1Eighteen.classList.contains('circlex')) {
                // checks if closed
                eighteen.style.textDecoration = 'line-through';
            } else {
                // adds scores, updates alert
                p2EighteenCount += 1;
                p2Score += 18;
                p2Scoreboard.innerHTML = p2Score;
                alert.innerHTML = `${p2Name.value}: 18 (${p2EighteenCount})`;
                alertCount += 1;
                console.log(`P2 18s: ${p2EighteenCount}`);
            }
        }  
    } else if(e.target.classList.contains('x')) {
       
        // adds circlex, updates alert
        e.target.classList.remove('x');
        e.target.classList.add('circlex');
        alertCount += 1;

        if(e.target.id === 'p1_eighteen') {
            alert.innerHTML = `${p1Name.value}: 18`;
        } else {
            alert.innerHTML = `${p2Name.value}: 18`;
        }

    } else if(e.target.classList.contains('slash')) {

        // adds x, updates alert
        e.target.classList.remove('slash');
        e.target.classList.add('x');
        alertCount += 1;

        if(e.target.id === 'p1_eighteen') {
            alert.innerHTML = `${p1Name.value}: 18`
        } else {
            alert.innerHTML = `${p2Name.value}: 18`;
        }

    } else if(e.target.classList.contains('chalk')) {

        // adds slash, updates alert
        e.target.classList.add('slash');
        alertCount += 1;

        if(e.target.id === 'p1_eighteen') {
            alert.innerHTML = `${p1Name.value}: 18`;
        } else {
            alert.innerHTML = `${p2Name.value}: 18`;
        }
    }

    e.preventDefault();
}


// Add Seventeen

function addSeventeen(e) {
    if(e.target.classList.contains('circlex')) {
        if(e.target.id === 'p1_seventeen') {
            if(p2Seventeen.classList.contains('circlex')) {
                alert.innerHTML = "17 is Closed!";
                setTimeout(function(){
                    alert.innerHTML = '';
                }, 2000);
            } else {
                p1SeventeenCount += 1;
                p1Score += 17;
                p1Scoreboard.innerHTML = p1Score;
                console.log(`P1 Seventeens: ${p1SeventeenCount}`);
            }
        } else if(e.target.id === 'p2_seventeen') {
            if(p1Seventeen.classList.contains('circlex')) {
                alert.innerHTML = "17 is Closed!";
                setTimeout(function(){
                    alert.innerHTML = '';
                }, 2000);
            } else {
                p2SeventeenCount += 1;
            p2Score += 17;
            p2Scoreboard.innerHTML = p2Score;
            console.log(`P2 Seventeens: ${p2SeventeenCount}`);
            }    
        }
        
    } else if(e.target.classList.contains('x')) {
        e.target.classList.remove('x');
        e.target.classList.add('circlex');
    } else if(e.target.classList.contains('slash')) {
        e.target.classList.remove('slash');
        e.target.classList.add('x');
    } else if(e.target.classList.contains('chalk')) {
        e.target.classList.add('slash');
    }

    e.preventDefault();
}

// Add Sixteen

function addSixteen(e) {
    if(e.target.classList.contains('circlex')) {
        if(e.target.id === 'p1_sixteen') {
            if(p2Sixteen.classList.contains('circlex')) {
                alert.innerHTML = "16 is Closed!";
                setTimeout(function(){
                    alert.innerHTML = '';
                }, 2000);
            } else {
                p1SixteenCount += 1;
                p1Score += 16;
                p1Scoreboard.innerHTML = p1Score;
                console.log(`P1 Sixteens: ${p1SixteenCount}`);
            }
        } else if(e.target.id === 'p2_sixteen') {
            if(p1Sixteen.classList.contains('circlex')) {
                alert.innerHTML = "16 is Closed!";
                setTimeout(function(){
                    alert.innerHTML = '';
                }, 2000);
            } else {
                p2SixteenCount += 1;
                p2Score += 16;
                p2Scoreboard.innerHTML = p2Score;
                console.log(`P2 Sixteens: ${p2SixteenCount}`);
            }    
        }
        
    } else if(e.target.classList.contains('x')) {
        e.target.classList.remove('x');
        e.target.classList.add('circlex');
    } else if(e.target.classList.contains('slash')) {
        e.target.classList.remove('slash');
        e.target.classList.add('x');
    } else if(e.target.classList.contains('chalk')) {
        e.target.classList.add('slash');
    }

    e.preventDefault();
}


// Add Fifteen

function addFifteen(e) {
    if(e.target.classList.contains('circlex')) {
        if(e.target.id === 'p1_fifteen') {
            if(p2Fifteen.classList.contains('circlex')) {
                alert.innerHTML = "15 is Closed!";
                setTimeout(function(){
                    alert.innerHTML = '';
                }, 2000);
            } else {
                p1FifteenCount += 1;
                p1Score += 15;
                p1Scoreboard.innerHTML = p1Score;
                console.log(`P1 Fifteens: ${p1FifteenCount}`);
            }
        } else if(e.target.id === 'p2_fifteen') {
            if(p1Fifteen.classList.contains('circlex')) {
                alert.innerHTML = "15 is Closed!";
                setTimeout(function(){
                    alert.innerHTML = '';
                }, 2000);
            } else {
                p2FifteenCount += 1;
                p2Score += 15;
                p2Scoreboard.innerHTML = p2Score;
                console.log(`P2 Fifteens: ${p2FifteenCount}`);
            }    
        }
        
    } else if(e.target.classList.contains('x')) {
        e.target.classList.remove('x');
        e.target.classList.add('circlex');
    } else if(e.target.classList.contains('slash')) {
        e.target.classList.remove('slash');
        e.target.classList.add('x');
    } else if(e.target.classList.contains('chalk')) {
        e.target.classList.add('slash');
    }

    e.preventDefault();
}

// Add Bully

function addBully(e) {
    if(e.target.classList.contains('circlex')) {
        if(e.target.id === 'p1_bully') {
            if(p2Bully.classList.contains('circlex')) {
                alert.innerHTML = "Bully is Closed!";
                setTimeout(function(){
                    alert.innerHTML = '';
                }, 2000);
            } else {
                p1BullyCount += 1;
                p1Score += 25;
                p1Scoreboard.innerHTML = p1Score;
                console.log(`P1 Bullys: ${p1BullyCount}`);
            }
        } else if(e.target.id === 'p2_bully') {
            if(p1Bully.classList.contains('circlex')) {
                alert.innerHTML = "Bully is Closed!";
                setTimeout(function(){
                    alert.innerHTML = '';
                }, 2000);
            } else {
                p2BullyCount += 1;
                p2Score += 25;
                p2Scoreboard.innerHTML = p2Score;
                console.log(`P2 Bullys: ${p2BullyCount}`);
            }    
        }
        
    } else if(e.target.classList.contains('x')) {
        e.target.classList.remove('x');
        e.target.classList.add('circlex');
    } else if(e.target.classList.contains('slash')) {
        e.target.classList.remove('slash');
        e.target.classList.add('x');
    } else if(e.target.classList.contains('chalk')) {
        e.target.classList.add('slash');
    }

    e.preventDefault();
}















// function subtractTwenty(e) {
//     // if(e.target.classList.contains('circlex')) {
//     //     if(e.target.id === 'p1_twenty') {
//     //         p1TwentyCount += 1;
//     //         p1Score += 20;
//     //         p1Scoreboard.innerHTML = p1Score;
//     //         console.log(`P1 Twentys: ${p1TwentyCount}`);
//     //     } else if(e.target.id === 'p2_twenty') {
//     //         p2TwentyCount += 1;
//     //         p2Score += 20;
//     //         p2Scoreboard.innerHTML = p2Score;
//     //         console.log(`P2 Twentys: ${p2TwentyCount}`);
//     //     }
        
//     // } else if(e.target.classList.contains('x')) {
//     //     e.target.classList.remove('x');
//     //     e.target.classList.add('circlex');
//     // } else if(e.target.classList.contains('slash')) {
//     //     e.target.classList.remove('slash');
//     //     e.target.classList.add('x');
//     // } else if(e.target.classList.contains('chalk')) {
//     //     e.target.classList.add('slash');
//     // }

//     e.preventDefault();
//     console.log('wtf!');
// }