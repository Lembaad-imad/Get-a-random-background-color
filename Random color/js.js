const hex = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
let btn = document.getElementById("btn");
let color = document.querySelector(".color");
btn.onclick = function(){
    let hexcolor = "#";
    for (let i = 0; i <6 ; i++) {
        hexcolor += hex[getrandom()];
    }
    color.textContent = hexcolor ;
    document.body.style.backgroundColor = hexcolor;

};
function getrandom(){
    return Math.floor(Math.random()*hex.length);
}
