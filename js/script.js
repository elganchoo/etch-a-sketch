const container = document.querySelector('.container');
const contWidth=container.offsetWidth;
let n = 16;
function f(){
for(let i=0; i<(n*n); i++){
    const div = document.createElement('div');
    div.setAttribute('class', 'grid');
    div.style.width= 100 / n + "%";
    container.appendChild(div);
//     div.addEventListener('mousedown', h);
//     function h(){
//         div.addEventListener('mouseover', ()=>{
//             div.style.backgroundColor='black';
//     });
// }
}
    const divs = document.querySelectorAll('.grid');
    divs.forEach(div => div.addEventListener('click', h(div)));
}
function h(div){
    div.addEventListener('mouseover', ()=>{
        div.style.backgroundColor='black';
    });
}