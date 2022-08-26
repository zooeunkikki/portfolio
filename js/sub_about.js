onload = function () {
    draw();
    c2();
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

function c2(){
    const canvas = document.getElementById('C2');
    const ctx = canvas.getContext('2d');
    const CtxtPer = document.querySelector('.Ctxt h2');
    const Ctxt = document.querySelector('.Ctxt p');

    let p = {txt:100, ang:Math.PI*2};
    let size =  {w:canvas.width, h:canvas.height};
    let num = 0, idx=0;
    let skill = [
        {per:80,txt:'1디자인 시안 및 구조에 따른 마크업 및 움직임 구현이 가능합니다.'},
        {per:60,txt:'2디자인 시안 및 구조에 따른 마크업 및 움직임 구현이 가능합니다.'},
        {per:30,txt:'3디자인 시안 및 구조에 따른 마크업 및 움직임 구현이 가능합니다.'},
        {per:90,txt:'4디자인 시안 및 구조에 따른 마크업 및 움직임 구현이 가능합니다.'},
        {per:100,txt:'5디자인 시안 및 구조에 따른 마크업 및 움직임 구현이 가능합니다.'},
        {per:20,txt:'6디자인 시안 및 구조에 따른 마크업 및 움직임 구현이 가능합니다.'}
    ];

    function drowFun(n){
        console.log(n)
        p.txt = num;
        p.ang = (Math.PI*2)* (num-25) / 100;

        ctx.clearRect(0,0,size.w, size.h);
        
        //line 
        ctx.beginPath();
            ctx.lineWidth = 5;
            ctx.strokeStyle = '#A9B1FF';
            ctx.arc(250,240,220,0,Math.PI*2);
            ctx.stroke();

        // %
        ctx.beginPath();
            ctx.lineWidth = 30;
            ctx.strokeStyle = '#A9B1FF';
            ctx.arc(250,240,220,Math.PI/-2,p.ang);
            ctx.stroke();

            CtxtPer.textContent = num+'%';
            Ctxt.textContent = skill[idx].txt;
        
            if(num < n){
                num++;
                requestAnimationFrame(()=> drowFun(n));
            }
    }
    let skTxt = document.querySelectorAll('.skTxt h3');


    skTxt.forEach(function(v){
        v.onclick = function(){
            idx = this.dataset.num;
            skTxt.forEach((j)=>{ j.classList.remove('active'); });
            skTxt[idx].classList.add('active');
            num=0;
            setTimeout(drowFun,500,skill[idx].per);
        }
    })

    drowFun(skill[0].per);
    skTxt[0].classList.add('active');

    const 
        elScroll = document.querySelector('.scroll'),
        elContents = document.querySelector('.contents'),
        elRight = document.querySelector('.right'),
        elRemote = document.querySelectorAll('.remote li');
        elContents.style  = `height:${elScroll.offsetHeight * 2}px`;

        let scrollState = {y:0,y2:0,state:'down'};
        let sIdx = 0;
        let aboutOffset = window.innerHeight, inter;

        // elRight.scrollTop = 1000;
        function scrollFun(){
            scrollState.y = elRight.scrollTop;
            if(scrollState.y > scrollState.y2){
                scrollState.state = true;  
            }else{
                scrollState.state = false;
            }
            scrollState.y2 = scrollState.y;
        }

        elRight.onscroll = ()=>{
            scrollFun();
            
            clearTimeout(inter);
            inter = setTimeout(()=>{
                if(scrollState.state){
                    if(sIdx < 2) sIdx++;
                }else{
                    if(sIdx > 0) sIdx--;
                }
                elScroll.style = `transform:translateY(-${aboutOffset * sIdx}px)`;
                elRemote.forEach((j)=>{ j.classList.remove('active'); });
                elRemote[sIdx].classList.add('active');
            },50);
        }

        elRemote.forEach((v,k)=>{
            v.onclick = ()=>{
                sIdx = k;
                elScroll.style = `transform:translateY(-${aboutOffset * sIdx}px)`;
                elRemote.forEach((j)=>{ j.classList.remove('active'); });
                elRemote[k].classList.add('active');
            }
            elRemote[0].classList.add('active');
        });

    


    
}
