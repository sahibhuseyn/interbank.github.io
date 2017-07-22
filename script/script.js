var main = document.getElementById('main');
var placeholder = document.querySelector('#searchPlaceholder');
var trick = document.querySelector('.searchTrick');
var searchInput = document.getElementsByClassName('searchInput')[0];
var span = document.getElementsByClassName('exVal');
function newVal(val){
	searchInput.value = val.innerText;
}


window.onclick=function(event){
	if (event.target!=searchInput) {
		placeholder.style.top=20 + '%';
		placeholder.style.left=1 + '%';
		placeholder.style.fontSize="27px";
		trick.style.display = 'none';
		placeholder.setAttribute('class','')
	}else {
		searchInput.addEventListener('click',function(){
		trick.style.display = 'block';
		placeholder.setAttribute('class','focus')
		placeholder.style.top=0;
		placeholder.style.left=0;
		placeholder.style.fontSize="20px";
})
	}
}

/*slider*/



var sliderArr = ['images/500x230_2-1.jpg','images/500x230-1.jpg','images/emek-kredit-1.jpg'];
var i=0;
var bullets = document.getElementsByClassName('bullets');
var sliderBg = document.querySelector('.slider');
sliderBg.src = sliderArr[0];

var slideNum = 1;
slider(slideNum);
function prevNext(n) {
  slider(slideNum = n);
}

function slider(n){
	i++;
	if (i==sliderArr.length) {
		i=0
	}
	sliderBg.src = sliderArr[i];
	// for (var x = 0; x <sliderArr.length; x++) {
	// 	bullets[x].className=bullets[x].className.replace(' bulletSelected','');
	// }
	// bullets[slideNum-1].className+='bulletSelected';
	
}setInterval(slider,3000);

/*right side functions*/
var zoomMain = document.querySelector('#main');

var contactBtn=document.querySelector('.contactBtn');
var onlineBank=document.querySelector('.onlineBank');
var internetBank=document.querySelector('.internetBank');
var writeUs=document.querySelector('.writeUs');

var closeDivfirst=document.querySelector(".closeDivfirst");
var closeDivsecond=document.querySelector(".closeDivsecond");
var closeDivthird=document.querySelector(".closeDivthird");

writeUs.onclick=function(){	
	document.querySelector('.writeUsForm').style.visibility='visible';
	document.querySelector('.writeUsForm').style.right='-4%';
	document.querySelector('.contactTypes').style.left='-100%';
	document.querySelector('.leftArrow').style.left='0';
	document.querySelector('.conCapP').style.left='7px';
}
document.querySelector('.leftArrow').onclick=function(){
	document.querySelector('.writeUsForm').style.visibility='hidden';
	document.querySelector('.writeUsForm').style.right='-100vh';
	document.querySelector('.contactTypes').style.left='0';
	document.querySelector('.leftArrow').style.left='-20%';
	document.querySelector('.conCapP').style.left='0';
}


var zoomMain = document.querySelector('#main');
function showDivs(divs){
		setTimeout(function(){
			divs.style.right = 0;
		},50)
	
	zoomMain.setAttribute('class','zoom_out');}

function closeDivs(opens)
{
	opens.style.right = "-50%";
	zoomMain.setAttribute('class','zoom_in');
}



/*polygon*/
var changeCapArr = ['Fərdi','Korporativ'];
var individualListArr =['Bank 24/7', 'Əmanətlər','Elektron xidmətlər','Cari hesab','Kreditlər','Ödəniş kartları','Köçürmələr','Kampaniyalar'];
var corporativeListArr=['Elektron bankçılıq', 'Sənədli əməliyyatlar','Ödəniş kartları','Hesablar','Biznes kreditləri','Əmanətlər','Köçürmələr','Bizimlə əlaqə'];

var hCaption = document.querySelector('.hCaption');
var hList = document.querySelector('.hList');

var middleSection = document.querySelector('.middleSection');
var individualBtn = document.querySelector('#individual');
var corporateBtn = document.querySelector('#corporative');
var changeBg = document.querySelector('#changeBg');
var overlay = document.createElement('div');
	overlay.setAttribute('class','sideOverlay');

var h2 = document.querySelector('.hTitle');
var hLink = document.querySelectorAll('.hLink');

function middleMove(){
	setTimeout(function(){
		middleSection.style.top = '-50vh';
	setTimeout(function(){
		middleSection.style.top = '-100vh';
	setTimeout(function(){
		middleSection.style.display = 'none';
	},40)
	},30)},30);
}

individualBtn.addEventListener('click', function(){
	 
		setTimeout(function(){myFun()
			setTimeout(function(){
				h2.innerHTML=changeCapArr[0];
				for (var x = 0; x<individualListArr.length;x++) {
				hLink[x].innerHTML = individualListArr[x];
				}
				changeBg.appendChild(overlay);
				changeBg.setAttribute('class','individualBg');
				individualBtn.setAttribute('class','active');
				corporateBtn.setAttribute('class','');

				setTimeout(middleMove,20)

			},30)
			},30)

		if (changeBg.style.visibility!='visible') {
		myFun()
		}else {
			window.myFun = null;
		}
		
})
function myFun(){
	
	var n = 'polygon(93% 0, 100% 0, 100% 100%, 95% 100%)';
	var m = 'polygon(89% 0, 100% 0, 100% 100%, 75% 100%)';
	var k = "polygon(75% 0, 100% 0, 100% 100%, 55% 100%)";
	var l = 'polygon(69% 0, 100% 0, 100% 100%, 25% 100%)';
	var d = 'polygon(65% 0, 100% 0, 100% 100%, 15% 100%)';
	
	changeBg.style.visibility='visible';
	setTimeout(function(){
		changeBg.style.clipPath = n;
		setTimeout(function(){
			changeBg.style.clipPath = m;
			setTimeout(function(){
				changeBg.style.clipPath = k;
				setTimeout(function(){
					changeBg.style.clipPath = l;
					setTimeout(function(){
						changeBg.style.clipPath = d;
					},100)
				},80)
			},60)
		},40)
	},20)
	
}
corporateBtn.addEventListener('click', function(){

	middleMove()

	if (changeBg.style.visibility!='visible') {
		setTimeout(myFun(),30)
	}
	else 
	{
		window.myFun = null;
	}
	
	h2.innerHTML=changeCapArr[1];
	for (var x = 0; x<corporativeListArr.length;x++)
	{
	hLink[x].innerHTML = corporativeListArr[x];
	}

	changeBg.appendChild(overlay);
	changeBg.setAttribute('class','corporateBg');
	corporateBtn.setAttribute('class','active');
	individualBtn.setAttribute('class','');
})


/*phone mask*/
var diliminate='- '
var phone_mask=document.getElementsByClassName('phoneMask')[0];
phone_mask.defaultValue='+994'+' '+ '00'+' '+ '000'+ diliminate+'00'+ diliminate +'00';
if (phone_mask.value.length == 2)
{
	phone_mask.value = "";
}
else if (phone_mask.length==3)
{
	phone_mask.innerHTML ="-";
}