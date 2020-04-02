let textInput=document.createElement("textarea");
textInput.classList.add("text-input");
let wrapper=document.createElement("div");
wrapper.classList.add("key-wrapper");
document.body.append(textInput);
document.body.append(wrapper);
let firstLine=document.createElement("div");
firstLine.classList.add("line");
let secondLine=document.createElement("div");
secondLine.classList.add("line");
let thirdLine=document.createElement("div");
thirdLine.classList.add("line");
let forthLine=document.createElement("div");
forthLine.classList.add("line");
let fifthLine=document.createElement("div");
fifthLine.classList.add("line");
wrapper.append(firstLine);
let buttonSmall1=document.createElement("button");
buttonSmall1.classList.add("button-small");
let buttonSmall2=document.createElement("button");
buttonSmall2.classList.add("button-small");
let buttonSmall3=document.createElement("button");
buttonSmall3.classList.add("button-small");
let buttonSmall4=document.createElement("button");
buttonSmall4.classList.add("button-small");
let buttonSmall5=document.createElement("button");
buttonSmall5.classList.add("button-small");
let buttonSmall6=document.createElement("button");
buttonSmall6.classList.add("button-small");
let buttonSmall7=document.createElement("button");
buttonSmall7.classList.add("button-small");
let buttonSmall8=document.createElement("button");
buttonSmall8.classList.add("button-small");
let buttonSmall9=document.createElement("button");
buttonSmall9.classList.add("button-small");
let buttonSmall10=document.createElement("button");
buttonSmall10.classList.add("button-small");
let buttonSmall11=document.createElement("button");
buttonSmall11.classList.add("button-small");
let buttonSmall12=document.createElement("button");
buttonSmall12.classList.add("button-small");
let buttonSmall13=document.createElement("button");
buttonSmall13.classList.add("button-small");
let buttonSmall14=document.createElement("button");
buttonSmall14.classList.add("button-small");
let buttonSmall15=document.createElement("button");
buttonSmall15.classList.add("button-small");
firstLine.append(buttonSmall1);
firstLine.append(buttonSmall2);
firstLine.append(buttonSmall3);
firstLine.append(buttonSmall4);
firstLine.append(buttonSmall5);
firstLine.append(buttonSmall6);
firstLine.append(buttonSmall7);
firstLine.append(buttonSmall8);
firstLine.append(buttonSmall9);
firstLine.append(buttonSmall10);
firstLine.append(buttonSmall11);
firstLine.append(buttonSmall12);
firstLine.append(buttonSmall13);
firstLine.append(buttonSmall14);
secondLine=firstLine.cloneNode("true");
wrapper.append(secondLine);
thirdLine=firstLine.cloneNode("true");
wrapper.append(thirdLine);
forthLine=firstLine.cloneNode("true");
wrapper.append(forthLine);
fifthLine=firstLine.cloneNode("true");
wrapper.append(fifthLine);

firstLine.children[13].classList.add("bigBtnL");

secondLine.append(buttonSmall15);
secondLine.children[0].classList.add("tab");
secondLine.children[14].classList.add("littleBtn");

thirdLine.children[0].classList.add("bigBtnL");
thirdLine.children[12].classList.add("bigBtnR");
thirdLine.children[13].remove();

forthLine.children[0].classList.add("bigBtnL");
forthLine.children[11].classList.add("littleBtn");
forthLine.children[12].classList.add("bigBtnR");
forthLine.children[13].remove();

let check=1;
for(let i=0;i<10;i++){
	if(i!=3 && i<9){
		fifthLine.children[i].classList.add("littleBtn");
	}else if(i>8 && check<6){
		fifthLine.children[i].remove();
		i--;
		check++;
	}
}
fifthLine.children[3].classList.add("space");
let	language="";
const returnLang=JSON.parse(localStorage.getItem("myKey"));
language+=returnLang;

let caps="small";
function lang(){
if(!language)language="ru";
const save=JSON.stringify(language);
localStorage.setItem("myKey",save);
if(language=="en"){
	if(caps=="small"){
		firstLine.children[0].innerText="`";
		firstLine.children[1].innerText="1";
		firstLine.children[2].innerText="2";
		firstLine.children[3].innerText="3";
		firstLine.children[4].innerText="4";
		firstLine.children[5].innerText="5";
		firstLine.children[6].innerText="6";
		firstLine.children[7].innerText="7";
		firstLine.children[8].innerText="8";
		firstLine.children[9].innerText="9";
		firstLine.children[10].innerText="0";
		firstLine.children[11].innerText="-";
		firstLine.children[12].innerText="=";
		firstLine.children[13].innerText="Backspace";

		secondLine.children[0].innerText="Tab";
		secondLine.children[1].innerText="q";
		secondLine.children[2].innerText="w";
		secondLine.children[3].innerText="e";
		secondLine.children[4].innerText="r";
		secondLine.children[5].innerText="t";
		secondLine.children[6].innerText="y";
		secondLine.children[7].innerText="u";
		secondLine.children[8].innerText="i";
		secondLine.children[9].innerText="o";
		secondLine.children[10].innerText="p";
		secondLine.children[11].innerText="[";
		secondLine.children[12].innerText="]";
		secondLine.children[13].innerText="\\";
		secondLine.children[14].innerText="Del";

		thirdLine.children[0].innerText="CapsLock";
		thirdLine.children[1].innerText="a";
		thirdLine.children[2].innerText="s";
		thirdLine.children[3].innerText="d";
		thirdLine.children[4].innerText="f";
		thirdLine.children[5].innerText="g";
		thirdLine.children[6].innerText="h";
		thirdLine.children[7].innerText="j";
		thirdLine.children[8].innerText="k";
		thirdLine.children[9].innerText="l";
		thirdLine.children[10].innerText=";";
		thirdLine.children[11].innerText="\"";
		thirdLine.children[12].innerText="Enter";

		forthLine.children[0].innerText="Shift";
		forthLine.children[1].innerText="z";
		forthLine.children[2].innerText="x";
		forthLine.children[3].innerText="c";
		forthLine.children[4].innerText="v";
		forthLine.children[5].innerText="b";
		forthLine.children[6].innerText="n";
		forthLine.children[7].innerText="m";
		forthLine.children[8].innerText=",";
		forthLine.children[9].innerText=".";
		forthLine.children[10].innerText="/";
		forthLine.children[11].innerText="▲";
		forthLine.children[12].innerText="Shift";

		fifthLine.children[0].innerText="Ctrl";
		fifthLine.children[1].innerText="Win";
		fifthLine.children[2].innerText="Alt";
		fifthLine.children[3].innerText=" ";
		fifthLine.children[4].innerText="Alt";
		fifthLine.children[5].innerText="◄";
		fifthLine.children[6].innerText="▼";
		fifthLine.children[7].innerText="►";
		fifthLine.children[8].innerText="Ctrl";
	}else if(caps=="big"){
		firstLine.children[0].innerText="~";
		firstLine.children[1].innerText="!";
		firstLine.children[2].innerText="@";
		firstLine.children[3].innerText="#";
		firstLine.children[4].innerText="$";
		firstLine.children[5].innerText="%";
		firstLine.children[6].innerText="^";
		firstLine.children[7].innerText="&";
		firstLine.children[8].innerText="*";
		firstLine.children[9].innerText="(";
		firstLine.children[10].innerText=")";
		firstLine.children[11].innerText="_";
		firstLine.children[12].innerText="+";
		firstLine.children[13].innerText="Backspace";

		secondLine.children[0].innerText="Tab";
		secondLine.children[1].innerText="Q";
		secondLine.children[2].innerText="W";
		secondLine.children[3].innerText="E";
		secondLine.children[4].innerText="R";
		secondLine.children[5].innerText="T";
		secondLine.children[6].innerText="Y";
		secondLine.children[7].innerText="U";
		secondLine.children[8].innerText="I";
		secondLine.children[9].innerText="O";
		secondLine.children[10].innerText="P";
		secondLine.children[11].innerText="{";
		secondLine.children[12].innerText="}";
		secondLine.children[13].innerText="|";
		secondLine.children[14].innerText="Del";

		thirdLine.children[0].innerText="CapsLock";
		thirdLine.children[1].innerText="A";
		thirdLine.children[2].innerText="S";
		thirdLine.children[3].innerText="D";
		thirdLine.children[4].innerText="F";
		thirdLine.children[5].innerText="G";
		thirdLine.children[6].innerText="H";
		thirdLine.children[7].innerText="J";
		thirdLine.children[8].innerText="K";
		thirdLine.children[9].innerText="L";
		thirdLine.children[10].innerText=":";
		thirdLine.children[11].innerText="\"";
		thirdLine.children[12].innerText="Enter";

		forthLine.children[0].innerText="Shift";
		forthLine.children[1].innerText="Z";
		forthLine.children[2].innerText="X";
		forthLine.children[3].innerText="C";
		forthLine.children[4].innerText="V";
		forthLine.children[5].innerText="B";
		forthLine.children[6].innerText="N";
		forthLine.children[7].innerText="M";
		forthLine.children[8].innerText="<";
		forthLine.children[9].innerText=">";
		forthLine.children[10].innerText="?";
		forthLine.children[11].innerText="▲";
		forthLine.children[12].innerText="Shift";

		fifthLine.children[0].innerText="Ctrl";
		fifthLine.children[1].innerText="Win";
		fifthLine.children[2].innerText="Alt";
		fifthLine.children[3].innerText=" ";
		fifthLine.children[4].innerText="Alt";
		fifthLine.children[5].innerText="◄";
		fifthLine.children[6].innerText="▼";
		fifthLine.children[7].innerText="►";
		fifthLine.children[8].innerText="Ctrl";
	}
}else if(language=="ru"){
	if(caps=="small"){
		firstLine.children[0].innerText="ё";
		firstLine.children[1].innerText="1";
		firstLine.children[2].innerText="2";
		firstLine.children[3].innerText="3";
		firstLine.children[4].innerText="4";
		firstLine.children[5].innerText="5";
		firstLine.children[6].innerText="6";
		firstLine.children[7].innerText="7";
		firstLine.children[8].innerText="8";
		firstLine.children[9].innerText="9";
		firstLine.children[10].innerText="0";
		firstLine.children[11].innerText="-";
		firstLine.children[12].innerText="=";
		firstLine.children[13].innerText="Backspace";

		secondLine.children[0].innerText="Tab";
		secondLine.children[1].innerText="й";
		secondLine.children[2].innerText="ц";
		secondLine.children[3].innerText="у";
		secondLine.children[4].innerText="к";
		secondLine.children[5].innerText="е";
		secondLine.children[6].innerText="н";
		secondLine.children[7].innerText="г";
		secondLine.children[8].innerText="ш";
		secondLine.children[9].innerText="щ";
		secondLine.children[10].innerText="з";
		secondLine.children[11].innerText="х";
		secondLine.children[12].innerText="ъ";
		secondLine.children[13].innerText="\\";
		secondLine.children[14].innerText="Del";

		thirdLine.children[0].innerText="CapsLock";
		thirdLine.children[1].innerText="ф";
		thirdLine.children[2].innerText="ы";
		thirdLine.children[3].innerText="в";
		thirdLine.children[4].innerText="а";
		thirdLine.children[5].innerText="п";
		thirdLine.children[6].innerText="р";
		thirdLine.children[7].innerText="о";
		thirdLine.children[8].innerText="л";
		thirdLine.children[9].innerText="д";
		thirdLine.children[10].innerText="ж";
		thirdLine.children[11].innerText="э";
		thirdLine.children[12].innerText="Enter";

		forthLine.children[0].innerText="Shift";
		forthLine.children[1].innerText="я";
		forthLine.children[2].innerText="ч";
		forthLine.children[3].innerText="c";
		forthLine.children[4].innerText="м";
		forthLine.children[5].innerText="и";
		forthLine.children[6].innerText="т";
		forthLine.children[7].innerText="ь";
		forthLine.children[8].innerText="б";
		forthLine.children[9].innerText="ю";
		forthLine.children[10].innerText=".";
		forthLine.children[11].innerText="▲";
		forthLine.children[12].innerText="Shift";

		fifthLine.children[0].innerText="Ctrl";
		fifthLine.children[1].innerText="Win";
		fifthLine.children[2].innerText="Alt";
		fifthLine.children[3].innerText=" ";
		fifthLine.children[4].innerText="Alt";
		fifthLine.children[5].innerText="◄";
		fifthLine.children[6].innerText="▼";
		fifthLine.children[7].innerText="►";
		fifthLine.children[8].innerText="Ctrl";
	}else if(caps=="big"){
		firstLine.children[0].innerText="~";
		firstLine.children[1].innerText="!";
		firstLine.children[2].innerText="@";
		firstLine.children[3].innerText="#";
		firstLine.children[4].innerText="$";
		firstLine.children[5].innerText="%";
		firstLine.children[6].innerText="^";
		firstLine.children[7].innerText="&";
		firstLine.children[8].innerText="*";
		firstLine.children[9].innerText="(";
		firstLine.children[10].innerText=")";
		firstLine.children[11].innerText="_";
		firstLine.children[12].innerText="+";
		firstLine.children[13].innerText="Backspace";

		secondLine.children[0].innerText="Tab";
		secondLine.children[1].innerText="Й";
		secondLine.children[2].innerText="Ц";
		secondLine.children[3].innerText="У";
		secondLine.children[4].innerText="К";
		secondLine.children[5].innerText="Е";
		secondLine.children[6].innerText="Н";
		secondLine.children[7].innerText="Г";
		secondLine.children[8].innerText="Ш";
		secondLine.children[9].innerText="Щ";
		secondLine.children[10].innerText="З";
		secondLine.children[11].innerText="Х";
		secondLine.children[12].innerText="Ъ";
		secondLine.children[13].innerText="/";
		secondLine.children[14].innerText="Del";

		thirdLine.children[0].innerText="CapsLock";
		thirdLine.children[1].innerText="Ф";
		thirdLine.children[2].innerText="Ы";
		thirdLine.children[3].innerText="В";
		thirdLine.children[4].innerText="А";
		thirdLine.children[5].innerText="П";
		thirdLine.children[6].innerText="Р";
		thirdLine.children[7].innerText="О";
		thirdLine.children[8].innerText="Л";
		thirdLine.children[9].innerText="Д";
		thirdLine.children[10].innerText="Ж";
		thirdLine.children[11].innerText="Э";
		thirdLine.children[12].innerText="Enter";

		forthLine.children[0].innerText="Shift";
		forthLine.children[1].innerText="Я";
		forthLine.children[2].innerText="Ч";
		forthLine.children[3].innerText="С";
		forthLine.children[4].innerText="М";
		forthLine.children[5].innerText="И";
		forthLine.children[6].innerText="Т";
		forthLine.children[7].innerText="Ь";
		forthLine.children[8].innerText="Б";
		forthLine.children[9].innerText="Ю";
		forthLine.children[10].innerText=",";
		forthLine.children[11].innerText="▲";
		forthLine.children[12].innerText="Shift";

		fifthLine.children[0].innerText="Ctrl";
		fifthLine.children[1].innerText="Win";
		fifthLine.children[2].innerText="Alt";
		fifthLine.children[3].innerText=" ";
		fifthLine.children[4].innerText="Alt";
		fifthLine.children[5].innerText="◄";
		fifthLine.children[6].innerText="▼";
		fifthLine.children[7].innerText="►";
		fifthLine.children[8].innerText="Ctrl";
	}
}
}

wrapper.addEventListener("click",(e)=>{
	let a=e.target.className;
	let b=e.target.innerText;
	if(a!="key-wrapper" && a!="line" && b!="Enter"  && b!="Tab" && b!="CapsLock" && b!="Backspace" && b!="Del" && b!="Alt" && b!="Ctrl" && b!="Win" && b!="Shift"){
	textInput.value+=e.target.innerText;
	textInput.click();
	}
	else if(b==" "){
		textInput.value+=" ";
		textInput.click();
	}else if(b=="Tab"){
		textInput.click();
		textInput.setRangeText("	", textInput.selectionStart, textInput.selectionEnd, "end");
		textInput.focus();
	}else if(b=="Backspace"){
		textInput.click();
		textInput.setRangeText("", textInput.selectionStart-1, textInput.selectionEnd, "end");
		textInput.focus();
	}else if(b=="Del"){
		textInput.click();
		textInput.setRangeText("", textInput.selectionStart, textInput.selectionEnd+1, "end");
		textInput.focus();
	}else if(b=="Enter"){
		textInput.click();
		textInput.value+="\n";
		textInput.click();
	}else if(b=="CapsLock"){
		textInput.click();
		if(caps=="big"){caps="small";thirdLine.children[0].classList.remove("active");}else if(caps=="small"){caps="big";thirdLine.children[0].classList.add("active");}
		lang();
	}
});

wrapper.addEventListener("mousedown",(e)=>{
	let a=e.target.className;
	if(a!="key-wrapper" && a!="line"){
		let radius=0;
		e.target.classList.add("active");
		if(e.target.innerText!="CapsLock"){
			setInterval(()=>{radius=+radius;if(radius<20){radius+=1;e.target.style.borderRadius=`${radius}px`;}else return;},5);
		}else if(e.target.innerText=="Shift"){
			if(caps=="small"){caps="big";}
			else if(caps=="big"){caps="small";}
			lang();
		}else if(e.target.innerText=="CapsLock"){
			if(caps=="small"){animationDown(thirdLine.children[0]);}
			else if(caps=="big"){animationUp(thirdLine.children[0]);}
		}
	}
});

wrapper.addEventListener("mouseup",(e)=>{
	let a=e.target.className;
	if(a!="key-wrapper" && a!="line" && e.target.innerText!="CapsLock"){
	e.target.classList.remove("active");
	let radius=20;
	setInterval(()=>{radius=+radius;if(radius>0){radius-=1;e.target.style.borderRadius=`${radius}px`;}else return;},5);
	if(e.target.innerText=="Shift"){
		if(caps=="small"){caps="big";}
		else if(caps=="big"){caps="small";}
		lang();
		}
	}
});

wrapper.addEventListener("mouseout",(e)=>{
	let a=e.target.className;
	if(a.indexOf("active")!=-1){
	if(a!="key-wrapper" && a!="line" && e.target.innerText!="CapsLock"){
	e.target.classList.remove("active");
	let radius=20;
	setInterval(()=>{radius=+radius;if(radius>0){radius-=1;e.target.style.borderRadius=`${radius}px`;}else return;},5);
	if(e.target.innerText=="Shift"){
		if(caps=="small"){caps="big";}
		else if(caps=="big"){caps="small";}
		lang();
		}
	}
}
});

let checkAnimation=0;
let checkElem={};

function animationDown(e){
	if(!checkAnimation || checkElem[e.innerText]===undefined){
	checkElem[e.innerText]=1;
	let radius=0;
	setInterval(()=>{
		radius=+radius;
		if(radius<20){
			radius+=1;e.style.borderRadius=`${radius}px`;
		}
		else return;
	},5);
	}
	checkAnimation=1;
}

function animationUp(e){
	checkAnimation=0;
	delete checkElem[e.innerText];
	let radius=20;
	setInterval(()=>{
		radius=+radius;
		if(radius>0){
			radius-=1;e.style.borderRadius=`${radius}px`;
		}
		else return;
	},5);
}

function buttonUp(e){
	e.click();
	animationDown(e);
	e.classList.add("active");
}

function buttonDown(e){
	animationUp(e);
	e.classList.remove("active");
}

let checkCaps=0;
let checkShiftL=0;
let checkShiftR=0;
let checkChange=0;
const keydown=(e)=>{
	e.preventDefault();
	if(e.keyCode===192){
		buttonUp(firstLine.children[0]);
	}
	if(e.keyCode>48 && e.keyCode<58){
		buttonUp(firstLine.children[e.keyCode-48]);
	}
	if(e.keyCode==48){
		buttonUp(firstLine.children[10]);
	}
	if(e.keyCode==189){
		buttonUp(firstLine.children[11]);
	}
	if(e.keyCode==187){
		buttonUp(firstLine.children[12]);
	}
	if(e.keyCode==8){
		buttonUp(firstLine.children[13]);
	}
	if(e.keyCode==9){
		buttonUp(secondLine.children[0]);
	}
	if(e.keyCode==81){
		buttonUp(secondLine.children[1]);
	}
	if(e.keyCode==87){
		buttonUp(secondLine.children[2]);
	}
	if(e.keyCode==69){
		buttonUp(secondLine.children[3]);
	}
	if(e.keyCode==82){
		buttonUp(secondLine.children[4]);
	}
	if(e.keyCode==84){
		buttonUp(secondLine.children[5]);
	}
	if(e.keyCode==89){
		buttonUp(secondLine.children[6]);
	}
	if(e.keyCode==85){
		buttonUp(secondLine.children[7]);
	}
	if(e.keyCode==73){
		buttonUp(secondLine.children[8]);
	}
	if(e.keyCode==79){
		buttonUp(secondLine.children[9]);
	}
	if(e.keyCode==80){
		buttonUp(secondLine.children[10]);
	}
	if(e.keyCode==219){
		buttonUp(secondLine.children[11]);
	}
	if(e.keyCode==221){
		buttonUp(secondLine.children[12]);
	}
	if(e.keyCode==220){
		buttonUp(secondLine.children[13]);
	}
	if(e.keyCode==46){
		buttonUp(secondLine.children[14]);
	}
	if(!checkCaps){
		if(e.keyCode==20){
			checkCaps=1;
			thirdLine.children[0].click();
			if(caps=="big"){
				animationDown(thirdLine.children[0]);
				thirdLine.children[0].classList.add("active");
			}else if(caps=="small"){
				animationUp(thirdLine.children[0]);
				thirdLine.children[0].classList.remove("active");
			}
		}
	}
	if(e.keyCode==65){
		buttonUp(thirdLine.children[1]);
	}
	if(e.keyCode==83){
		buttonUp(thirdLine.children[2]);
	}
	if(e.keyCode==68){
		buttonUp(thirdLine.children[3]);
	}
	if(e.keyCode==70){
		buttonUp(thirdLine.children[4]);
	}
	if(e.keyCode==71){
		buttonUp(thirdLine.children[5]);
	}
	if(e.keyCode==72){
		buttonUp(thirdLine.children[6]);
	}
	if(e.keyCode==74){
		buttonUp(thirdLine.children[7]);
	}
	if(e.keyCode==75){
		buttonUp(thirdLine.children[8]);
	}
	if(e.keyCode==76){
		buttonUp(thirdLine.children[9]);
	}
	if(e.keyCode==186){
		buttonUp(thirdLine.children[10]);
	}
	if(e.keyCode==222){
		buttonUp(thirdLine.children[11]);
	}
	if(e.keyCode==13){
		buttonUp(thirdLine.children[12]);
	}
	if(!checkShiftL){
		if(e.keyCode==16 && e.code=="ShiftLeft"){
			checkShiftL=1;
			if(caps=="small"){caps="big";}
			else if(caps=="big"){caps="small";}
			lang();
			animationDown(forthLine.children[0]);
			forthLine.children[0].classList.add("active");
		}
	}
	if(e.keyCode==90){
		buttonUp(forthLine.children[1]);
	}
	if(e.keyCode==88){
		buttonUp(forthLine.children[2]);
	}
	if(e.keyCode==67){
		buttonUp(forthLine.children[3]);
	}
	if(e.keyCode==86){
		buttonUp(forthLine.children[4]);
	}
	if(e.keyCode==66){
		buttonUp(forthLine.children[5]);
	}
	if(e.keyCode==78){
		buttonUp(forthLine.children[6]);
	}
	if(e.keyCode==77){
		buttonUp(forthLine.children[7]);
	}
	if(e.keyCode==188){
		buttonUp(forthLine.children[8]);
	}
	if(e.keyCode==190){
		buttonUp(forthLine.children[9]);
	}
	if(e.keyCode==191){
		buttonUp(forthLine.children[10]);
	}
	if(e.keyCode==38){
		buttonUp(forthLine.children[11]);
	}
	if(!checkShiftR){
		if(e.keyCode==16 && e.code=="ShiftRight"){
			checkShiftR=1;
			if(caps=="small"){caps="big";}
			else if(caps=="big"){caps="small";}
			lang();
			animationDown(forthLine.children[12]);
			forthLine.children[12].classList.add("active");
		}
	}
	if(e.keyCode==17 && e.code=="ControlLeft"){
		buttonUp(fifthLine.children[0]);
	}
	if(e.keyCode==91){
		buttonUp(fifthLine.children[1]);
	}
	if(e.keyCode==18 && e.code=="AltLeft"){
		buttonUp(fifthLine.children[2]);
	}
	if(e.keyCode==32){
		buttonUp(fifthLine.children[3]);
	}
	if(e.keyCode==18 && e.code=="AltRight"){
		buttonUp(fifthLine.children[4]);
	}
	if(e.keyCode==37){
		buttonUp(fifthLine.children[5]);
	}
	if(e.keyCode==40){
		buttonUp(fifthLine.children[6]);
	}
	if(e.keyCode==39){
		buttonUp(fifthLine.children[7]);
	}
	if(e.keyCode==17 && e.code=="ControlRight"){
		buttonUp(fifthLine.children[8]);
	}
	let ctrlL=fifthLine.children[0].className;
	let ctrlR=fifthLine.children[8].className;
	let altL=fifthLine.children[2].className;
	let altR=fifthLine.children[4].className;
	console.log(altR);
	if(!checkChange){
		if((ctrlL=="button-small littleBtn active" ||ctrlR=="button-small littleBtn active") && (altL=="button-small littleBtn active" || altR=="button-small littleBtn active")){
			checkChange=1;
			if(language=="en"){
				language="ru";
			}else if(language=="ru"){
				language="en";
			}
		}
	}
	lang();
};


const keyup=(e)=>{
	if(e.keyCode==20){
		checkCaps=0;
	}
	if(e.keyCode===192){
		buttonDown(firstLine.children[0]);
	}
	if(e.keyCode>48 && e.keyCode<58){
		buttonDown(firstLine.children[e.keyCode-48]);
	}
	if(e.keyCode==48){
		buttonDown(firstLine.children[10]);
	}
	if(e.keyCode==189){
		buttonDown(firstLine.children[11]);
	}
	if(e.keyCode==187){
		buttonDown(firstLine.children[12]);
	}
	if(e.keyCode==8){
		buttonDown(firstLine.children[13]);
	}
	if(e.keyCode==9){
		buttonDown(secondLine.children[0]);
	}
	if(e.keyCode==81){
		buttonDown(secondLine.children[1]);
	}
	if(e.keyCode==87){
		buttonDown(secondLine.children[2]);
	}
	if(e.keyCode==69){
		buttonDown(secondLine.children[3]);
	}
	if(e.keyCode==82){
		buttonDown(secondLine.children[4]);
	}
	if(e.keyCode==84){
		buttonDown(secondLine.children[5]);
	}
	if(e.keyCode==89){
		buttonDown(secondLine.children[6]);
	}
	if(e.keyCode==85){
		buttonDown(secondLine.children[7]);
	}
	if(e.keyCode==73){
		buttonDown(secondLine.children[8]);
	}
	if(e.keyCode==79){
		buttonDown(secondLine.children[9]);
	}
	if(e.keyCode==80){
		buttonDown(secondLine.children[10]);
	}
	if(e.keyCode==219){
		buttonDown(secondLine.children[11]);
	}
	if(e.keyCode==221){
		buttonDown(secondLine.children[12]);
	}
	if(e.keyCode==220){
		buttonDown(secondLine.children[13]);
	}
	if(e.keyCode==46){
		buttonDown(secondLine.children[14]);
	}
	if(e.keyCode==65){
		buttonDown(thirdLine.children[1]);
	}
	if(e.keyCode==83){
		buttonDown(thirdLine.children[2]);
	}
	if(e.keyCode==68){
		buttonDown(thirdLine.children[3]);
	}
	if(e.keyCode==70){
		buttonDown(thirdLine.children[4]);
	}
	if(e.keyCode==71){
		buttonDown(thirdLine.children[5]);
	}
	if(e.keyCode==72){
		buttonDown(thirdLine.children[6]);
	}
	if(e.keyCode==74){
		buttonDown(thirdLine.children[7]);
	}
	if(e.keyCode==75){
		buttonDown(thirdLine.children[8]);
	}
	if(e.keyCode==76){
		buttonDown(thirdLine.children[9]);
	}
	if(e.keyCode==186){
		buttonDown(thirdLine.children[10]);
	}
	if(e.keyCode==222){
		buttonDown(thirdLine.children[11]);
	}
	if(e.keyCode==13){
		buttonDown(thirdLine.children[12]);
	}
	if(e.keyCode==16 && e.code=="ShiftLeft"){
		checkShiftL=0;
		if(caps=="small"){caps="big";}
		else if(caps=="big"){caps="small";}
		lang();
		animationUp(forthLine.children[0]);
		forthLine.children[0].classList.remove("active");
	}
	if(e.keyCode==90){
		buttonDown(forthLine.children[1]);
	}
	if(e.keyCode==88){
		buttonDown(forthLine.children[2]);
	}
	if(e.keyCode==67){
		buttonDown(forthLine.children[3]);
	}
	if(e.keyCode==86){
		buttonDown(forthLine.children[4]);
	}
	if(e.keyCode==66){
		buttonDown(forthLine.children[5]);
	}
	if(e.keyCode==78){
		buttonDown(forthLine.children[6]);
	}
	if(e.keyCode==77){
		buttonDown(forthLine.children[7]);
	}
	if(e.keyCode==188){
		buttonDown(forthLine.children[8]);
	}
	if(e.keyCode==190){
		buttonDown(forthLine.children[9]);
	}
	if(e.keyCode==191){
		buttonDown(forthLine.children[10]);
	}
	if(e.keyCode==38){
		buttonDown(forthLine.children[11]);
	}
	if(e.keyCode==16 && e.code=="ShiftRight"){
		checkShiftR=0;
		if(caps=="small"){caps="big";}
		else if(caps=="big"){caps="small";}
		lang();
		animationUp(forthLine.children[12]);
		forthLine.children[12].classList.remove("active");
	}
	if(e.keyCode==17 && e.code=="ControlLeft"){
		checkChange=0;
		buttonDown(fifthLine.children[0]);
	}
	if(e.keyCode==91){
		buttonDown(fifthLine.children[1]);
	}
	if(e.keyCode==18 && e.code=="AltLeft"){
		checkChange=0;
		buttonDown(fifthLine.children[2]);
	}
	if(e.keyCode==32){
		buttonDown(fifthLine.children[3]);
	}
	if(e.keyCode==18 && e.code=="AltRight"){
		checkChange=0;
		buttonDown(fifthLine.children[4]);
	}
	if(e.keyCode==37){
		buttonDown(fifthLine.children[5]);
	}
	if(e.keyCode==40){
		buttonDown(fifthLine.children[6]);
	}
	if(e.keyCode==39){
		buttonDown(fifthLine.children[7]);
	}
	if(e.keyCode==17 && e.code=="ControlRight"){
		checkChange=0;
		buttonDown(fifthLine.children[8]);
	}
};


document.addEventListener("keyup",keyup);
document.addEventListener("keydown",keydown);
lang();

