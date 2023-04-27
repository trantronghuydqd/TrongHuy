// hiện nút xem chi tiết sản phẩm khi hover
$(document).ready(function () {
    var cards = document.querySelectorAll('.product-box');

[...cards].forEach((card)=>{
    card.addEventListener('mouseover', function(){
        card.classList.add('is-hover');
    });

    card.addEventListener('mouseleave', function(){
        card.classList.remove('is-hover');
    });
})
});
//Kiểm tra ràng buộc modal đăng nhập và đăng ký
$(document).ready(function() {
    function ktraten1() {
        let ten = $("#user1").val();
        let patten = /^([A-Z]{1}[a-z]*\s)+([A-Z]{1}[a-z]*){1}$/;
        if (patten.test(ten)) //dung
        {
            $("#er1").html("*");
            $("#user1").removeClass('is-invalid');
            $("#user1").addClass('is-valid');
            return true;
        } else {
            $("#er1").html("Ten sai!!!!");
            $("#user1").addClass('is-invalid');
            return false;
        }


    }
    $("#user1").blur(function(e) {
        ktraten1();

    });
    function ktraho() {
        let ho = $("#ho").val();
        let patten = /^([A-Z]{1}[a-z]*)$/;
        if (patten.test(ho))
        {
            $("#erho").html("");
            $("#ho").removeClass('is-invalid');
            $("#ho").addClass('is-valid');
            return true;
        } else {
            $("#erho").html("Họ không hợp lệ");
            $("#ho").addClass('is-invalid');
            return false;
        }
    }
    $("#ho").blur(function(e) {
        ktraho();
    });
    function ktraten() {
        let ten = $("#ten").val();
        let patten = /^([A-Z]{1}[a-z]*)$/;
        if (patten.test(ten))
        {
            $("#erten").html("");
            $("#ten").removeClass('is-invalid');
            $("#ten").addClass('is-valid');
            return true;
        } else {
            $("#erten").html("Tên không hợp lệ");
            $("#ten").addClass('is-invalid');
            return false;
        }
    }
    $("#ten").blur(function(e) {
        ktraten();
    });
    function ktrasdt() {
        let sdt = $("#sdt").val();
        let patten = /^\d{1,12}$/;
        if (patten.test(sdt))
        {
            $("#ersdt").html("");
            $("#sdt").removeClass('is-invalid');
            $("#sdt").addClass('is-valid');
            return true;
        } else {
            $("#ersdt").html("Số điện thoại không hợp lệ");
            $("#sdt").addClass('is-invalid');
            return false;
        }
    }
    $("#sdt").blur(function(e) {
        ktrasdt();
    })
    function ktramail() {
        let mail = $("#email").val();
        let patten = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (patten.test(mail))
        {
            $("#ermail").html("");
            $("#email").removeClass('is-invalid');
            $("#email").addClass('is-valid');
            return true;
        } else {
            $("#ermail").html("Email không hợp lệ");
            $("#email").addClass('is-invalid');
            return false;
        }
    }
    $("#email").blur(function(e) {
        ktramail();
    })
    function ktrapass() {
        let pass = $("#pass").val();
        if (pass === '')
        {
            $("#erpass").html("Mật khẩu không được rỗng");
            $("#pass").addClass('is-invalid');
            return false;
            
        } else {
            $("#erpass").html("");
            $("#pass").removeClass('is-invalid');
            $("#pass").addClass('is-valid');
            return true;
        }
    }
    $("#pass").blur(function(e) {
        ktrapass();
    })
});