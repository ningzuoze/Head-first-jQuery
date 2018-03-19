$(document).ready(function(){

    window.onblur=stopLightning;
    window.onfocus=goLightning;

    var int1,int2,int3;
    function goLightning(){
    int1= setInterval("lightning('lightning1')",4300);
    int2= setInterval("lightning('lightning2')",5000);
    int3= setInterval("lightning('lightning3')",7000);
    }
    function stopLightning(){
        clearInterval(int1);
        clearInterval(int2);
        clearInterval(int3);
    }
    

    //闪电背景


    var clix=[0,0,0,0]//储存各个部位的样式

    $("#head").click(function(){//调用函数
        moveMe(0,this);
    });

    $("#eyes").click(function(){
        moveMe(1,this);
    });

    $("#nose").click(function(){
        moveMe(2,this);
    });

    $("#mouth").click(function(){
        moveMe(3,this);
    });

    function moveMe(i,obj){
            if(clix[i]<9){//clix[i]=0,数组clix中都为0
                $(obj).animate({left:"-=357px"},500);//向做移动
                clix[i]=clix[i]+1;//i+=1
            }else{
                    clix[i]=0;//当i>9后清0
                    $(obj).animate({left:"0px"},500);//回到开始部分
            }
    }

    var w=367;//一个样式的长
    var m=10;//产生的1-10随机样式

    $("#btnRandom").click(randomize);//产生随机的面具
    $("#btnReset").click(reset);//重置按钮

    function getRandom(num){//随机数函数
        var my_random_num=Math.floor(Math.random()*num)//产生随机的数字
        return my_random_num;//返回结果
    }

    function randomize(){
        $(".face").each(function(index){//遍历面具的各个部位
            var target_position=getRandom(m);//产生1-10的随机数
            var current_position=clix[index];//当前部位位于那个位置
            clix[index]=target_position;//换到哪个随机产生的部位
            if(target_position>current_position){//随机值大于当前值的话
                var move_to = (target_position-current_position)*w;//就用随机值减去当前的值
                $(this).animate({left:"-="+move_to+"px"});//随机值大于当前值向左一定
            }else if(target_position<current_position){//当前值大于随机值
            var move_to=(current_position - target_position)*w;//随机值减当前值
            $(this).animate({left:"+="+move_to+"px"},500);//用animate函数向右移动
                }else{

                }
        })
    }//随机面具函数

    function reset(){
        $(".face").each(function (index) {
            clix[index]=0;
            $(this).animate({left:"0px"},500);//恢复为零
        })
    }//重置面具


})

           
function lightning(str){
        $("#"+str).fadeIn(250).fadeOut(250);//获取闪电隐藏和显示
}//闪电背景函数（必须放到加载前不然检测不到）