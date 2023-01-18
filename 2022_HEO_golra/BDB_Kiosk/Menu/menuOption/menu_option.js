// 음료 개수 +- 버튼 설정
function price_Calculation(type) {
    const price_cal = document.getElementById("price_Cal");
    const price_Num = document.getElementById("menu_number");
    let price = price_cal.innerText;

    if (type === "plus") {
        price = parseInt(price) + 1500;
        price_Num.innerText++;
        price_cal.innerText = price;
    }
    else if (type === "minus") {
        if (parseInt(sy_Numcount) <= 0) {
            sy_Numcount = 0;
        }
        else {
            price_Num.innerText--;
        }
        price_cal.innerText = price;
    }
}

// 샷, 시럽 추가 +- 버튼 설정
function count(type) {
    //결과를 표시할 element
    const sy_countNum = document.getElementById("syrup_count");
    const ad_countNum = document.getElementById("add_count");

    // 현재 화면에 표시된 값
    let sy_Numcount = sy_countNum.innerText;
    let ad_Numcount = ad_countNum.innerText;

    // 시럽 +- 버튼 클릭 시
    if (type === 'sy_plus') {
        sy_Numcount = parseInt(sy_Numcount) + 1;
        sy_countNum.innerText = sy_Numcount;
    }

    else if (type === 'sy_minus') {
        if (parseInt(sy_Numcount) <= 0) {
            sy_Numcount = 0;
        }
        else {
            sy_Numcount = parseInt(sy_Numcount) - 1;
        }
        sy_countNum.innerText = sy_Numcount;
    }

    // 샷 +- 버튼 클릭 시
    else if (type === "ad_plus") {
        ad_Numcount = parseInt(ad_Numcount) + 1;
        ad_countNum.innerText = ad_Numcount;
    }

    else if (type === "ad_minus") {
        if (parseInt(ad_Numcount) <= 0) {
            ad_Numcount = 0;
        }
        else {
            ad_Numcount = parseInt(ad_Numcount) - 1;
        }
        ad_countNum.innerText = ad_Numcount;
    }
}
