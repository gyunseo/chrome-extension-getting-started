// 버튼을 유저가 원하는 색으로 초기화 한다.
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
    changeColor.style.backgroundColor = color;
});
//storage에서 color값을 가져오고, 버튼을 그 값으로 바꾼다.