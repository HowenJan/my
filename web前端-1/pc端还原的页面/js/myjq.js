$(window).ready(function () {
    $(".fl input").focus(function () {
        $(".xiala").css("display","block")
        // var value=$(".fl input").val();
        // console.log(value)
    });
    $(".fl input").blur(function () {
        $(".xiala").css("display","none")

    });
    // var l= $(".xiala dd");
    // var arr=[];
    // for(var i=0;i<40;i++){
    //     arr[arr.length]=l.eq(i).html();
    // }
    // console.log(arr);
    // $(".fl input").keyup(function () {
    //     var value=$(".fl input").val();
    //
    //     for(var j=1;j<40;j++){
    //         if(value===arr[j]){
    //             console.log(arr[j]);
    //             $(".xiala dl").children("dd").remove();
    //         }
    //     }
    //     // console.log(value);
    //
    //
    // })

    $(".special").mouseover(function () {
        $(".myself").css("display","block");
    });
    $(".special").mouseout(function () {
        $(".myself").css("display","none");
    });
    $(".myself").mouseover(function () {
        $(".myself").css("display","block");
    });
    $(".myself").mouseout(function () {
        $(".myself").css("display","none");
    });
    // window.onscroll=function () {
    //     var val = scroll().top;
    //     $(".fuzhu").animate({top:val+550}, 1);
    //     if(val>250){
    //         $(".fuzhu").animate({top:val+490}, 1);
    //         $(".fuzhu1").css("display","block");
    //         $(".fuzhu1").animate({top:val+550}, 1);
    //    }
    //    if(val<250){
    //        $(".fuzhu1").css("display","none");
    //    }
    // }

    $(".fuzhu1").click(function() {
        $("html,body").animate({scrollTop:0}, 200);
    });


    $(".fr li").mouseenter(function () {
        var left=this.offsetLeft;
        // console.log(left);
        if(left===420){
            $('.fr .bottom').css("width","120px")
            $(this).eq(3).css("width","60px")
        }else{
            $('.fr .bottom').css("width","60px")
        }
        $(".fr .bottom").animate({left:left},100);




    })
    $(".fr").mouseenter(function () {
        $(".fr .bottom").css("display","block");

    })
    $(".fr").mouseleave(function () {
        $(".fr .bottom").css("display","none");

    })

})