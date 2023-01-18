const prev_menu = document.querySelector('.prev');
const next_menu = document.querySelector('.next');
const menu = document.querySelectorAll('.ch_coffee');

let index = 0;

prev_menu.addEventListener('click', () => {
  if (index === 0) index += 1;
  index -= 1;
  menu.style.transform = `translate3d(-${220 * index}px, 0, 0)`;
});

// 메뉴 선택창에서 클릭한 메뉴 옵션창 띄우기
function openMenu(image, menu_name) {     
  var img = new Image();
  img.src = image;

  var uri = './menuOption/coffee_option.html';
  let openWin = window.open(uri, 'child', 'width=430px, height=600px, left=535px, top=150px, toolbars=no, scrollbars=no');

  openWin.document.getElementById("menu_title").value = menu_name;
  openWin.document.getElementById("menu_image").value = img.src;
}

// const total = document.getElementById("amount");

