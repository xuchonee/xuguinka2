const but1 = document.getElementById('but1');
const but2 = document.getElementById('but2');
const wrap = document.querySelector('.wrap');

let currentScale = 1.0;

function diChuyen() {
    const wrapRect = wrap.getBoundingClientRect();
    const wrapWidth = wrapRect.width;
    const wrapHeight = wrapRect.height;
    const but2Width = but2.offsetWidth;
    const but2Height = but2.offsetHeight;
    
    const newPosX = Math.random() * (wrapWidth - but2Width);
    const newPosY = Math.random() * (wrapHeight - but2Height);
    
    but2.style.left = `${newPosX}px`;
    but2.style.top = `${newPosY}px`;
}

but2.addEventListener('mouseenter', diChuyen);

but2.addEventListener('mouseenter', function() {
    currentScale += 0.1;
    but1.style.transform = `scale(${currentScale})`;
});

but2.addEventListener('mouseout', function() {});

const xin = document.querySelector('.xin');

but1.addEventListener('click', function() {
    xin.classList.toggle('show');
});
// Thêm sự kiện touchstart cho nút #but2
but2.addEventListener('touchstart', function(event) {
    // Ngăn sự kiện mặc định của cảm ứng di chuyển trang
    event.preventDefault();
    
    // Gọi hàm diChuyen()
    diChuyen();
    
    // Tương tự như khi di chuột vào
    currentScale += 0.1;
    but1.style.transform = `scale(${currentScale})`;
});

// Giữ lại sự kiện mouseenter cho #but2
but2.addEventListener('mouseenter', diChuyen);
