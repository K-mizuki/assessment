'use strict';
const userNameInput = document.getElementById('user-name')
const assesmentButton = document.getElementById('assesment')
const resultdiv = document.getElementById('result-area')
const twwetdiv = document.getElementById('tweet-area')

/**
 * 指定したHTML要素の子要素を全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
function removeALLChildren(element) {
     while(element.firstChild) {
         element.removeChild(element.firstChild)
     }
 }
userNameInput.onkeydown = function (event) {
    if (event.key === 'Enter') {
        assesmentButton.onclick();
    }
}
assesmentButton.onclick = function() {
    const userName = userNameInput.value
    if (userName.length === 0) {
        return;
    }

    removeALLChildren(resultdiv);
    removeALLChildren(twwetdiv);

const header = document.createElement('h3')
header.innerText = '診断結果';
resultdiv.appendChild(header);

const result = assesment(userName);
const paragraph = document.createElement('p');
paragraph.innerText = result;
resultdiv.appendChild(paragraph);

const anchor = document.createElement('a');
    const hrefvalue ='https://twitter.com/intent/tweet?button_hashtag='
                      + encodeURIComponent('あなたのいいところ') + '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefvalue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #あなたのいいところ';
    twwetdiv.appendChild(anchor);
    twttr.widgets.load();

}

const answers = [
'{userName}のいいところはＡです。',
'{userName}のいいところはＢです。',
'{userName}のいいところはＣです。',
'{userName}のいいところはＤです。',
'{userName}のいいところはＥです。',
'{userName}のいいところはＦです。',
'{userName}のいいところはＧです。',
'{userName}のいいところはＨです。',
'{userName}のいいところはＩです。',
'{userName}のいいところはＪです。',
'{userName}のいいところはＫです。',
'{userName}のいいところはＬです。',
];

/**
 * 名前の文字列を渡すと診断結果を返す関数。
 * @param {string} userName ユーザーの名前
 * @returns {string} 診断結果
 */

 function assesment(userName) {
     let sumofcharcode = 0;
     for(let i = 0; i <userName.length; i++) {
         sumofcharcode += userName.charCodeAt(i);
     }
     const index = sumofcharcode % answers.length;
     let result = answers[index];
     result = result.replace(/\{userName\}/g, userName);
     return result;
 }
 
