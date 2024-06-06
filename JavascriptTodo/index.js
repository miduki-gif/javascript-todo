const onClickAdd = () => {
//テキストボックスの値を取得し初期化する
const inputText = document.getElementById("add-text").value;
document.getElementById("add-text").value = "";

//li生成
const li = document.createElement("li");

//div生成
const div = document.createElement("div");
div.className = "list-row";

//p生成
const p = document.createElement("p");
p.className = "todo-item";
p.innerText = inputText;

//button(完了)タグ生成
const CompleteButton = document.createElement("button");
CompleteButton.innerText = "完了";
//完了ボタンをクリックしたときにクリックイベントとクリックされた時の処理
CompleteButton.addEventListener("click", () => {
    alert("完了");
});
//button(削除)タグ生成
const DeleteButton = document.createElement("button");
DeleteButton.innerText = "削除";
//削除ボタンをクリックしたときにクリックイベントとクリックされた時の処理
DeleteButton.addEventListener("click", () => {
    alert("削除");
});
console.log(DeleteButton);
//javasctipt上でDOMの階層構造を示すメソッドがある。
//appendchildはどんどん下に追加されていくのでｐの次にbuttonタグがあるときもこのメソッド
//を使用してタグの階層構造を示すことができる。
//liタグの子要素に各要素を指定
div.appendChild(p);
div.appendChild(CompleteButton);
div.appendChild(DeleteButton);
li.appendChild(div);
//javascript上で変数に持っているだけなのでこれを画面上に表示していく
//未完了のリストに追加
document.getElementById("inconmplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click",onClickAdd);


