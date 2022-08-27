function startPagePopup() {
  var width = '650';
  var height = '500';

  var left = Math.ceil((window.screen.width - width)/2);
  var right = Math.ceil((window.screen.height - height)/2);

  window.open('C:\Users\gjdbs\OneDrive\바탕 화면\PROJECT\Wep Project\golragolra\2022_HEO_golra\0819&0828_Heo\startPagePopup.html',
  'startpagePopup', 'width='+width+'height='+height+'left='+left);
}



btn_coffee.addEventListner('click', function() {
    
});

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const totalCount = 50;                              // 총 데이터 갯수
const limit = 16;                                   // 한 페이지에 나타낼 데이터 갯수
const pageCount = 2;                                // 화면에 나타낼 페이지 갯수
const currentPage = 1;                              // 현재 페이지

let totalPage = Math.cell(totalCount / limit);      // 한 페이지에 나타낼 데이터 갯수
let pageGroup = Math.cell(currentPage / pageCount); // 현재 페이지의 그룹

let lastNumber = pageGroup * pageCount // 5
if (lastNumber > totalPage) {
  lastNumber = totalPage
}
let firstNumber = lastNumber - (pageCount - 1)

const next = lastNumber + 1
const prev = firstNumber - 1

// 1~5만큼 페이지네이션 그려줌
for (let i = firstNumber; i <= lastNumber; i++) {
  html += `<button class="pageNumber" id="page_${i}">${i}</button>`
}