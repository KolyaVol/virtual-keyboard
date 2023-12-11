const container = document.createElement("main");
container.classList.add("main");
document.body.appendChild(container);

const title = document.createElement("h1");
title.classList.add("title");
title.innerText = "This is a virtual keyboard ";
container.appendChild(title);

const textarea = document.createElement("textarea");
textarea.classList.add("textarea");
container.appendChild(textarea);
let selectionStart = textarea.selectionStart;

const keyboard = document.createElement("section");
keyboard.classList.add("keyboard");
container.appendChild(keyboard);

const description = document.createElement("p");
keyboard.classList.add("description");
description.innerHTML =
  "Клавиатура сделана на ОС Windows. Для изменения языка нажмите Alt+Shift";
container.appendChild(description);

const bg = document.createElement("div");
bg.classList.add("keyboard__bg");
keyboard.appendChild(bg);

const keyboardLines = [
  "keyboard__first-line",
  "keyboard__second-line",
  "keyboard__third-line",
  "keyboard__forth-line",
  "keyboard__fifth-line",
];

keyboardLines.forEach((item) => {
  let line = document.createElement("section");
  line.classList.add("keyboard__line");
  line.classList.add(item);
  keyboard.appendChild(line);
});

const keyLayoutEng = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "[",
  "]",
  "Del",
  "Caps Lock",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  `'`,
  `\\`,
  "Enter",
  "Shift",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "/",
  "void",
  "↑",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Ctrl",
  "←",
  "↓",
  "→",
];
const keyLayoutEngShift = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "Backspace",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "{",
  "}",
  "Del",
  "Caps Lock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ":",
  `"`,
  "/",
  "Enter",
  "Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ">",
  "?",
  "void",
  "↑",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Ctrl",
  "←",
  "↓",
  "→",
];
const keyLayoutRu = [
  "ё",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Backspace",
  "Tab",
  "й",
  "ц",
  "у",
  "к",
  "е",
  "н",
  "г",
  "ш",
  "щ",
  "з",
  "х",
  "ъ",
  "Del",
  "Caps Lock",
  "ф",
  "ы",
  "в",
  "а",
  "п",
  "р",
  "о",
  "л",
  "д",
  "ж",
  `э`,
  `\\`,
  "Enter",
  "Shift",
  "я",
  "ч",
  "с",
  "м",
  "и",
  "т",
  "ь",
  "б",
  "ю",
  ".",
  "void",
  "↑",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Ctrl",
  "←",
  "↓",
  "→",
];
const keyLayoutRuShift = [
  "Ё",
  "!",
  `"`,
  "№",
  ";",
  "%",
  ":",
  "?",
  "*",
  "(",
  ")",
  "_",
  "+",
  "Backspace",
  "Tab",
  "Й",
  "Ц",
  "У",
  "К",
  "Е",
  "Н",
  "Г",
  "Ш",
  "Щ",
  "З",
  "Х",
  "Ъ",
  "Del",
  "Caps Lock",
  "Ф",
  "Ы",
  "В",
  "А",
  "П",
  "Р",
  "О",
  "Л",
  "Д",
  "Ж",
  `Э`,
  `/`,
  "Enter",
  "Shift",
  "Я",
  "Ч",
  "С",
  "М",
  "И",
  "Т",
  "Ь",
  "Б",
  "Ю",
  ",",
  "void",
  "↑",
  "Shift",
  "Ctrl",
  "Win",
  "Alt",
  "Space",
  "Alt",
  "Ctrl",
  "←",
  "↓",
  "→",
];
let isRus = false,
  isShift = false,
  isAlt = false,
  isCaps = false,
  currKeyLayout = keyLayoutEng;

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("ru")) {
    isRus = true;
    currKeyLayout = keyLayoutRu;
    reloadKeys();
  }
});

function removeActiveClass(item) {
  setTimeout(() => {
    item.classList.remove("active");
  }, 500);
}

function addText(text) {
  selectionStart = textarea.selectionStart;
  let startText = textarea.value.substring(0, selectionStart);
  let endText = textarea.value.substring(selectionStart, textarea.value.length);
  textarea.value = startText + text + endText;
}

const createKeys = () => {
  currKeyLayout.forEach((key) => {
    if (key === "void") {
      document
        .querySelector(".keyboard__forth-line")
        .appendChild(document.createElement("div"));
    } else {
      const keyElement = document.createElement("button");

      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");

      keyElement.textContent = key;

      if (currKeyLayout.indexOf(key) < 14) {
        document.querySelector(".keyboard__first-line").appendChild(keyElement);
      } else if (currKeyLayout.indexOf(key) < 28) {
        document
          .querySelector(".keyboard__second-line")
          .appendChild(keyElement);
      } else if (currKeyLayout.indexOf(key) < 42) {
        document.querySelector(".keyboard__third-line").appendChild(keyElement);
      } else if (currKeyLayout.indexOf(key) < 55) {
        document.querySelector(".keyboard__forth-line").appendChild(keyElement);
      } else {
        document.querySelector(".keyboard__fifth-line").appendChild(keyElement);
      }
    }
  });
};

createKeys();
let btns = [...keyboard.getElementsByClassName("keyboard__key")];

function reloadKeys() {
  let counter = 0;
  btns.forEach((item) => {
    if (counter > 52) {
      counter++;
      item.textContent = currKeyLayout[counter];
    } else {
      counter++;
      item.textContent = currKeyLayout[counter - 1];
    }
  });
}

function del() {
  let text = textarea.value;
  selectionStart = textarea.selectionStart;
  let selectionEnd = textarea.selectionEnd;
  if (selectionStart != selectionEnd) {
    textarea.value =
      text.substring(0, selectionStart) +
      text.substring(selectionEnd, text.length);
    textarea.selectionStart = selectionStart;
    textarea.selectionEnd = selectionStart;

    return;
  }

  if (selectionStart === textarea.value.length || selectionStart === 0) {
    return;
  } else {
    textarea.value =
      text.slice(0, selectionStart) +
      text.slice(selectionStart + 1, textarea.value.length);
  }
  textarea.selectionStart = selectionStart;
}

function backspace(text) {
  text = textarea.value;
  selectionStart = textarea.selectionStart;
  let selectionEnd = textarea.selectionEnd;
  if (selectionStart != selectionEnd) {
    textarea.value =
      text.substring(0, selectionStart) +
      text.substring(selectionEnd, text.length);
    textarea.selectionStart = selectionStart;
    textarea.selectionEnd = selectionStart;

    return;
  }

  textarea.value =
    text.slice(0, selectionStart - 1) +
    text.slice(selectionStart, textarea.value.length);
  textarea.selectionStart = selectionStart - 1;
}

function ctrl() {
  btns.forEach((item) => {
    if (item.textContent === "ctrl") {
      item.classList.add("active");
    }
  });
}

function tab() {
  textarea.value += "    ";
  btns.forEach((item) => {
    if (item.textContent.toLowerCase() === "tab") {
      item.classList.add("active");
    }
  });
}

function space() {
  btns.forEach((item) => {
    if (item.textContent.toLowerCase() === "space") {
      textarea.value += " ";
      item.classList.add("active");
      removeActiveClass(item);
    }
  });
}

function enter(e) {
  e.preventDefault();
  textarea.value += "\n";
  btns.forEach((item) => {
    if (item.textContent.toLowerCase() === "enter") {
      item.classList.add("active");
    }
  });
}

function shift() {
  isShift = true;
  if (isRus) {
    currKeyLayout = keyLayoutEng;
    localStorage.removeItem("ru");
    reloadKeys();
  } else {
    currKeyLayout = keyLayoutRu;
    localStorage.setItem("ru", "ru");
    reloadKeys();
  }

  if (isShift && isRus) {
    currKeyLayout = keyLayoutRuShift;
    reloadKeys();
  } else if (isShift && !isRus) {
    currKeyLayout = keyLayoutEngShift;
    reloadKeys();
  }

  if (isShift && isAlt) {
    isRus = !isRus;
  }
}
function caps() {
  isCaps = !isCaps;

  btns.forEach((item) => {
    if (item.textContent.toUpperCase() === "caps lock") {
      item.classList.add("active");
    }
    if (isCaps && item.innerText.length < 2) {
      item.innerText = item.innerText.toUpperCase();
    }
  });
}
function alt() {
  isAlt = true;
}

function leftArrow() {
  textarea.value += "←";
  btns.forEach((item) => {
    if (item.textContent.toLowerCase() === "←") {
      item.classList.add("active");
      removeActiveClass(item);
    }
  });
}

function rightArrow() {
  textarea.value += "→";
  btns.forEach((item) => {
    if (item.textContent.toLowerCase() === "→") {
      item.classList.add("active");
      removeActiveClass(item);
    }
  });
}

function upArrow() {
  textarea.value += "↑";
  btns.forEach((item) => {
    if (item.textContent.toLowerCase() === "↑") {
      item.classList.add("active");
      removeActiveClass(item);
    }
  });
}

function downArrow() {
  textarea.value += "↓";
  btns.forEach((item) => {
    if (item.textContent.toLowerCase() === "↓") {
      item.classList.add("active");
      removeActiveClass(item);
    }
  });
}

keyboard.addEventListener("mousedown", (e) => {
  e.target.classList.add("active");
  switch (e.target.innerText.toLowerCase()) {
    case "ctrl":
      ctrl();
      break;

    case "tab":
      tab();
      break;

    case "space":
      space();
      break;

    case "enter":
      enter(e);
      break;

    case "backspace":
      backspace();
      break;

    case "del":
      del();
      break;

    case "shift":
      shift();
      break;

    case "caps lock":
      caps();
      break;

    case "alt":
      alt();
      break;

    default:
      if (e.target.innerText.length > 1) {
        return;
      } else {
        addText(e.target.innerText);
      }

      break;
  }
});

keyboard.addEventListener("mouseup", (e) => {
  removeActiveClass(e.target);
});
keyboard.addEventListener("mouseout", (e) => {
  removeActiveClass(e.target);
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  textarea.blur();
  textarea.focus();
  const btn = btns.find(
    (btn) => btn.textContent.toLowerCase() === e.key.toLowerCase()
  );
  btn ? btn.classList.add("active") : "";

  switch (e.key) {
    case "Control":
      ctrl();
      break;

    case "Tab":
      tab();
      break;

    case " ":
      space(e);
      break;

    case "Enter":
      enter(e);
      break;

    case "Backspace":
      backspace();
      break;

    case "Delete":
      del();
      break;

    case "Shift":
      shift();
      break;

    case "CapsLock":
      caps();
      break;

    case "Alt":
      alt();
      break;

    case "ArrowLeft":
      leftArrow();
      break;

    case "ArrowRight":
      rightArrow();
      break;

    case "ArrowUp":
      upArrow();
      break;

    case "ArrowDown":
      downArrow();
      break;

    default:
      addText(e.key);
      break;
  }
  removeActiveClass(e.target);
});

document.addEventListener("keyup", (e) => {
  const btn = btns.find(
    (btn) => btn.textContent.toLowerCase() === e.key.toLowerCase()
  );
  switch (e.key) {
    case "Control":
      btns.forEach((item) => {
        if (item.textContent === "ctrl") {
          removeActiveClass(item);
        }
      });
      break;

    case "Shift":
      isShift = false;
      btns.forEach((item) => {
        if (item.textContent === "shift") {
          removeActiveClass(item);
        }
      });
      if (isRus) {
        currKeyLayout = keyLayoutRu;
        reloadKeys();
      } else {
        currKeyLayout = keyLayoutEng;
        reloadKeys();
      }
      if (isShift && isRus) {
        currKeyLayout = keyLayoutRuShift;
        reloadKeys();
      } else if (isShift && !isRus) {
        currKeyLayout = keyLayoutEngShift;
        reloadKeys();
      }
      if (isShift && isAlt) {
        isRus = !isRus;
      }
      break;

    case "space":
      removeActiveClass(btn);
      removeActiveClass(e.target);
      break;

    case "CapsLock":
      btns.forEach((item) => {
        if (item.textContent.toLowerCase() === "caps lock") {
          removeActiveClass(item);
        }
      });
      break;
    case "Tab":
      btns.forEach((item) => {
        if (item.textContent === "Tab") {
          removeActiveClass(item);
        }
      });
      break;
    case "Alt":
      isAlt = false;
      break;

    default:
      break;
  }
  removeActiveClass(btn);
});
