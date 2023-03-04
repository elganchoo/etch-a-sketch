const container = document.querySelector('.container');
const contWidth=container.offsetWidth;
let grab = false;
let n = 16;
function f(){
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
            window.addEventListener('mouseup', function () {grab=false;})
        })

    })

}