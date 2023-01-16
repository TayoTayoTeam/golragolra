// 음료 개수 +- 버튼 설정
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
var countNum = document.querySelector(".menu_number");
var price = document.querySelector(".menu_price");

minus.addEventListener('click', () => {
    countNum.innerHTML--;
    price.innerHTML = (price * countNum);

    if (countNum.innerHTML <= 0) {
        countNum.innerHTML = 0;
    }
});
plus.addEventListener('click', () => {
    countNum.innerHTML++;
    price.innerHTML += price * countNum;
});

// 샷 추가 +- 버튼 설정
const ad_minus = document.querySelector(".add_minus");
const ad_plus = document.querySelector(".add_plus");
var ad_countNum = document.querySelector(".add_number");

ad_minus.addEventListener('click', () => {
    ad_countNum.innerHTML--;

    if (ad_countNum.innerHTML <= 0) {
        ad_countNum.innerHTML = 0;
    }
});
ad_plus.addEventListener('click', () => {
    ad_countNum.innerHTML++;
});

// 시럽 추가 +- 버튼 설정
const sy_minus = document.querySelector(".syrup_minus");
const sy_plus = document.querySelector(".syrup_plus");
var sy_countNum = document.querySelector(".syrup_number");

sy_minus.addEventListener('click', () => {
    sy_countNum.innerHTML--;

    if (sy_countNum.innerHTML <= 0) {
        sy_countNum.innerHTML = 0;
    }
});
sy_plus.addEventListener('click', () => {
    sy_countNum.innerHTML++;
});
