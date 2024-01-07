let mylist = ['water?', 'a rock?', 'a tree?', 'a fish?', 'fire?'];


for (let i = 0; i < 5; i++) {
    laste = mylist.pop();
    myquestion(laste);
    console.log(`${laste}`);
    if (mylist.length === 0) {
        alert(`Game is over!!!`);
    };

}

function myquestion(laste) {
    alert(`comming soon is the question function`);
    console.log("I will create the my question function shortly");
}