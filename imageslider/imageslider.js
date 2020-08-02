let images = ['1.jpg','2.jpg','3.jpg']; //img src 
let i = 0; 

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const slider = document.getElementById("slider")
slider.src = images[0]; //첫 사진 불러오기

// dot 클릭시 event 
function handleDot(number) {
    slider.src = images[number];
    i = number ; 
}

//왼쪽 버튼 누를 클릭시 밑에 함수가 실행됨 
function handleLeft(){
    // 위에 변수 i = 0 으로 시작
    console.log(i)
    i--; // i = -1 로 저장
    if(i < 0){ // i 가 0 보다 작으므로 if 문을 통과
        i = images.length -1; // i 값을 3(image.length) - 1 로 설정
    }     
    slider.src = images[i]; // if문을 통과한 i 값 2가 출력
    console.log(i)
}

//오른족 버튼 클릭시 이벤트
function handleRight(){
    // 위에 변수 i = 0 으로 시작
    i++;  // i = 1
    if( i >= images.length){ // i 가 3 이 될시 if 문을 통과함
        i = 0;
    }
    slider.src = images[i]; // i = 1 대입
}


//init 이라는 함수에 실행하고싶은 함수를 넣고 실행
// 이유 : 보기 쉽게 하려고
function init(){
    leftBtn.addEventListener("click",handleLeft);
    //왼쪽 버튼에 이벤트 추가 => 클릭시 handleLeft 라는 함수가 실행되도록
    rightBtn.addEventListener("click",handleRight);
    //오른쪽 버튼에 이벤트 추가 => 클릭시 handleRight 라는 함수가 실행되도록
    setInterval(handleRight,5000);
    //setInterval 이라는 함수는 자신이 정한 시간에 함수가 실행되도록 설정함
     //5초후 handleRight라는 함수가 실행되도록 뒤에있는초는 1000에 1초임

}
init();