onload = function () {
    draw();
    btn();
};
function draw() {
    const canvas = document.getElementById('c1');
    if (!canvas || !canvas.getContext) { return false; }
    const ctx = canvas.getContext('2d');

    let circle = { x: 50, y: 300, r: 50 };

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = '#CCC';

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

function btn() {
    let btn = document.querySelectorAll('.ctxt a');
    btn.forEach(function (v, k) {
        v.onclick = function () {
            let copy = document.createElement("input");
            if (k == 1) {
                event.preventDefault();
                let text = v.href;
                document.body.appendChild(copy);
                copy.value = text;
                copy.select();
                document.execCommand("copy");
                alert('(ง˙∇˙)ว 링크 복사 완료!୧(˙∇˙)୨')
            } else {
                event.preventDefault();
                let text = v.textContent;
                document.body.appendChild(copy);
                copy.value = text;
                copy.select();
                document.execCommand("copy");
                alert('(ง˙∇˙)ว 복사 완료!୧(˙∇˙)୨')
            }


        }
    })
}