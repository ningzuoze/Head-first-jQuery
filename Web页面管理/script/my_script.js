$(document).ready(function(){
    var v=false;
    var $f,$m;

        $("button#vegOn").click(function(){

                $f=$(".fish").parent().parent().detach();

                $(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
                $(".meat").after("<li class='tofu'><em>Tofu</em></li>");
                $m=$(".meat").detach();
                $(".tofu").parent().parent().addClass("veg_leaf");
        })

        $("button#restore").click(function(){
                $(".portobello").replaceWith("<li class='hamburger'>Hamburger</li>");
                $(".menu_entress li").first().before($f);
                $(".tofu").each(function(i){
                    $(this).after($m[i]);
                })
                $(".tofu").remove();
                $(".meat").parent().parent().removeClass("veg_leaf");
        })
})