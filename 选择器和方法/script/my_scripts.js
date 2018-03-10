$(document).ready(function(){
   $(".guess_box").click(checkForcode);
    //start getRandom function
    function getRandom(num){
        var my_num=Math.floor(Math.random()*num);//产生指定的随机数
        return my_num;
    }
    //end getRandom function

    //start hideCode function
    var hideCode= function(){
        var numRand=getRandom(4);//产生1~4的随机数
        $(".guess_box").each(function(index,value){//遍历类为.guess_box的div
            if(numRand==index){//判断随机产生的数是否与遍历的数吻合
                $(this).append("<span id='has_discount'></span>");//增加span的元素
                return false;
            }
        })
    }
    //随机增加span元素
    //end hideCode function
    hideCode();
    //start checkForcode function  
    function checkForcode(){
        var discount;
        if ($.contains(this,document.getElementById("has_discount"))){//判断绑定事件的元素是否为随机加的span元素
            var my_num=getRandom(100);//查找到的话产生一个1~100的随机数
            discount="<p>你的折扣为码为："+my_num+"</p>";//并输出随机的折扣
        } else {
            discount="<p>不好意思你没抽中折扣！</p>"//否则提示没抽中
        }
        $("#result").append(discount);//增加到事件元素的后面的p标签中
        $(".guess_box").each(function(){
            if($.contains(this,document.getElementById("has_discount")))//判断是否为猜中的div
            {
                $(this).addClass("discount");//是的话改变样式
            }else{
                $(this).addClass("no_discount");//不是的话增加另一种样式
            }
            $(this).unbind('click');//去除其他的和所点击元素的click事件
        });//遍历所有class为.guess_box的元素
    }
    //end checkForcode function

        $(".guess_box").hover(
        function(){
            //移入事件
            $(this).addClass("my_hover");
        },
        function(){
            //移出事件
            $(this).removeClass("my_hover");
        }
    )//为class为guess_box的元素添加样式
});



