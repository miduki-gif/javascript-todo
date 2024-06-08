const onClickAdd = () => {
//テキストボックスの値を取得し初期化する
const inputText = document.getElementById("add-text").value;
document.getElementById("add-text").value = "";
//未完了リストに追加
createIncompleteTodo(inputText);

}

//渡された引数をもとに未完了のTODOを作成する関数
const createIncompleteTodo =(todo) =>{
//li生成
const li = document.createElement("li");

//div生成
const div = document.createElement("div");
div.className = "list-row";

//p生成
const p = document.createElement("p");
p.className = "todo-item";
p.innerText = todo;

//button(完了)タグ生成
const CompleteButton = document.createElement("button");
CompleteButton.innerText = "完了";
//完了ボタンをクリックしたときにクリックイベントとクリックされた時の処理
CompleteButton.addEventListener("click", () => {
    //押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
    const moveTarget = CompleteButton.closest("li");
    //対象の要素の次にある要素を取得したい（完了ボタンの次の要素は削除ボタン）nextElementSiblingメソッドがある。
    //removeは自分自身を削除するメソッド
    CompleteButton.nextElementSibling.remove();
    CompleteButton.remove();
  //戻すボタンを生成してdivタグ配下に追加
  //移動する前にリストの横に完了ボタンを削除後差し込む戻すボタンを生成する
  const backButton = document.createElement("button");
  backButton.innerText = "戻す";
  //戻すボタンをクリックしたときに未完了のTODOに移動
  backButton.addEventListener("click", ()=>{
    //TODOの内容を取得し、未完了リストに追加
    //前の要素にアクセスしたいpreviousElementSibling
    const todoText = backButton.previousElementSibling.innerText;
    createIncompleteTodo(todoText);
    //押された戻すボタンの親にあるliタグを削除
    backButton.closest("li").remove();


    //この完了ボタンや削除ボタンを生成するのにネストが発生してしまうため別の関数に分けて参照させている
    // const inconmpleteMove = backButton.closest("li");
    // backButton.remove();
    // inconmpleteMove.firstElementChild.appendChild(CompleteButton);
    // inconmpleteMove.firstElementChild.appendChild(DeleteButton);
    // document.getElementById("inconmplete-list").appendChild(inconmpleteMove);
  })
  //要素の一番初めの子要素にアクセスfirstElementChildというメソッドがある。
  moveTarget.firstElementChild.appendChild(backButton);
  //完了リストに移動
    document.getElementById("complete-list").appendChild(moveTarget);
    //下記の書き方をすると要素を移動したときに完了と削除ボタンも一緒に移動してしまう
    //今回したいことがリストと戻すボタンを差し込みたい（完了と削除ボタンは削除したい）
    // document.getElementById("conplete").appendChild(CompleteTarget);
});
//button(削除)タグ生成
const DeleteButton = document.createElement("button");
DeleteButton.innerText = "削除";
//削除ボタンをクリックしたときにクリックイベントとクリックされた時の処理
DeleteButton.addEventListener("click", () => {
//押された削除ボタンの親にあるliタグを未完了リストから削除
//押された削除ボタンを起点にliタグを探して取得する。
//closestは該当要素の一番最初に見つかる親を探すメソッド
const deleteTarget = DeleteButton.closest("li");
//ulタグの中から削除ボタンを押されたときに取得したli要素を削除する。
//特定の要素の中の子要素を削除するメッソド⇒removechild
document.getElementById("inconmplete-list").removeChild(deleteTarget);
});
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


