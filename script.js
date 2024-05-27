let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// 獲取按鈕元素
const downloadButton = document.getElementById('downloadButton');
// 添加點擊事件監聽器
downloadButton.addEventListener('click', () => {
     // 檔案的 URL
     const fileUrl = 'file/cv.pdf';

     // 使用 createElemenet 創建 a 標籤
     const link = document.createElement('a');

     // 將標籤的 href 屬性設置為檔案的 URL
     link.href = fileUrl;

     // 設置標籤的 download 屬性為要下載的檔案名稱
     link.download = 'Eric Li CV';

     // 將標籤添加到文檔中
     document.body.appendChild(link);

     // 模擬點擊標籤以開始下載檔案
     link.click();

     // 下載完成後移除標籤
     document.body.removeChild(link);
 });