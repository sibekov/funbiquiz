let mylist = ['water?', 'a rock?', 'a tree?', 'a fish?', 'fire?'];


for (let i = 0; i < 5; i++) {
    laste = mylist.pop();
    myquestion(laste);

    console.log(`${laste}`);
    if (mylist.length === 0) {
        mygameover();
    }
    else {

        mycounter(i);
    };

}

function myquestion(laste) {
    alert(`comming soon is the question function`);
    console.log("I will create the my question function shortly");
}


function mygameover() {
    document.getElementById("gameoverdiv").innerHTML = "...!!GAME OVER!!...     you only get 5 chances...";

}

function mycounter(i) {
    document.getElementById("counterspan").innerHTML = `${5 - i}`;
}