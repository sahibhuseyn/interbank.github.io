var depoLeft = document.getElementsByClassName('depoLeft')[0];
var depoA=document.querySelectorAll(".depoList li a");
console.log(depoA[0])

window.onscroll = function() {bodyBg(), foo()};


function foo(){
	if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
	{
		 for (var i =0; i<depoA.length; i++)
		 {
    	depoA[i].classList.remove('depoListActiv');
    	depoA[0].className +=' depoListActiv';
    	}
    }
    if (document.body.scrollTop >700 || document.documentElement.scrollTop > 700)
    {
    	for (var i =0; i<depoA.length; i++)
    	{
    	depoA[i].classList.remove('depoListActiv');
    	depoA[1].className +=' depoListActiv';
    	}
    }
     if (document.body.scrollTop >900 || document.documentElement.scrollTop > 900)
     {
     	for (var i =0; i<depoA.length; i++)
     	{
    	depoA[i].classList.remove('depoListActiv');
    	depoA[2].className +=' depoListActiv';
    	}
    }
     if (document.body.scrollTop >1400 || document.documentElement.scrollTop > 1400){
     	for (var i =0; i<depoA.length; i++)
     	{
   		depoA[i].classList.remove('depoListActiv');
    	depoA[3].className +=' depoListActiv';
    	}
    }
}


function bodyBg()
{
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500)
    {
		document.body.style.background='#3d62ac';
		depoLeft.style.position='fixed';
    }
    else 
    {
		document.body.style.background='#3d62ac';
		depoLeft.style.position='relative';
    }
}





var amountInput=document.querySelector('.amountInput');
var spanAmount = document.querySelector('.amount');

var periodInput=document.querySelector('.periodInput');
var spanPeriod=document.querySelector('.period');


var spanPerTotal = document.querySelector('.percentTotal');
var spanPerMon = document.querySelector('.percentMonth');

var rateDeg=document.querySelector('.rateDeg');
var azn=document.querySelector('#azn');
var usd =document.querySelector('#usd');
var curVal=document.querySelector('.curVal');

azn.onclick=function()
{
	periodInput.disabled=false;

	for (var i =0; i<document.querySelectorAll('.curVal').length; i++)
	{
		document.querySelectorAll('.curVal')[i].innerHTML = 'azn';
	}	
}
usd.onclick=function()
{

var x = document.getElementById("calcPayment").value;

	periodInput.disabled=true;

	if (x=='month')
	{
		rateDeg.innerHTML='3%';
	}
	else
	{
		rateDeg.innerHTML='3.25%';
	}
	for (var i =0; i<document.querySelectorAll('.curVal').length; i++)
	{
		document.querySelectorAll('.curVal')[i].innerHTML = 'usd';
	}
}

function amountRange()
{
	spanAmount.innerHTML=amountInput.value;
}

function periodRange(){

	var x = document.getElementById("calcPayment").value;

	if (periodInput.value==0)
	{
		spanPeriod.innerHTML=12;
	} 
	else if (periodInput.value==1) 
	{
		spanPeriod.innerHTML=24;
	}
	else{
		spanPeriod.innerHTML=36;
	}
	if (spanPeriod.innerText==24 || spanPeriod.innerText==36)
	{
		rateDeg.innerHTML='12%';
	}
	else
	{
		rateDeg.innerHTML='11%';
	}
	if (x!='month' && spanPeriod.innerText==12)
	{
		rateDeg.innerHTML='12%';
	}
	else if (x!='month' && (spanPeriod.innerText==24 || spanPeriod.innerText==36))
	{
		rateDeg.innerHTML='13%';
	}
}

function calcCredit()
{
	var x = document.getElementById("calcPayment").value;
	if (x=='month' && spanPeriod.innerText==12) 
	{
		spanPerTotal.innerHTML=(amountInput.value*11)/100;
		spanPerMon.innerHTML=(amountInput.value*0.92)/100;
		
	}
	else if (x=='month' && (spanPeriod.innerText==24 || spanPeriod.innerText==36)) 
	{
		spanPerTotal.innerHTML=(amountInput.value*12)/100;
		spanPerMon.innerHTML=(amountInput.value*1)/100;

	}
	else if (x!='month' && spanPeriod.innerText==12)
	 {
		spanPerTotal.innerHTML=(amountInput.value*12)/100;
		spanPerMon.innerHTML=(amountInput.value*12)/100;
	}
	else if (x!='month' && (spanPeriod.innerText==24 || spanPeriod.innerText==36)) 
	{
		spanPerTotal.innerHTML=(amountInput.value*13)/100;
		spanPerMon.innerHTML=(amountInput.value*13)/100;
	}
}

function calcUsd(){
	var x = document.getElementById("calcPayment").value;
	if (periodInput.disabled=true) {
		if (x=='month'){
		spanPerTotal.innerHTML=(amountInput.value*3)/100;
		spanPerMon.innerHTML=(amountInput.value*0.25)/100;
		
	}else{
		spanPerTotal.innerHTML=(amountInput.value*3.25)/100;
		spanPerMon.innerHTML=(amountInput.value*3.25)/100;
	}
}
}