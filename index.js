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
let cursorPos = textarea.selectionStart;

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
  "br",
  "up arrow",
  "shift",
  "ctrl",
  "Win",
  "alt",
  "space",
  "alt",
  "ctrl",
  "left arrow",
  "down arrow",
  "right arrow",
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
  "\\",
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
  "up arrow",
  "shift",
  "ctrl",
  "Win",
  "alt",
  "space",
  "alt",
  "ctrl",
  "left arrow",
  "down arrow",
  "right arrow",
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
  "br",
  "up arrow",
  "shift",
  "ctrl",
  "Win",
  "alt",
  "space",
  "alt",
  "ctrl",
  "left arrow",
  "down arrow",
  "right arrow",
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
  "\\",
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
  "up arrow",
  "shift",
  "ctrl",
  "Win",
  "alt",
  "space",
  "alt",
  "ctrl",
  "left arrow",
  "down arrow",
  "right arrow",
];

let currKeyLayout = keyLayoutEng;
let isRus = false,
  isShift = false,
  isAlt = false,
  isCaps = false;

if (isAlt && isShift) {
  isRus = !isRus;
}
const changeShift = () => {
  isShift = !isShift;
};
const changeAlt = () => {
  isAlt = !isAlt;
};
const changeCaps = () => {
  isCaps = !isCaps;
};
if (isShift && isAlt) {
  isRus = !isRus;
}
if (isRus) {
  currKeyLayout = keyLayoutRu;
  console.log(isRus);
  reloadKeys();
} else currKeyLayout = keyLayoutEng;

const createKeys = () => {
  currKeyLayout.forEach((key) => {
    if (key === "br") {
      document
        .querySelector(".keyboard__forth-line")
        .appendChild(document.createElement("div"));
    } else {
      const keyElement = document.createElement("button");

      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");

      switch (key) {
        case "backspace":
          keyElement.textContent = key;
          keyElement.addEventListener("click", () => {
            let text = textarea.value;

            if (cursorPos === textarea.value.length || cursorPos === 0) {
              textarea.value = text.slice(0, textarea.value.length - 1);
            } else {
              textarea.value =
                text.slice(0, cursorPos - 1) +
                text.slice(cursorPos, textarea.length);
            }
            textarea.selectionStart = cursorPos;
            textarea.selectionEnd = cursorPos;
            textarea.focus();
          });

          break;

        case "del":
          keyElement.textContent = key;
          keyElement.addEventListener("click", () => {
            let text = textarea.value;
            let cursorPosition = textarea.selectionStart;
            textarea.value =
              text.slice(0, cursorPosition) +
              text.slice(cursorPosition + 1, textarea.length);
          });

          break;

        case "caps":
          keyElement.addEventListener("click", changeCaps());

          break;

        case "shift":
          keyElement.textContent = key;
          keyElement.addEventListener("mousedown", () => {
            changeShift();
            keyElement.addEventListener("mouseup", changeShift());
            keyElement.removeEventListener("mouseup", changeShift());
          });

          break;

        case "alt":
          keyElement.textContent = key;
          keyElement.addEventListener("mousedown", () => {
            changeAlt();
            keyElement.addEventListener("mouseup", changeAlt());
            keyElement.removeEventListener("mouseup", changeAlt());
          });
          break;

        case "enter":
          keyElement.textContent = key;
          keyElement.addEventListener("click", () => {});

          break;

        case "space":
          keyElement.addEventListener("click", () => {});

          break;

        default:
          keyElement.textContent = key;
          keyElement.addEventListener("click", () => {});

          break;
      }

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

function reloadKeys() {
  [...document.querySelectorAll(".keyboard__line")].forEach((line) => {
    line.innerHTML = "";
  });
  createKeys();
}

keyboard.addEventListener("click", (e) => {
  [...keyboard.getElementsByClassName("keyboard__key")].forEach((key) => {
    key.classList.remove("active");
  });

  e.target.classList.add("active");
  setTimeout(() => {
    e.target.classList.remove("active");
  }, 500);

  if (e.target.innerText.length > 1) {
    return;
  } else textarea.value += e.target.innerText;
});

let btns = [...keyboard.getElementsByClassName("keyboard__key")];

document.addEventListener("keydown", (e) => {
  const btn = [...btns].find((btn) => btn.textContent === e.key);
  btn ? btn.classList.add("active") : "";

  switch (e.key) {
    case "Control":
      break;
    case "Backspace":
      let text = textarea.value;

      if (cursorPos === textarea.value.length || cursorPos === 0) {
        textarea.value = text.slice(0, textarea.value.length - 1);
      } else {
        textarea.value =
          text.slice(0, cursorPos - 1) + text.slice(cursorPos, textarea.length);
      }
      textarea.selectionStart = cursorPos;
      textarea.selectionEnd = cursorPos;
      textarea.focus();
      break;
    case "Del":
      let cursorPosition = textarea.selectionStart;
      textarea.value =
        text.slice(0, cursorPosition) +
        text.slice(cursorPosition + 1, textarea.length);
      break;
    case "Shift":
      isShift = true;

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

      if (isRus) {
        currKeyLayout = keyLayoutRu;
        reloadKeys();
      } else {
        currKeyLayout = keyLayoutEng;
        reloadKeys();
      }

      break;
    case "CapsLock":
      break;
    case "Alt":
      isAlt = true;
      if (isShift && isAlt) {
        isRus = !isRus;
      }
      if (isRus) {
        currKeyLayout = keyLayoutRu;
        reloadKeys();
      } else currKeyLayout = keyLayoutEng;
      break;

    default:
      textarea.value += e.key;
      break;
  }
});

document.addEventListener("keyup", (e) => {
  const btn = [...btns].find(
    (btn) => btn.textContent.toLowerCase() === e.key.toLowerCase()
  );
  if (btn) {
    switch (e.key) {
      case "Control":
        break;
      case "Shift":
        isShift = false;
        if (isShift && isRus) {
          currKeyLayout = keyLayoutRuShift;
          reloadKeys();
        }
        if (isShift && !isRus) {
          currKeyLayout = keyLayoutEngShift;
          reloadKeys();
        }
        break;
      case "CapsLock":
        break;
      case "Alt":
        isAlt = false;
        break;

      default:
        break;
    }
    setTimeout(() => {
      btn.classList.remove("active");
    }, 500);
  }
});
document.addEventListener("keydown", (e) => {
  console.log(e);
});