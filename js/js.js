$(document).ready(function(){
    $(".tiao1").hide();
    $(".tiao2").hide();
	 $(".daohang1").mouseenter(function(){
		   $(".tiao1").show();
	 });
	 $(".daohang1").mouseleave(function(){
		   $(".tiao1").hide();
	 });
	 $(".daohang1").click(function(){
		   $(".subject2").hide();
	 });
	 $(".daohang2").mouseenter(function(){
		   $(".tiao2").show();
	 });
	 $(".daohang2").mouseleave(function(){
		   $(".tiao2").hide();
	 });
	 $(".daohang2").click(function(){
		   $(".subject1").hide();
		   $(".subject2").show();
	 });
})

$(document).ready(function(){
function hxgd(){
		var $topleft=$('.left');
		var $topright=$('.right');
		var $silderpic;
		var $first;
		var $last,index=1;
		$topright.click(function(e) {
            $silderpic=$('.out li');
			$first=$silderpic.first();
			if($first.is(":animated")){$first.stop(true,false);}
			else
			{
				index++;
				if(index==4)
				{
					index=0;
				}
			}
			$first.animate({marginLeft:-500},100,function(){$first.css('margin-left','0px');
				$first.appendTo('.out');});
        });
		$topleft.click(function(e) {
            $silderpic=$('.out li');
			$first=$silderpic.first();
			$last=$silderpic.last();
			if($first.is(":animated")){$first.stop(true,false);}
			else
			{
				index--;
				if(index==-1)
				{
					index=3;
				}
			}
			$last.prependTo('.out ');
			$first.css('margin-left','-500px');			
			$first.animate({marginLeft:0},100);
        });
		function moniclick(){
			$topright.trigger('click');
		}
		var autorun=setInterval(moniclick,1000);
		$topleft.mouseenter(function(e){
			clearInterval(autorun);
		});
		$topleft.mouseleave(function(e){
			autorun=setInterval(moniclick,1000);
		});
		$topright.mouseenter(function(e){
			clearInterval(autorun);
		});
		$topright.mouseleave(function(e){
			autorun=setInterval(moniclick,1000);
		});
		$('.out li').mouseenter(function(e){
			clearInterval(autorun);
		}).mouseleave(function(e){
			autorun=setInterval(moniclick,1000);
		});
	}	
	hxgd();
});