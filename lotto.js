// 1부터 45의 숫자가 들어있는 배열 생성
const candidate = Array(45).fill().map(function(element, index) {
    return index + 1;
});

console.log(candidate);

// 1부터 45의 숫자가 들어있는 배열에서 숫자들을 추출하여 새로운 랜덤 배열 생성
const shuffle = [];
while (candidate.length) {
    const value = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    shuffle.push(value);
}

console.log(shuffle);

// 당첨 번호, 보너스 번호 추출
const win = shuffle.slice(0, 6);
const bonus = shuffle[shuffle.length - 1];

console.log('Win number :', win.sort(function (p, c) {return p - c}), 'bonus :', bonus);

// 화면에 당첨 번호 출력(1초에 하나씩)
const winBall = document.getElementById('winBall');

function BallCSS(number, result) {
    const ball = document.createElement('div');
    ball.textContent = number;
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '100%'; 
    ball.style.width = '20px';
    ball.style.height = '20px';
    ball.style.textAlign = 'center';
    ball.style.padding = '10px';
    ball.style.margin = '10px';
    let backGroundColor;
    if (number <= 10) {
        backGroundColor = 'red';
    } else if (number <= 20) {
        backGroundColor = 'orange';
    } else if (number <= 30) {
        backGroundColor = 'yellow';
    } else if (number <= 40) {
        backGroundColor = 'blue';
    } else {
        backGroundColor = 'green';
    }
    ball.style.background = backGroundColor;
    ball.style.fontWeight = 'bold'; 
    result.appendChild(ball);
}

setTimeout(function printTime() {
    BallCSS(win[0], winBall);
}, 1000);

setTimeout(function printTime() {
    BallCSS(win[1], winBall);
}, 2000);

setTimeout(function printTime() {
    BallCSS(win[2], winBall);
}, 3000);

setTimeout(function printTime() {
    BallCSS(win[3], winBall);
}, 4000);

setTimeout(function printTime() {
    BallCSS(win[4], winBall);
}, 5000);

setTimeout(function printTime() {
    BallCSS(win[5], winBall);
}, 6000);


// 화면에 보너스 번호 출력
const bonusBall = document.getElementById('bonusBall');

setTimeout(function printTime() {
    BallCSS(bonus, bonusBall);
}, 7000);

