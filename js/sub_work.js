onload = function () {
    draw();
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


fetch('./js/data.json')
.then((res)=>res.json())
.then((data)=>{
    work(data.project);
})

function work(data){
    const elWorkbtn = document.querySelector('.workbtn'),
            elWork = document.querySelector('.Work');

    let workNum='', workContent='', workIdx = localStorage.workNum;

    //workNum
    data.forEach((item,k) => {
        workNum += `<svg data-url="${k+1}"  viewBox="0 0 157 157">
                        <g id="btn1">
                            <circle cx="78.5" cy="78.5" r="78.5" fill="black"/>
                            <text x="30%" y="70%">${k+1}</text>
                        </g>
                    </svg>`;
    });
    elWorkbtn.innerHTML = workNum;


    //workContents
    function workData(n){
        workIdx = n;
        let keywords='', summary;
        data[workIdx].키워드.forEach((v)=>{
            keywords += `<p>${v}</p>`;
        })

        summary = data[workIdx].선정이유;
        if(summary.length > 50) summary = data[workIdx].선정이유.substr(1,50)+'...';

        workContent = `
            <div class="imgwork">
                <p><img src="${data[workIdx].thumb}"></p>
            </div>
            <div class="worktxt">
                <span></span>
                <div class="wTxt">
                    <div class="hh"><h2>${data[workIdx].제목}</h2></div>
                    <div class="tag">${keywords}</div>
                    <div class="p1">
                        <p>제작기간: ${data[workIdx].기간[0]}
                            기획: ${data[workIdx].기획}</p>
                    </div>
                    <div class="p2">
                        <p>${summary}</p>
                    </div>
                    </div>
                <div class="wBtn">
                    <ul>
                        <li data-url = "${data[workIdx].process}">
                            <a></a>
                            <p>Process</p>
                        </li>
                        <li data-url = "${data[workIdx].url}">
                            <a></a>
                            <p>Site View</p>
                        </li>
                        <li data-url = "${data[workIdx].down}">
                            <a></a>
                            <p>Download</p>
                        </li>
                    </ul>
                </div>    
            </div>
        `;
        
        elWork.innerHTML = workContent;


        //view btn
        const wBtn = document.querySelectorAll('.wBtn li');
        wBtn.forEach((btn,key)=>{
            btn.onclick=function(){
                let url = this.dataset.url;
                if(key){
                    if(data[workIdx].type == 'mobile'){
                        window.open(url,"_blank","width=414,height=896")
                    }else{
                        window.open("_blank").location.href = url;
                    }
                }else{
                    localStorage.workNum = workIdx;
                    location.href = url ;
                }
            }
        });

        //list btn
        const elListBtn = elWorkbtn.querySelectorAll('svg');
        elListBtn.forEach((btn,key)=>{
            btn.onclick=function(){
                workData(key)
                // active color
                elListBtn.forEach((j)=>{
                    j.classList.remove('active')
                })
                elListBtn[workIdx].classList.add('active')
            }
        });
        elListBtn[workIdx].classList.add('active')
    }

    workData(workIdx)


    // workbtn
    // Work

}
