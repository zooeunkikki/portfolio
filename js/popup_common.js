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



let data;

fetch('./js/data.json')
.then((res)=>res.json())
.then((d)=>{
    data = d.project;
    setTimeout(precess,50);
})

function precess(){
    const elMain = document.querySelector('.popupbox');
    let num = localStorage.workNum;
    let viewTag = '', program='', designInfo='', develInfo='';

    data[num].프로그램활용도.forEach(function(v,k){
        program += `<div class="ph">
                        <p>${Object.keys(v)}</p>
                        <span><i style="width:0"></i></span>
                        <p>${v[Object.keys(v)]}</p>
                    </div>`;
    })

    data[num].디테일[0]['site View'].설명.forEach((v)=>{
        designInfo +=`<li>${v}</li>`;
    });

    data[num].디테일[1]['기능설명'].설명.forEach((v)=>{
        develInfo +=`<li>${v}</li>`;
    });

    viewTag = ` <div class="pop_content">
                    <div class="htxt">
                        <h2>${data[num].제목}</h2>
                    </div>

                    <section class="one">
                        <h2 class="vrtxt">${data[num].vr}</h2>
                        <div class="flow">
                            <div class="flowL">
                                <div class="imgw">
                                    <p><img src="${data[num].thumb}"></p>
                                </div>
                                <div class="link">
                                    <span></span>
                                    <div class="linkT">
                                        <p>제작 기간: ${data[num].기간[0]}</p>
                                        <p>기여도: ${data[num].기획}</p>
                                    </div>
                                    <div class="linkB">
                                        <ul>
                                            <li data-url = "${data[num].precess}">
                                                <a></a>
                                                <p>Process</p>
                                            </li>
                                            <li data-url = "${data[num].url}">
                                                <a></a>
                                                <p>Site View</p>
                                            </li>
                                            <li data-url = "${data[num].down}">
                                                <a></a>
                                                <p>Download</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="flowR">
                                <ul>
                                    <li>
                                        <h3>사이트 선정이유</h3>
                                        <p>${data[num].선정이유}</p>
                                    </li>
                                    <li>
                                        <h3>프로그램 활용도</h3>
                                        ${program}                                        
                                    </li>
                                    <li>
                                        <h3>총 작업시간</h3>
                                        <p>${data[num].기간[0]}
                                        ${data[num].기간[1]}</p>
                                        <p class="liImg"><img src="${data[num].기간[2]}"></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="diagram">
                            <h3>정보설계</h3>
                            <p><img src="${data[num].flow}"></p>
                        </div>
                        <div class=""></div>
                    </section>
                    
                    <section class="two">
                        <h3>와이어프레임</h3>
                        <p><img src="${data[num].wireframe}"></p>
                    </section>

                    <section class="three">
                        <h3>디자인 * Site View</h3>
                        <p><img src="${data[num].디테일[0]['site View'].image}"></p>

                        <div class="Dtxt">
                            <h4>설명</h4>
                            <ul>
                                ${designInfo}
                            </ul>
                        </div>
                    </section>

                    <section class="four">
                        <h3>기능설명</h3>
                        <p><img src="${data[num].디테일[1]['기능설명'].image}"></p>

                        <div class="Ftxt">
                            <h4>설명</h4>
                            <ul>
                                ${develInfo}
                            </ul>
                        </div>
                    </section>

                    <section class="five">
                        <h3>문제처리방식</h3>
                        <div class="Fsvg">
                            <p>${data[num].문제처리방식}</p>
                        </div>
                    </section>
                </div>`;

    elMain.innerHTML = viewTag;

    const program_per = document.querySelectorAll('i');
    const listBtn = document.querySelectorAll('svg');
    
    

    program_per.forEach((v,k)=>{
        setTimeout(()=>{
            v.style = `width:${data[num].프로그램활용도[k][Object.keys(data[num].프로그램활용도[k])]}`;
        },300*k)
    });
    
    listBtn.forEach(function(btn,k){
        btn.onclick=function(){
            let url = this.dataset.url;
            if(k==0){
                // prev
                if( 0 < num ){num--;
                    
                }
                if(num==0){
                    listBtn[0].style = 'opacity:0 ';
                }

            }else if(k==2){
                // next
                if(data.length-1 > num){
                    num++;
                }
                if(num > 0){
                    listBtn[0].style = 'opacity:1 ';
                }
                
            }

            localStorage.workNum = num;
            elMain.classList.add('active');
            setTimeout(()=>{
                precess();
                elMain.classList.remove('active');
                setTimeout(()=>{
                },100);
            },500);
            
            
            if(k==1) location.href = url;
            // 
        }
    })

    
}