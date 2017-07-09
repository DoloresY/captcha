var text = "我很牛逼";
var position = 1;
var newArr = new Array();

window.onload = function() {  
    draw();  
};
var ss = new Array();
var arr = [0,20,40,60,80,100,120,140,160,180];
var arr2 = [20,40,60,80,100,120,140,160,180,200];

function draw(){  
    var canvas = document.getElementById("canvas"); 
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(125, 46, 138, 0.5)";  
    ctx.fillRect(0,0,200,200);   
    ctx.fillStyle = "rgba( 0, 0, 0, 1)"; // black color
    ctx.font = "20px 微软雅黑";

    for(var i = 0; i < text.length; i++){
    	var random1 = getRandom();
    	var random2 = getRandom();
    	console.log(random1+"===="+getRandom());
    	ctx.fillText(text[i], arr[random1], arr2[random2]);

    	newArr[i] = new Object();
    	newArr[i].x = arr[random1];
    	newArr[i].y = arr2[random2];
    }
    console.log(newArr);
}

$(function(){
	$("#canvas").on("click",function(e){
		getPosition(e,position-1);
	})
})
function getPosition(e,num){
	var positionX = e.originalEvent.x || e.originalEvent.layerX || 0; //获取当前鼠标相对img的X坐标  
    var positionY = e.originalEvent.y || e.originalEvent.layerY || 0; //获取当前鼠标相对img的Y坐标 
    if(positionX >= newArr[num].x && positionX <= newArr[num].x+20 & positionY >= newArr[num].y & positionY <= newArr[num].y+20){
    	alert(positionX+'   '+positionY);
    }
    console.log(positionX+'   '+positionY);
}

function getRandom(){
	var random = parseInt(Math.random()*10);
	return random;
}
