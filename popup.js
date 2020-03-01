/**
 * Created by kellerme on 2020/3/1
 */
'use strict';
let setEditAble = document.getElementById('setEditAble');
setEditAble.onclick = function (ev) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.contentEditable = true'});
    });
};

// let changeColor = document.getElementById('changeColor');
// console.log(changeColor);
// chrome.storage.sync.get('color',function (data) {
//     changeColor.style.backgroundColor = data.color;
//     changeColor.setAttribute('value',data.color);
// });
// changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//         chrome.tabs.executeScript(
//             tabs[0].id,
//             {code: 'document.body.style.backgroundColor = "' + color + '";'});
//     });
// };
