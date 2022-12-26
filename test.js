var obTimeOut; // clearTimeout() 함수를 이용하여 Timeout 을 취소하기위해 사용됨
var ObjectArray = new Array ();

ObjectArray[1] = "/Images/BackGround.png";
ObjectArray[2] = "/Images/BackGround2.png";

var nObjectCnt = 0;	

function ShowDefaultRotate() // 스스로 자신을 호출하는 재귀함수 (Recursive Function)
{
	console.log("TEST");
	document.getElementById("background").style.backgroundRepeat = "no-repeat";
	document.getElementById("background").style.backgroundSize = "cover";		 
	
	if ( nObjectCnt == 1 ) 
	{
		document.getElementById("background").style.backgroundImage = "url(" + ObjectArray[1] + ")";
		nObjectCnt = 0;
	}
	else 
	{
		document.getElementById("background").style.backgroundImage = "url(" + ObjectArray[2] + ")";
		nObjectCnt = 1;
	}

	obTimeOut = setTimeout("ShowDefaultRotate()",20000);  // 20초후에 자기자신을 호출 		
}

function startAnimation()
{
      obTimeOut = window.setTimeout(ShowDefaultRotate,100); // 윈도우 로드 후 0.1초 후에 반복함수를 호출합니다.
}

 window.onload = ShowDefaultRotate; // 윈도우 로드시 이미지 변환함수 실행