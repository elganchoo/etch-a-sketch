const container = document.querySelector('.container');
const contWidth=container.offsetWidth;
let grab = true;
let n = 16;

function setGrid(){
    let no= document.querySelector('#gridNo');
    let input = no.value;
    while(input>100) input = window.prompt("Please enter a value smaller than 100: ");
    container.replaceChildren();
    f(Number(input));
}

function f(n=16){
for(let i=0; i<(n*n); i++){
    const div = document.createElement('div');
    div.setAttribute('class', 'grid');
    div.style.width= 100 / n + "%";
    container.appendChild(div);
}
    container.addEventListener('mousedown', function() {
        grab=true;
        container.addEventListener('mouseover', function (e){
            if(grab) {
                e.target.style.backgroundColor = "black";
            }

        })
        container.addEventListener('click', function () {grab=false;})
    })

}