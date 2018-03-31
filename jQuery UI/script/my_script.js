$(document).ready(function(){
    $("#datepicker").datepicker({
        changeYear:true,changeMonth:true
    })
    $("#type_select").buttonset();
    $("#slide_dist").slider({
        value:0,
        min:0,
        max:500,
        step:10,
        slide:function (event,ui) {
            $("#distance").val(ui.value);
        }//与之关联的的数值显示
    })
    $("#slide_weight").slider({
        value:0,
        min:0,
        max:5000,
        step:5,
        slide:function (event,ui) {
            $("#weight").val(ui.value);
        }//与之关联的的数值显示
    })
    $("#slide_height").slider({
        value:0,
        min:0,
        max:20,
        step:1,
        slide:function (event,ui) {
            $("#height").val(ui.value);
        }//与之关联的的数值显示
    })
    $("#slide_latitude").slider({
        value:0,
        min:-90,
        max:90,
        step:0.00001,
        slide:function (event,ui) {
            $("#latitude").val(ui.value);
        }//与之关联的的数值显示
    })
    $("#slide_longitude").slider({
        value:0,
        min:-90,
        max:90,
        step:0.00001,
        slide:function (event,ui) {
            $("#longitude").val(ui.value);
        }//与之关联的的数值显示
    })

    function refreshSwatch(){
        var red=$("#red").slider("value");//获取颜色
        var green=$("#green").slider("value");
        var blue=$("#blue").slider("value");

        var My_rgb="rgb("+red+","+green+","+blue+")";//将获取的值改为rgb模式
        $("#swatch").css("background-color",My_rgb);//为颜色快加颜色

        $("#red_val").val(red);//同步显示颜色数值
        $("#green_val").val(green);
        $("#blue_val").val(blue);
        $("#color_val").val(My_rgb);
    }//将颜色填入颜色模块

    $("#red,#green,#blue").slider({
        orientation:"horizontal",
        range:"min",
        max:255,
        value:175,//初值
        slide:refreshSwatch,//滑动时运行的函数
        change:refreshSwatch//改变时运行的函数
    })//添加颜色滑动
    $("button:submit").button();
})