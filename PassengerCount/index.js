let countEl = document.getElementById("count-el");
console.log(countEl);
let count = 0;

function increment() {
    count = count + 1;
    // set countEl's innertext to count
    countEl.innerText = count;
}

// create a save function, which logs(print) out the count when its called
function save() {
    console.log(count);
}
