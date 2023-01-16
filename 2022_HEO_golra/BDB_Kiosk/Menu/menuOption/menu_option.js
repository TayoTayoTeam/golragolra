// 음료 개수 +- 버튼 설정
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
var countNum = document.getElementById("menu_number");
var price = document.getElementById("menu_price");
var MPrice = 1500;

minus.addEventListener('click', () => {
    if (countNum.innerHTML <= 0) {
        countNum.innerHTML = 0;
    }
    countNum.innerHTML--;
    MPrice = MPrice - 1500;
});
plus.addEventListener('click', () => {
    countNum.innerHTML++;
    MPrice = MPrice + 1500;
});
price.innerHTML = "&#8361" + " " + MPrice;

// 샷 추가 +- 버튼 설정
const ad_minus = document.getElementById("add_minus");
const ad_plus = document.getElementById("add_plus");
var ad_countNum = ddocument.getElementById("add_number");

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
const sy_minus = document.getElementById("syrup_minus");
const sy_plus = document.getElementById("syrup_plus");
var sy_countNum = document.getElementById("syrup_number");

sy_minus.addEventListener('click', () => {
    sy_countNum.innerHTML--;

    if (sy_countNum.innerHTML <= 0) {
        sy_countNum.innerHTML = 0;
    }
});
sy_plus.addEventListener('click', () => {
    sy_countNum.innerHTML++;
});
