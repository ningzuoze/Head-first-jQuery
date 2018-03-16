$(document).ready(function(){

    function card(name,suit,value){
        this.name=name;
        this.suit=suit;
        this.value=value;
    };//创建扑克牌（牌名，花色，等于的数字）


    var deck=[
        new card('Ace','Hearts',11),//实列化对象
        new card('Two','Hearts',2),
        new card('Three','Hearts',3),
        new card('Four','Hearts',4),
        new card('Five','Hearts',5),
        new card('Six','Hearts',6),
        new card('Seven','Hearts',7),
        new card('Eight','Hearts',8),
        new card('Nine','Hearts',9),
        new card('Ten','Hearts',10),
        new card('Jack','Hearts',10),
        new card('Queen','Hearts',10),
        new card('King','Hearts',10),
        new card('Ace','Spades',11),
        new card('Two','Spades',2),
        new card('Three','Spades',3),
        new card('Four','Spades',4),
        new card('Five','Spades',5),
        new card('Six','Spades',6),
        new card('Seven','Spades',7),
        new card('Eight','Spades',8),
        new card('Nine','Spades',9),
        new card('Ten','Spades',10),
        new card('Jack','Spades',10),
        new card('Queen','Spades',10),
        new card('King','Spades',10),
        new card('Ace','Clubs',11),
        new card('Two','Clubs',2),
        new card('Three','Clubs',3),
        new card('Four','Clubs',4),
        new card('Five','Clubs',5),
        new card('Six','Clubs',6),
        new card('Seven','Clubs',7),
        new card('Eight','Clubs',8),
        new card('Nine','Clubs',9),
        new card('Ten','Clubs',10),
        new card('Jack','Clubs',10),
        new card('Queen','Clubs',10),
        new card('King','Clubs',10),
        new card('Ace','Diamonds',11),
        new card('Two','Diamonds',2),
        new card('Three','Diamonds',3),
        new card('Four','Diamonds',4),
        new card('Five','Diamonds',5),
        new card('Six','Diamonds',6),
        new card('Seven','Diamonds',7),
        new card('Eight','Diamonds',8),
        new card('Nine','Diamonds',9),
        new card('Ten','Diamonds',10),
        new card('Jack','Diamonds',10),
        new card('Queen','Diamonds',10),
        new card('King','Diamonds',10),
    ];//创建一套扑克牌

    function getRandom(num){
        var my_num=Math.floor(Math.random()*num);//产生指定的随机数
        return my_num;
    }//产生随机数
    
    var used_cards=new Array();//创建数组用来保存出的牌
    
    function deal(){
        for (var i=0;i<2;i++) {
            hit();
        }
    }//最初两张牌
    
    
    function hit(){
        var good_card=false;//开关初始值为关
        do{
            var index=getRandom(52);//产生随机牌
            if(!$.inArray(index,used_cards)>-1){//判断产生的随机牌是不是在之前产生的牌中
                good_card=true;//开关为开
                var c=deck[index];//取一张牌储存在c中
                used_cards[used_cards.length]=index;//在数组后面加元素，把产生的牌保存在数组中
                hand.cards[hand.cards.length]=c;//将牌的信息给hand对象用来输出
                var $d=$("<div>");//创建一个div元素
                $d.addClass("current_hand").appendTo("#my_hand");//添加类并加到id为my_hand后面
                $("<img>").appendTo($d).attr('src','images/cards/'+c.suit+'/'+c.name+'.jpg').fadeOut('slow').fadeIn('slow');
                //为之前创建的div添加图片.再添加属性地址（路径为牌对象的属性）.添加闪烁的效果
            }
        }while(!good_card);//判断是否为开（牌是否被抽过）
        good_card=false;//开关定为关
        hand.sumCardTotal();//显示抽中点数
    }//抽牌函数结束

    var hand={
        cards: new Array(),//创建数组用来记牌
        current_total:0,//计点数

        sumCardTotal:function(){
            this.current_total=0;//初始化
            for(var i=0;i<this.cards.length;i++){//for循环
                var c=this.cards[i];//为c赋值抽取的牌（card对象）
                this.current_total+=c.value;//获取牌的数值
            }
            $("#hdrTotal").html("你的点数为："+this.current_total);//在Id为hdrTotal的元素上添加计算玩后的点数
            
            if(this.current_total>21){
                $("#btnStick").trigger("click");
                $("#hdrResult").html("爆了!");
            }else if(this.current_total==21){
                $("#btnStick").trigger("click");
                $("#hdrResult").html("21点!");
            }else if(this.current_total<=21&&this.cards.length==5){
                $("#btnStick").trigger("click");
                $("#hdrResult").html("你赢了（大于五张牌）!");
            }else{
                //继续选择
            }
        }//将点数输出
        
    }//计点的对象

    $("#btnDeal").click(function(){//获取id为btnDeal的元素并添加点击事件
        deal();//运行抽牌函数
        $(this).toggle();//隐藏发牌按钮
        $("#btnHit").toggle();//显示发牌按钮
        $("#btnStick").toggle();//显示停止按钮
        $("#btnRestart").toggle();
    })

    $("#btnHit").click(function(){
        hit();
    })

    $("#btnStick").click(function(){
        $("#hdrResult").html('Stick');
    })

    $("#btnRestart").click(function(){
        $("#result").toggle();
        $(this).toggle();
        $("#my_hand").empty();
        $("#hdrResult").html('');
        used_cards.length=0;
        hand.cards.length=0;
        hand.current_total=0;
        
        $("#btnDeal").toggle().trigger('click');
    })
    
    
    
})