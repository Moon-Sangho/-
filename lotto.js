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

// 화면에 당첨 번호 출력
const winBall = document.getElementById('winBall');

for (let i = 0; i < win.length; i++) {
    const winNumber = document.createElement('div');
    winNumber.textContent = win[i];
    winBall.appendChild(winNumber);
}

// 화면에 보너스 번호 출력
const bonusBall = document.getElementById('bonusBall');
const bonusNumber = document.createElement('div');

bonusNumber.textContent = bonus;
bonusBall.appendChild(bonusNumber);

