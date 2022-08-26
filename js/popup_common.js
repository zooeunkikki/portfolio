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
    precess(data.project);
})

function precess(data){
    const elMain = document.querySelector('main');
    let num = localStorage.workNum;
    let viewTag = '', program='', detail='';

    data[num].프로그램활용도.forEach(function(v,k){
        program += `<div class="ph">
                        <p>${Object.keys(v)}</p>
                        <span><i style="width:0"></i></span>
                        <p>${v[Object.keys(v)]}</p>
                    </div>`;
    })
                
    data[num].디테일.forEach(function(v,k){
        detail +=``;
    })

    viewTag = ` <div class="popupbox">
                    <svg data-url="${data[num].process}" class="prev" viewBox="0 0 131 131">
                        <path d="M97.6783 32.5592C115.66 50.5413 115.66 79.696 97.6783 97.6781C79.6963 115.66 50.5415 115.66 32.5594 97.6781C14.5774 79.696 14.5774 50.5413 32.5594 32.5592C50.5415 14.5771 79.6963 14.5771 97.6783 32.5592Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M95.557 95.5568C112.368 78.7463 112.368 51.491 95.557 34.6805C78.7465 17.87 51.4913 17.87 34.6808 34.6805C17.8703 51.491 17.8703 78.7463 34.6808 95.5568C51.4913 112.367 78.7465 112.367 95.557 95.5568ZM97.6783 97.6781C115.66 79.696 115.66 50.5413 97.6783 32.5592C79.6963 14.5771 50.5415 14.5771 32.5594 32.5592C14.5774 50.5413 14.5774 79.696 32.5594 97.6781C50.5415 115.66 79.6963 115.66 97.6783 97.6781Z" fill="black"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M52.3007 82.7961L36.3908 66.8862C35.4145 65.9099 35.4145 64.327 36.3908 63.3507L52.3007 47.4408C53.277 46.4644 54.86 46.4644 55.8363 47.4408C56.8126 48.4171 56.8126 50 55.8363 50.9763L44.1941 62.6184H93.7378V67.6184H44.1941L55.8363 79.2606C56.8126 80.2369 56.8126 81.8198 55.8363 82.7961C54.86 83.7724 53.277 83.7724 52.3007 82.7961Z" fill="black"/>
                    </svg>
                    <svg data-url="${data[num].process}" class="next" viewBox="0 0 131 131">
                    <path d="M32.5595 32.5592C14.5774 50.5413 14.5774 79.696 32.5595 97.6781C50.5415 115.66 79.6963 115.66 97.6783 97.6781C115.66 79.696 115.66 50.5413 97.6783 32.5592C79.6963 14.5771 50.5415 14.5771 32.5595 32.5592Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6808 95.5568C17.8703 78.7463 17.8703 51.491 34.6808 34.6805C51.4913 17.87 78.7465 17.87 95.557 34.6805C112.368 51.491 112.368 78.7463 95.557 95.5568C78.7465 112.367 51.4913 112.367 34.6808 95.5568ZM32.5595 97.6781C14.5774 79.696 14.5774 50.5413 32.5595 32.5592C50.5415 14.5771 79.6963 14.5771 97.6783 32.5592C115.66 50.5413 115.66 79.696 97.6783 97.6781C79.6963 115.66 50.5415 115.66 32.5595 97.6781Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M77.9371 82.7961L93.847 66.8862C94.8233 65.9099 94.8233 64.327 93.847 63.3507L77.9371 47.4408C76.9607 46.4644 75.3778 46.4644 74.4015 47.4408C73.4252 48.4171 73.4252 50 74.4015 50.9763L86.0437 62.6184H36.5V67.6184H86.0437L74.4015 79.2606C73.4252 80.2369 73.4252 81.8198 74.4015 82.7961C75.3778 83.7724 76.9607 83.7724 77.9371 82.7961Z" fill="black"/>
                    <svg>
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
                                            <li>
                                                <a></a>
                                                <p>Process</p>
                                            </li>
                                            <li>
                                                <a></a>
                                                <p>Site View</p>
                                            </li>
                                            <li>
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
                        <p><img src="./img/popup/royal/mainpage_design.svg"></p>

                        <div class="Dtxt">
                            <h4>설명</h4>
                            <ul>
                                <li><p>01_ 로그인 & 아이콘<br>
                                    사이트를 접속하는 사용자들도 확인 가능하도록 디자인했습니다.</p></li>
                                <li><p>02_ 버거메뉴<br>
                                    사이트 뒷면이 가려 사용하는것에 방해받지 않도록 디자인하였습니다.</p></li>
                                
                                    <li><p>03_좌측 화면<br>
                                    메인페이지 안에서 화면을 분할하여 시즌 · 이벤트 상품이 들어오도록 디자인하여 주요상품을 확인할 수 있는 공간을 마련하였으며 페이지를 스크롤해도 따라오는 기능을 추가해 가시성을 확보하도록 하였습니다. </p></li>
                                <li><p>04_추천상품<br>
                                    소비자들이 가장 선호 및 구매율이 높은 상품을 상단부에 배치하여 구매율을 올릴 수 있도록 디자인했습니다.</p></li>
                                <li><p>05_리뷰 & 이벤트<br>
                                    슬라이드 버튼을 추가하여 버튼을 누를때 마다 이벤트 영역이 바뀔수 있도록 디자인했습니다.</p></li>
                            </ul>
                        </div>
                    </section>

                    <section class="four">
                        <h3>기능설명</h3>
                        <p><img src="./img/popup/royal/mainpage_function.svg"></p>

                        <div class="Ftxt">
                            <h4>설명</h4>
                            <ul>
                                <li>
                                    <p>01_ 로그인 & 아이콘<br>
                                        사이트를 접속하는 사용자들도 확인 가능하도록 디자인했습니다.</p>
                                </li>
                                <li>
                                    <p>02_ 로그인 & 아이콘<br>
                                        사이트를 접속하는 사용자들도 확인 가능하도록 디자인했습니다.</p>
                                </li>
                                <li>
                                    <p>03_ 로그인 & 아이콘<br>
                                        사이트를 접속하는 사용자들도 확인 가능하도록 디자인했습니다.</p>
                                </li>
                                <li>
                                    <p>04_ 로그인 & 아이콘<br>
                                        사이트를 접속하는 사용자들도 확인 가능하도록 디자인했습니다.</p>
                                </li>
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
                num--;
            }else{
                num++;
            }
            localStorage.workNum = num;
            location.href = url;
        }
    })
}