import { v4 as uuidv4 } from 'uuid';

import { User } from "./User"

const user = new User('YMSK', 'SKY', 18);

const contentsElem = document.getElementById('contents');
if(!!contentsElem) {
  contentsElem.innerText = `${user.familyName} ${user.givenName}`;
}

// HTML要素を取得 キャストすることで入力補完が効く
const saibanButton = document.getElementById('saiban') as HTMLButtonElement;
const uuidSpan = document.getElementById('uuid') as HTMLSpanElement;
// ボタンのクリックイベントを追加
saibanButton.onclick = (e) => {
  uuidSpan.innerText = uuidv4();
}
