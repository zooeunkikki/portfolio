onload = function () {
    draw();
    click();
};
function draw() {
    const canvas = document.getElementById('c1');
    if (!canvas || !canvas.getContext) { return false; }
    const ctx = canvas.getContext('2d');

    let circle = {x:50, y:300, r:50};

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    console.log(
        canvas.height
    );

    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#CCC';
    // ctx.strokeStyle = '#000';
    //격자무늬
    for (let x = 0; x < canvas.width; x += 150) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }
    for (let y = 0; y < canvas.height; y += 150) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }
    ctx.stroke();

}

function click(){
    let arrow = document.querySelector('.arrow'),
        band = document.querySelector('.band'),
        dia = document.querySelectorAll('.dia');
    arrow.addEventListener('mouseover',function(){
        event.target.style="cursor:pointer";
        arrow.onclick =function(){
            location.href='./sub_contact.html'; 
        };
    })

    band.addEventListener('mouseenter',function(){
        event.target.style="cursor:pointer";
        band.onclick = function(){
            location.href='./sub_work.html'; 
        };
    })

    band.addEventListener('mouseout',function(){
        event.target.style="cursor:pointer ";
        band.onclick = function(){
            location.href='./sub_work.html'; 
        };
    })

    dia.forEach(function(v,k){
        v.addEventListener('mouseover',function(){
            event.target.style="animation: diaup1 1s ease forwards;";

        })

        v.addEventListener('mouseout',function(){
            event.target.style="animation: dia 1s ease forwards;";
            
        })

    })
    
}
