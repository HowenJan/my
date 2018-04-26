window.onload=function () {
    var body=document.querySelector("body");
    var fuzhu=document.querySelector(".fuzhu");
    var fuzhu1=document.querySelector(".fuzhu1");
    window.onscroll=function () {
        var val=scroll().top;
        console.log(val);
        // var valn=
        animate(fuzhu,val+550);
        if(val>250){
            animate(fuzhu,val+490);
            fuzhu1.style.display="block";
            animate(fuzhu1,val+550);
        }
        if(val<250){
            fuzhu1.style.display="none";
        }
        fuzhu1.onclick=function () {
            animate(body,15);
        }
    }

    var bottom=document.querySelector(".fr .bottom");
    // console.log(bottom);

}