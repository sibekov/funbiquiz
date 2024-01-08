
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {

                mycheckAnswer();
            }

            else {
                let mygameType = this.getAttribute("data-type");
                myrunGame(mygameType);
            }
        });
    }
    // myrunGame(mygameType);
});

let newlist = [];
let mylist = ['water?', 'a rock?', 'a tree?', 'a fish?', 'fire?'];
function myrunGame(mygameType) {
    let charactor = mygameType;

    //for (let i = 0; i < 5; i++) {


    if (mylist[mylist.length - 1] === 'fire?') {
        mylist.pop();
    }

    let counta = mycounter();

    let levela = parseInt(document.getElementById("myscore").innerHTML);

    if (counta === 0) {
        //  document.getElementsByTagName("button").attribute.disable = true;
        mygameover();

    }
    else if (newlist.length === 5 && counta > 0) {
        alert(`Congratulations you have finish the ${charactor} level please try any other level`);
    }
    else {
        let operand = mylist.pop();

        if (charactor === 'Jesus') {
            displayjesusQuestion(charactor, operand);
        } else if (charactor === 'Jona') {
            displayjonaQuestion(charactor, operand);
        }
        else if (charactor === 'Elijah') {
            displayelijahQuestion(charactor, operand);
        }

        else if (charactor === 'Moses') {
            displaymosesQuestion(charactor, operand);
        }
        else {
            alert(`unknown game type:${charactor}`);
            throw `unknown game type:${charactor}. Aborting!!!`;
        }
        mylist.unshift(operand);
    }
}




function mycheckAnswer() {

    let myuserAnswer = document.getElementById("useranswer").value;
    let myAnswer = myworkedoutAnswer();
    let isCorrect = myuserAnswer === myAnswer[1];

    if (isCorrect) {
        alert("That is correct!!!...You Have Good Bible Study Habits!");
        myincreaseScore();
    }
    else {
        alert(`Sorry... you said ${myuserAnswer}.  But the correct answer is ${myAnswer[1]}`);
        myincreaselossAnswer();
        ///mylist.push()

    }


    myrunGame(myAnswer[0]);

}





function myworkedoutAnswer() {

    let charactor = document.getElementById('mycharactor').innerText;
    let operand = document.getElementById('myoperand').innerText;

    if (charactor === 'Jesus' && operand === 'water?') {
        newlist.unshift(operand);
        return [charactor, 'walk over it!'];
    }
    else if (charactor === 'Jesus' && operand === 'a rock?') {
        newlist.unshift(operand);
        return [charactor, 'build a mension on it!'];
    }
    else if (charactor === 'Jesus' && operand === 'a tree?') {
        newlist.unshift(operand);
        return [charactor, 'curse it!'];
    }
    else if (charactor === 'Jesus' && operand === 'a fish?') {
        newlist.unshift(operand);
        return [charactor, 'do a multiplication!'];
    }
    else if (charactor === 'Jesus' && operand === 'fire?') {
        newlist.unshift(operand);
        return [charactor, "set it on his friends\'s heads!"];
    }

    else if (charactor === 'Jona' && operand === 'water?') {
        newlist.unshift(operand);
        return [charactor, 'deep dive into it'];
    }
    else if (charactor === 'Jona' && operand === 'a rock?') {
        newlist.unshift(operand);
        return [charactor, 'sit and wait for a movie to start'];
    }
    else if (charactor === 'Jona' && operand === 'a tree?') {
        newlist.unshift(operand);
        return [charactor, 'lie down under its shadow'];
    }
    else if (charactor === 'Jona' && operand === 'a fish?') {
        newlist.unshift(operand);
        return [charactor, 'submarine!'];
    }
    else if (charactor === 'Jona' && operand === 'fire?') {
        newlist.unshift(operand);
        return [charactor, 'try to burn others those who frustrated him'];
    }


    else if (charactor === 'Elijah' && operand === 'water?') {
        newlist.unshift(operand);
        return [charactor, 'season it!'];
    }
    else if (charactor === 'Elijah' && operand === 'a rock?') {
        newlist.unshift(operand);
        return [charactor, 'hide in it'];
    }
    else if (charactor === 'Elijah' && operand === 'a tree?') {
        newlist.unshift(operand);
        return [charactor, 'overnight stay'];
    }
    else if (charactor === 'Elijah' && operand === 'a fish?') {
        newlist.unshift(operand);
        return [charactor, 'three year diet'];
    }
    else if (charactor === 'Elijah' && operand === 'fire?') {
        newlist.unshift(operand);
        return [charactor, 'start a barbacue'];
    }

    else if (charactor === 'Moses' && operand === 'water?') {
        newlist.unshift(operand);
        return [charactor, 'divide by Two'];
    }
    else if (charactor === 'Moses' && operand === 'a rock?') {
        newlist.unshift(operand);
        return [charactor, 'strike it'];
    }
    else if (charactor === 'Moses' && operand === 'a tree?') {
        newlist.unshift(operand);
        return [charactor, 'take of his shoes'];
    }
    else if (charactor === 'Moses' && operand === 'a fish?') {
        newlist.unshift(operand);
        return [charactor, 'make sure it is not eel before eating'];
    }
    else if (charactor === 'Moses' && operand === 'fire?') {
        newlist.unshift(operand);
        return [charactor, 'listen attentively'];
    }

    else {
        alert(`unimplemented operand ${operand}`);
        throw `unimplemented oprand ${operand}, Aborting!!!`;
    }
}

function myincreaseScore() {

    let previousmyScore = parseInt(document.getElementById("myscore").innerHTML);
    document.getElementById("myscore").innerHTML = previousmyScore + 1;

}

function myincreaselossAnswer() {

    let previousmywrongScore = parseInt(document.getElementById("wrong").innerHTML);

    document.getElementById("wrong").innerHTML = previousmywrongScore + 1;


}


function displayjesusQuestion(charactor, operand) {

    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;

}

function displayjonaQuestion(charactor, operand) {
    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;

}

function displayelijahQuestion(charactor, operand) {
    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;
}

function displaymosesQuestion(charactor, operand) {
    document.getElementById('mycharactor').textContent = charactor;
    document.getElementById('myoperand').textContent = operand;
}


function mycounter() {

    let w = parseInt(document.getElementById("wrong").innerHTML);

    let counta = 3 - w;
    document.getElementById("counterspan").innerHTML = counta;
    return counta;

}





function mygameover() {
    document.getElementById("gameoverdiv").innerHTML = "...!!GAME OVER!!...     you only get 3 chances...";

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);

}

function mygameoverlevels() {
    document.getElementById("gameoverdiv").innerHTML = "...!!GAME OVER!!...     You need to play same person level and finish before moving on to a different person level...";

}


/*

let mylist = ['water?', 'a rock?', 'a tree?', 'a fish?', 'fire?'];

function myrunGame(mygameType) {
    for (let i = 0; i < 5; ++i) {
        let laste = mylist.pop();
        mycheckAnswer(laste);
        mycounter(i);
        console.log(`${laste}`);
        if (mylist.length === 0) {
            mygameover();
        }
    }
}
function mycheckAnswer(laste) {
    alert(`comming soon is the question function`);
    console.log("I will create the my question function shortly");
}


element.style.backgroundColor = "red";

<button type="button" disabled>Click Me!</button>


*/