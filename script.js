/* eslint-disable no-plusplus */
function addElement(element, place) {
  place.append(element);
}
const textLanguage = document.createElement("p");
textLanguage.innerText = "Кнопки для смены языка: ctrl+alt";
addElement(textLanguage, document.body);
const textInput = document.createElement("textarea");
textInput.classList.add("text-input");
const wrapper = document.createElement("div");
wrapper.classList.add("key-wrapper");
addElement(textInput, document.body);
addElement(wrapper, document.body);
const firstLine = document.createElement("div");
const secondLine = document.createElement("div");
const thirdLine = document.createElement("div");
const forthLine = document.createElement("div");
const fifthLine = document.createElement("div");
const arrayLines = [firstLine, secondLine, thirdLine, forthLine, fifthLine];
for (let i = 0; i < arrayLines.length; i++) {
  arrayLines[i].classList.add("line");
  addElement(arrayLines[i], wrapper);
}

let type = "ruSmall";

const firstLineKeys = {
  ruSmall: ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  ruShift: ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
  ruShiftCaps: ["ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace"],
  ruCaps: ["Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  enCaps: ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  enSmall: ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace"],
  enShift: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
  enShiftCaps: ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace"],
  name: "firstLine",
};

const secondLineKeys = {
  ruSmall: ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del"],
  ruShift: ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del"],
  ruShiftCaps: ["Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "/", "Del"],
  ruCaps: ["Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", "Del"],
  enSmall: ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del"],
  enShift: ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del"],
  enShiftCaps: ["Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "{", "}", "|", "Del"],
  enCaps: ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del"],
  name: "secondLine",
};

const thirdLineKeys = {
  ruSmall: ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
  ruShift: ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
  ruShiftCaps: ["CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter"],
  ruCaps: ["CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter"],
  enSmall: ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter"],
  enShift: ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter"],
  enShiftCaps: ["CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ":", "\"", "Enter"],
  enCaps: ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
  name: "thirdLine",
};

const forthLineKeys = {
  ruSmall: ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "▲", "Shift"],
  ruShift: ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "▲", "Shift"],
  ruShiftCaps: ["Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "▲", "Shift"],
  ruCaps: ["Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "▲", "Shift"],
  enSmall: ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "▲", "Shift"],
  enShift: ["Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "▲", "Shift"],
  enShiftCaps: ["Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "▲", "Shift"],
  enCaps: ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "▲", "Shift"],
  name: "forthLine",
};

const fifthLineKeys = {
  ruSmall: ["Ctrl", "Win", "Alt", "", "Alt", "◄", "▼", "►", "Ctrl"],
  name: "fifthLine",
};

const arrayLinesKeys = [firstLineKeys, secondLineKeys, thirdLineKeys, forthLineKeys, fifthLineKeys];

function createRow() {
  for (let j = 0; j < arrayLinesKeys.length; j++) {
    const keys = arrayLinesKeys[j][type];
    for (let i = 0; i < keys.length; i++) {
      const button = document.createElement("button");
      button.classList.add("button-small");
      button.innerText = keys[i];
      addElement(button, arrayLines[j]);
    }
  }
}
createRow();

const typePast = JSON.parse(localStorage.getItem("myKey"));
if (type === "null" || type === "") type = "ruSmall";
else if (typePast[0] === "e") type = "enSmall";
else if (typePast[0] === "r") type = "ruSmall";

function change() {
  const save = JSON.stringify(type);
  localStorage.setItem("myKey", save);
  for (let j = 0; j < arrayLinesKeys.length; j++) {
    if (arrayLinesKeys[j][type] !== undefined) {
      const keys = arrayLinesKeys[j][type];
      for (let i = 0; i < keys.length; i++) {
        arrayLines[j].children[i].innerText = keys[i];
      }
    }
  }
}
change();

firstLine.children[13].classList.add("bigBtnL");
secondLine.children[0].classList.add("tab");
secondLine.children[14].classList.add("littleBtn");
thirdLine.children[0].classList.add("bigBtnL");
thirdLine.children[12].classList.add("bigBtnR");
forthLine.children[0].classList.add("bigBtnL");
forthLine.children[11].classList.add("littleBtn");
forthLine.children[12].classList.add("bigBtnR");

for (let i = 0; i < 10; i++) {
  if (i !== 3 && i < 9) {
    fifthLine.children[i].classList.add("littleBtn");
  }
}
fifthLine.children[3].classList.add("space");


let checkAnimation = 0;
const checkElem = {};

function animationUp(e) {
  checkAnimation = 0;
  delete checkElem[e.innerText];
  let radius = 20;
  setInterval(() => {
    radius = +radius;
    if (radius > 0) {
      radius -= 1; e.style.borderRadius = `${radius}px`;
    // eslint-disable-next-line no-useless-return
    } else return;
  }, 5);
}

function animationDown(e) {
  if (!checkAnimation || checkElem[e.innerText] === undefined) {
    checkElem[e.innerText] = 1;
    let radius = 0;
    setInterval(() => {
      radius = +radius;
      if (radius < 20) {
        radius += 1; e.style.borderRadius = `${radius}px`;
      // eslint-disable-next-line no-useless-return
      } else return;
    }, 5);
  }
  checkAnimation = 1;
}

wrapper.addEventListener("click", (e) => {
  const a = e.target.className;
  const b = e.target.innerText;
  if (a !== "key-wrapper" && a !== "line" && b !== "Enter" && b !== "Tab" && b !== "CapsLock" && b !== "Backspace" && b !== "Del" && b !== "Alt" && b !== "Ctrl" && b !== "Win" && b !== "Shift" && a !== "button-small space") {
    textInput.click();
    textInput.setRangeText(e.target.innerText, textInput.selectionStart, textInput.selectionEnd, "end");
    textInput.focus();
  } else if (b === "") {
    textInput.click();
    textInput.setRangeText(" ", textInput.selectionStart, textInput.selectionEnd, "end");
    textInput.focus();
  } else if (b === "Tab") {
    textInput.click();
    textInput.setRangeText("    ", textInput.selectionStart, textInput.selectionEnd, "end");
    textInput.focus();
  } else if (b === "Backspace") {
    textInput.click();
    if (textInput.selectionStart > 0)textInput.setRangeText("", textInput.selectionStart - 1, textInput.selectionEnd, "end");
    textInput.focus();
  } else if (b === "Del") {
    textInput.click();
    textInput.setRangeText("", textInput.selectionStart, textInput.selectionEnd + 1, "end");
    textInput.focus();
  } else if (b === "Enter") {
    textInput.click();
    textInput.setRangeText("\n", textInput.selectionStart, textInput.selectionEnd, "end");
    textInput.focus();
  }
});

function buttonUp(e) {
  e.click();
  animationDown(e);
  e.classList.add("active");
}

function buttonDown(e) {
  animationUp(e);
  e.classList.remove("active");
}

wrapper.addEventListener("mousedown", (e) => {
  textInput.focus();
  const a = e.target.className;
  if (a !== "key-wrapper" && a !== "line") {
    let radius = 0;
    e.target.classList.add("active");
    if (e.target.innerText !== "CapsLock") {
      // eslint-disable-next-line no-useless-return
      setInterval(() => { radius = +radius; if (radius < 20) { radius += 1; e.target.style.borderRadius = `${radius}px`; } else return; }, 5);
      if (e.target.innerText === "Shift") {
        if (type === "ruSmall") { type = "ruShift"; }
        if (type === "enSmall") { type = "enShift"; }
        if (type === "ruCaps") { type = "ruShiftCaps"; }
        if (type === "enCaps") { type = "enShiftCaps"; }
        e.target.classList.add("active");
        change();
      }
    } else if (e.target.innerText === "CapsLock") {
      if (type === "ruSmall") {
        type = "ruCaps";
        thirdLine.children[0].classList.add("active");
        animationDown(thirdLine.children[0]);
      } else if (type === "ruCaps") {
        type = "ruSmall";
        thirdLine.children[0].classList.remove("active");
        animationUp(thirdLine.children[0]);
      } if (type === "enSmall") {
        type = "enCaps";
        thirdLine.children[0].classList.add("active");
        animationDown(thirdLine.children[0]);
      } else if (type === "enCaps") {
        type = "enSmall";
        thirdLine.children[0].classList.remove("active");
        animationUp(thirdLine.children[0]);
      }
      change();
    }
  }
});

wrapper.addEventListener("mouseup", (e) => {
  const a = e.target.className;
  if (a !== "key-wrapper" && a !== "line" && e.target.innerText !== "CapsLock") {
    e.target.classList.remove("active");
    let radius = 20;
    // eslint-disable-next-line no-useless-return
    setInterval(() => { radius = +radius; if (radius > 0) { radius -= 1; e.target.style.borderRadius = `${radius}px`; } else return; }, 5);
    if (e.target.innerText === "Shift") {
      if (type === "ruShift") { type = "ruSmall"; }
      if (type === "enShift") { type = "enSmall"; }
      if (type === "enShiftCaps") { type = "enCaps"; }
      if (type === "ruShiftCaps") { type = "ruCaps"; }
      e.target.classList.remove("active");
      change();
    }
  }
});

wrapper.addEventListener("mouseout", (e) => {
  const a = e.target.className;
  if (a.indexOf("active") !== -1) {
    if (a !== "key-wrapper" && a !== "line" && e.target.innerText !== "CapsLock") {
      e.target.classList.remove("active");
      let radius = 20;
      // eslint-disable-next-line no-useless-return
      setInterval(() => { radius = +radius; if (radius > 0) { radius -= 1; e.target.style.borderRadius = `${radius}px`; } else return; }, 5);
    }
  }
});

let checkCaps = 1;
const checkShiftL = 0;
const checkShiftR = 0;
let checkChange = 0;
const keydown = (e) => {
  e.preventDefault();
  if (e.keyCode === 192) {
    buttonUp(firstLine.children[0]);
  }
  if (e.keyCode > 48 && e.keyCode < 58) {
    buttonUp(firstLine.children[e.keyCode - 48]);
  }
  if (e.keyCode === 48) {
    buttonUp(firstLine.children[10]);
  }
  if (e.keyCode === 189) {
    buttonUp(firstLine.children[11]);
  }
  if (e.keyCode === 187) {
    buttonUp(firstLine.children[12]);
  }
  if (e.keyCode === 8) {
    buttonUp(firstLine.children[13]);
  }
  if (e.keyCode === 9) {
    buttonUp(secondLine.children[0]);
  }
  if (e.keyCode === 81) {
    buttonUp(secondLine.children[1]);
  }
  if (e.keyCode === 87) {
    buttonUp(secondLine.children[2]);
  }
  if (e.keyCode === 69) {
    buttonUp(secondLine.children[3]);
  }
  if (e.keyCode === 82) {
    buttonUp(secondLine.children[4]);
  }
  if (e.keyCode === 84) {
    buttonUp(secondLine.children[5]);
  }
  if (e.keyCode === 89) {
    buttonUp(secondLine.children[6]);
  }
  if (e.keyCode === 85) {
    buttonUp(secondLine.children[7]);
  }
  if (e.keyCode === 73) {
    buttonUp(secondLine.children[8]);
  }
  if (e.keyCode === 79) {
    buttonUp(secondLine.children[9]);
  }
  if (e.keyCode === 80) {
    buttonUp(secondLine.children[10]);
  }
  if (e.keyCode === 219) {
    buttonUp(secondLine.children[11]);
  }
  if (e.keyCode === 221) {
    buttonUp(secondLine.children[12]);
  }
  if (e.keyCode === 220) {
    buttonUp(secondLine.children[13]);
  }
  if (e.keyCode === 46) {
    buttonUp(secondLine.children[14]);
  }
  if (checkCaps) {
    if (e.keyCode === 20) {
      checkCaps = 0;
      if (type === "ruSmall") {
        type = "ruCaps";
        thirdLine.children[0].classList.add("active");
        animationDown(thirdLine.children[0]);
      } else if (type === "ruCaps") {
        type = "ruSmall";
        thirdLine.children[0].classList.remove("active");
        animationUp(thirdLine.children[0]);
      } if (type === "enSmall") {
        type = "enCaps";
        thirdLine.children[0].classList.add("active");
        animationDown(thirdLine.children[0]);
      } else if (type === "enCaps") {
        type = "enSmall";
        thirdLine.children[0].classList.remove("active");
        animationUp(thirdLine.children[0]);
      }
      change();
    }
  }
  if (e.keyCode === 65) {
    buttonUp(thirdLine.children[1]);
  }
  if (e.keyCode === 83) {
    buttonUp(thirdLine.children[2]);
  }
  if (e.keyCode === 68) {
    buttonUp(thirdLine.children[3]);
  }
  if (e.keyCode === 70) {
    buttonUp(thirdLine.children[4]);
  }
  if (e.keyCode === 71) {
    buttonUp(thirdLine.children[5]);
  }
  if (e.keyCode === 72) {
    buttonUp(thirdLine.children[6]);
  }
  if (e.keyCode === 74) {
    buttonUp(thirdLine.children[7]);
  }
  if (e.keyCode === 75) {
    buttonUp(thirdLine.children[8]);
  }
  if (e.keyCode === 76) {
    buttonUp(thirdLine.children[9]);
  }
  if (e.keyCode === 186) {
    buttonUp(thirdLine.children[10]);
  }
  if (e.keyCode === 222) {
    buttonUp(thirdLine.children[11]);
  }
  if (e.keyCode === 13) {
    buttonUp(thirdLine.children[12]);
  }
  if (!checkShiftL) {
    if (e.keyCode === 16 && e.code === "ShiftLeft") {
      if (type === "ruSmall") { type = "ruShift"; }
      if (type === "enSmall") { type = "enShift"; }
      if (type === "ruCaps") { type = "ruShiftCaps"; }
      if (type === "enCaps") { type = "enShiftCaps"; }
      forthLine.children[0].classList.add("active");
      animationDown(forthLine.children[0]);
      change();
    }
  }
  if (e.keyCode === 90) {
    buttonUp(forthLine.children[1]);
  }
  if (e.keyCode === 88) {
    buttonUp(forthLine.children[2]);
  }
  if (e.keyCode === 67) {
    buttonUp(forthLine.children[3]);
  }
  if (e.keyCode === 86) {
    buttonUp(forthLine.children[4]);
  }
  if (e.keyCode === 66) {
    buttonUp(forthLine.children[5]);
  }
  if (e.keyCode === 78) {
    buttonUp(forthLine.children[6]);
  }
  if (e.keyCode === 77) {
    buttonUp(forthLine.children[7]);
  }
  if (e.keyCode === 188) {
    buttonUp(forthLine.children[8]);
  }
  if (e.keyCode === 190) {
    buttonUp(forthLine.children[9]);
  }
  if (e.keyCode === 191) {
    buttonUp(forthLine.children[10]);
  }
  if (e.keyCode === 38) {
    buttonUp(forthLine.children[11]);
  }
  if (!checkShiftR) {
    if (e.keyCode === 16 && e.code === "ShiftRight") {
      if (type === "ruSmall") { type = "ruShift"; }
      if (type === "enSmall") { type = "enShift"; }
      if (type === "ruCaps") { type = "ruShiftCaps"; }
      if (type === "enCaps") { type = "enShiftCaps"; }
      forthLine.children[12].classList.add("active");
      animationDown(forthLine.children[12]);
      change();
    }
  }
  if (e.keyCode === 17 && e.code === "ControlLeft") {
    buttonUp(fifthLine.children[0]);
  }
  if (e.keyCode === 91) {
    buttonUp(fifthLine.children[1]);
  }
  if (e.keyCode === 18 && e.code === "AltLeft") {
    buttonUp(fifthLine.children[2]);
  }
  if (e.keyCode === 32) {
    buttonUp(fifthLine.children[3]);
  }
  if (e.keyCode === 18 && e.code === "AltRight") {
    buttonUp(fifthLine.children[4]);
  }
  if (e.keyCode === 37) {
    buttonUp(fifthLine.children[5]);
  }
  if (e.keyCode === 40) {
    buttonUp(fifthLine.children[6]);
  }
  if (e.keyCode === 39) {
    buttonUp(fifthLine.children[7]);
  }
  if (e.keyCode === 17 && e.code === "ControlRight") {
    buttonUp(fifthLine.children[8]);
  }
  const ctrlL = fifthLine.children[0].className;
  const ctrlR = fifthLine.children[8].className;
  const altL = fifthLine.children[2].className;
  const altR = fifthLine.children[4].className;
  if (!checkChange) {
    if ((ctrlL === "button-small littleBtn active" || ctrlR === "button-small littleBtn active") && (altL === "button-small littleBtn active" || altR === "button-small littleBtn active")) {
      checkChange = 1;
      if (type[0] === "e") {
        type = `ru${type.slice(2)}`;
      } else if (type[0] === "r") {
        type = `en${type.slice(2)}`;
      }
      change();
    }
  }
};

const keyup = (e) => {
  if (e.keyCode === 20) {
    checkCaps = 1;
  }
  if (e.keyCode === 192) {
    buttonDown(firstLine.children[0]);
  }
  if (e.keyCode > 48 && e.keyCode < 58) {
    buttonDown(firstLine.children[e.keyCode - 48]);
  }
  if (e.keyCode === 48) {
    buttonDown(firstLine.children[10]);
  }
  if (e.keyCode === 189) {
    buttonDown(firstLine.children[11]);
  }
  if (e.keyCode === 187) {
    buttonDown(firstLine.children[12]);
  }
  if (e.keyCode === 8) {
    buttonDown(firstLine.children[13]);
  }
  if (e.keyCode === 9) {
    buttonDown(secondLine.children[0]);
  }
  if (e.keyCode === 81) {
    buttonDown(secondLine.children[1]);
  }
  if (e.keyCode === 87) {
    buttonDown(secondLine.children[2]);
  }
  if (e.keyCode === 69) {
    buttonDown(secondLine.children[3]);
  }
  if (e.keyCode === 82) {
    buttonDown(secondLine.children[4]);
  }
  if (e.keyCode === 84) {
    buttonDown(secondLine.children[5]);
  }
  if (e.keyCode === 89) {
    buttonDown(secondLine.children[6]);
  }
  if (e.keyCode === 85) {
    buttonDown(secondLine.children[7]);
  }
  if (e.keyCode === 73) {
    buttonDown(secondLine.children[8]);
  }
  if (e.keyCode === 79) {
    buttonDown(secondLine.children[9]);
  }
  if (e.keyCode === 80) {
    buttonDown(secondLine.children[10]);
  }
  if (e.keyCode === 219) {
    buttonDown(secondLine.children[11]);
  }
  if (e.keyCode === 221) {
    buttonDown(secondLine.children[12]);
  }
  if (e.keyCode === 220) {
    buttonDown(secondLine.children[13]);
  }
  if (e.keyCode === 46) {
    buttonDown(secondLine.children[14]);
  }
  if (e.keyCode === 65) {
    buttonDown(thirdLine.children[1]);
  }
  if (e.keyCode === 83) {
    buttonDown(thirdLine.children[2]);
  }
  if (e.keyCode === 68) {
    buttonDown(thirdLine.children[3]);
  }
  if (e.keyCode === 70) {
    buttonDown(thirdLine.children[4]);
  }
  if (e.keyCode === 71) {
    buttonDown(thirdLine.children[5]);
  }
  if (e.keyCode === 72) {
    buttonDown(thirdLine.children[6]);
  }
  if (e.keyCode === 74) {
    buttonDown(thirdLine.children[7]);
  }
  if (e.keyCode === 75) {
    buttonDown(thirdLine.children[8]);
  }
  if (e.keyCode === 76) {
    buttonDown(thirdLine.children[9]);
  }
  if (e.keyCode === 186) {
    buttonDown(thirdLine.children[10]);
  }
  if (e.keyCode === 222) {
    buttonDown(thirdLine.children[11]);
  }
  if (e.keyCode === 13) {
    buttonDown(thirdLine.children[12]);
  }
  if (e.keyCode === 16 && e.code === "ShiftLeft") {
    if (type === "ruShift") { type = "ruSmall"; }
    if (type === "enShift") { type = "enSmall"; }
    if (type === "enShiftCaps") { type = "enCaps"; }
    if (type === "ruShiftCaps") { type = "ruCaps"; }
    forthLine.children[0].classList.remove("active");
    animationUp(forthLine.children[0]);
    change();
  }
  if (e.keyCode === 90) {
    buttonDown(forthLine.children[1]);
  }
  if (e.keyCode === 88) {
    buttonDown(forthLine.children[2]);
  }
  if (e.keyCode === 67) {
    buttonDown(forthLine.children[3]);
  }
  if (e.keyCode === 86) {
    buttonDown(forthLine.children[4]);
  }
  if (e.keyCode === 66) {
    buttonDown(forthLine.children[5]);
  }
  if (e.keyCode === 78) {
    buttonDown(forthLine.children[6]);
  }
  if (e.keyCode === 77) {
    buttonDown(forthLine.children[7]);
  }
  if (e.keyCode === 188) {
    buttonDown(forthLine.children[8]);
  }
  if (e.keyCode === 190) {
    buttonDown(forthLine.children[9]);
  }
  if (e.keyCode === 191) {
    buttonDown(forthLine.children[10]);
  }
  if (e.keyCode === 38) {
    buttonDown(forthLine.children[11]);
  }
  if (e.keyCode === 16 && e.code === "ShiftRight") {
    if (type === "ruShift") { type = "ruSmall"; }
    if (type === "enShift") { type = "enSmall"; }
    if (type === "enShiftCaps") { type = "enCaps"; }
    if (type === "ruShiftCaps") { type = "ruCaps"; }
    forthLine.children[12].classList.remove("active");
    animationUp(forthLine.children[12]);
    change();
  }
  if (e.keyCode === 17 && e.code === "ControlLeft") {
    checkChange = 0;
    buttonDown(fifthLine.children[0]);
  }
  if (e.keyCode === 91) {
    buttonDown(fifthLine.children[1]);
  }
  if (e.keyCode === 18 && e.code === "AltLeft") {
    checkChange = 0;
    buttonDown(fifthLine.children[2]);
  }
  if (e.keyCode === 32) {
    buttonDown(fifthLine.children[3]);
  }
  if (e.keyCode === 18 && e.code === "AltRight") {
    checkChange = 0;
    buttonDown(fifthLine.children[4]);
  }
  if (e.keyCode === 37) {
    buttonDown(fifthLine.children[5]);
  }
  if (e.keyCode === 40) {
    buttonDown(fifthLine.children[6]);
  }
  if (e.keyCode === 39) {
    buttonDown(fifthLine.children[7]);
  }
  if (e.keyCode === 17 && e.code === "ControlRight") {
    checkChange = 0;
    buttonDown(fifthLine.children[8]);
  }
};

document.addEventListener("keyup", keyup);
document.addEventListener("keydown", keydown);
