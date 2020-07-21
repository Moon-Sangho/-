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

setTimeout(function printTime() {
    const winNumber = document.createElement('div');
    winNumber.textContent = win[0];
    winBall.appendChild(winNumber);
}, 1000);

setTimeout(function printTime() {
    const winNumber = document.createElement('div');
    winNumber.textContent = win[1];
    winBall.appendChild(winNumber);
}, 2000);

setTimeout(function printTime() {
    const winNumber = document.createElement('div');
    winNumber.textContent = win[2];
    winBall.appendChild(winNumber);
}, 3000);

setTimeout(function printTime() {
    const winNumber = document.createElement('div');
    winNumber.textContent = win[3];
    winBall.appendChild(winNumber);
}, 4000);

setTimeout(function printTime() {
    const winNumber = document.createElement('div');
    winNumber.textContent = win[4];
    winBall.appendChild(winNumber);
}, 5000);

setTimeout(function printTime() {
    const winNumber = document.createElement('div');
    winNumber.textContent = win[5];
    winBall.appendChild(winNumber);
}, 6000);


// 화면에 보너스 번호 출력
setTimeout(function printTime() {
    const bonusBall = document.getElementById('bonusBall');
    const bonusNumber = document.createElement('div');
    bonusNumber.textContent = bonus;
    bonusBall.appendChild(bonusNumber);
}, 7000);

