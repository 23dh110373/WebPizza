let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
 let lengthItems = items.length - 1; //active là 0 sltđ là 7 phải -1 đi vì đếm từ 0//

 next.onclick = function() { //click next chạy 1 function,tăng active lên 1,tăng vtri active của item lên vtri tiếp theo
    if(active + 1 > lengthItems) { //active htai+ 1 > hơn sltđ , chạy lại từ đầu active = 0
        active = 0;
    }else {
        active = active + 1; //vẫn thỏa mã + bth
    }

    reloadSlider();
 }
 prev.onclick = function() {
    if(active - 1 < 0) {
        active = lengthItems;
    }else{
        active = active -1;
    }
    reloadSlider();
 }
 let refreshSlider = setInterval(() => {next.click()}, 3000);//tự động chuyển sau 3s//

 function reloadSlider() {
    let checkLeft = items[active].offsetLeft; //checkleft là kcach mép bên trái của class list đến mép bên trái của item đang đc active
    list.style.left = -checkLeft + 'px'; //dịch chuyển về bên trái vừa bằng checkleft(di chuyển ngược cần có dấu - phía trước)
    
    let lastActiveDot = document.querySelector('.slider .dots li.active'); //xóa h/ứng active ở vtri li cũ đi
    lastActiveDot.classList.remove('active'); //xóa
    dots[active].classList.add('active'); //active cho vtri mới
    clearInterval(refreshSlider); //xóa lặp lại
    refreshSlider = setInterval(() => {next.click()}, 3000); //đếm lại từ đầu//

 }
 dots.forEach((li, key) => { //key là vị trí tương ứng của mỗi thẻ li//
    li.addEventListener('click', function() {
        active = key;
        reloadSlider();
    })
 })