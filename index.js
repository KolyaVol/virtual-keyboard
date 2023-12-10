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
  "backspace",
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
  "del",
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
  "enter",
  "shift",
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
  "shift",
  "ctrl",
  "Win",
  "alt",
  "space",
  "alt",
  "ctrl",
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
  "backspace",
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
  "del",
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
  "enter",
  "shift",
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
  "shift",
  "ctrl",
  "Win",
  "alt",
  "space",
  "alt",
  "ctrl",
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
  "backspace",
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
  "del",
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
  "enter",
  "shift",
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
  "shift",
  "ctrl",
  "Win",
  "alt",
  "space",
  "alt",
  "ctrl",
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
  "backspace",
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
  "del",
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
  "enter",
  "shift",
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
  "shift",
  "ctrl",
  "Win",
  "alt",
  "space",
  "alt",
  "ctrl",
  "←",
  "↓",
  "→",
];
let isRus = false,
  isShift = false,
  isAlt = false,
  isCaps = false,
  currKeyLayout = keyLayoutEng;

if (navigator.language == "en-US") {
  currKeyLayout = keyLayoutEng;
} else currKeyLayout = keyLayoutRu;

if (isAlt && isShift) {
  isRus = !isRus;
}

if (isShift && isAlt) {
  isRus = !isRus;
}
if (isRus) {
  currKeyLayout = keyLayoutRu;
  reloadKeys();
} else currKeyLayout = keyLayoutEng;

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

function del(text) {
  text = textarea.value;
  selectionStart = textarea.selectionStart;
  if (selectionStart === textarea.value.length || selectionStart === 0) {
    textarea.value = text.slice(0, textarea.value.length - 1);
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
  if (selectionStart === textarea.value.length || selectionStart === 0) {
    textarea.value = text.slice(0, textarea.value.length - 1);
  } else {
    textarea.value =
      text.slice(0, selectionStart - 1) +
      text.slice(selectionStart, textarea.value.length);
  }
  textarea.selectionStart = selectionStart - 1;
  textarea.selectionEnd = selectionStart - 1;
  textarea.focus();
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
    currKeyLayout = keyLayoutRu;
    localStorage.setItem("ru", "ru");
    reloadKeys();
  } else {
    currKeyLayout = keyLayoutEng;
    localStorage.removeItem("ru");
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
  });
  btns.forEach((item) => {
    if (isCaps && item.innerText.length < 2) {
      item.innerText = item.innerText.toUpperCase();
    } else {
      item.innerText = item.innerText.toLowerCase();
    }
  });
}
function alt() {
  isAlt = true;
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
      keyboard.addEventListener("mouseup", (e) => {
        removeActiveClass(e.target);
      });
      break;
  }

  if (e.target.innerText.length > 1) {
    return;
  } else {
    addText(e.target.innerText);
  }
});

document.addEventListener("keydown", (e) => {
  e.preventDefault();

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
      isShift = true;
      if (isRus) {
        currKeyLayout = keyLayoutRu;
        localStorage.removeItem("ru");
        reloadKeys();
      } else {
        currKeyLayout = keyLayoutEng;
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
      break;

    case "CapsLock":
      isCaps = !isCaps;
      btns.forEach((item) => {
        if (item.textContent.toLowerCase() === "caps lock") {
          item.classList.add("active");
        }
      });
      btns.forEach((item) => {
        if (isCaps) {
          item.innerText = item.innerText.toUpperCase();
        } else {
          item.innerText = item.innerText.toLowerCase();
        }
      });
      break;

    case "Alt":
      isAlt = true;
      break;

    case "ArrowLeft":
      textarea.value += "←";
      btns.forEach((item) => {
        if (item.textContent.toLowerCase() === "←") {
          item.classList.add("active");
          removeActiveClass(item);
        }
      });
      break;

    case "ArrowRight":
      textarea.value += "→";
      btns.forEach((item) => {
        if (item.textContent.toLowerCase() === "→") {
          item.classList.add("active");
          removeActiveClass(item);
        }
      });
      break;

    case "ArrowUp":
      textarea.value += "↑";
      btns.forEach((item) => {
        if (item.textContent.toLowerCase() === "↑") {
          item.classList.add("active");
          removeActiveClass(item);
        }
      });
      break;

    case "ArrowDown":
      textarea.value += "↓";
      btns.forEach((item) => {
        if (item.textContent.toLowerCase() === "↓") {
          item.classList.add("active");
          removeActiveClass(item);
        }
      });
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

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("ru")) {
    isRus = true;
    currKeyLayout = keyLayoutRu;
  }
  reloadKeys();
});
