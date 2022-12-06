let content = document.querySelector(".content>*");
let contentText = "";
let res = "";

// ---------------------------------------------------

let numberBtnArr = document.querySelectorAll(".numbers");

numberBtnArr.forEach((num) => {
    num.addEventListener("click", () => {
        contentText += num.innerHTML;
        res += num.innerHTML;
        showContent(res);
    });
});

// ---------------------------------------------------

let clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
    contentText = "";
    res = "";
    showContent(contentText);
});
// ---------------------------------------------------

let operators = document.querySelectorAll(".operators");

operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (contentText != "") {
            res += op.innerHTML;
            showContent(res);
        }
    });
});

// ---------------------------------------------------

let equalBtn = document.querySelector(".equal");

equalBtn.addEventListener("click", () => {
    showContent(eval(res));
    contentText = "";
    res = "";
});

// ---------------------------------------------------

function showContent(contentText) {
    let content = document.querySelector(".content>*");
    content.innerHTML = contentText;
}
