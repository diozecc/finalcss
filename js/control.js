$('#slider1').owlCarousel({
    loop:true,	// cho lap lại
    items:1,	// xuất hiện 1 ảnh
    smartSpeed:1000,   	// tốc độ thay đổi ảnh
    autoplay:true,		// cho phép tự động chạy
    autoplayTimeout:3000,  // thời gian chờ khi chuyển ảnh khi chạy tự động
    nav:false,	// cho xuất hiện bộ nút tới lui 
    dots:true,	// cho xuất hiện dấu chấm
    mouseDrag: true, // Vô hiệu hóa kéo và thả bằng chuột
    touchDrag: true, // Vô hiệu hóa kéo và thả bằng cảm ứng
    animateIn: 'flipInX',
    animateOut: 'fadeOut',
    autoplayHoverPause: true, // Tạm dừng khi di chuột vào ảnh
})	
$('#slider2').owlCarousel({
    loop:false,	// cho lap lại
    items:4,	// xuất hiện 1 ảnh
    smartSpeed:850,   	// tốc độ thay đổi ảnh
    autoplay:false,		// cho phép tự động chạy
    autoplayTimeout:850,  // thời gian chờ khi chuyển ảnh khi chạy tự động
    nav:true,	// cho xuất hiện bộ nút tới lui 
    dots:false,	// cho xuất hiện dấu chấm
})	