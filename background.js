/**
 * Created by kellerme on 2020/3/1
 */
// console.log('start');
// chrome.runtime.onInstalled.addListener(function () {
//     chrome.storage.sync.set({color: '#3aa757'}, function () {
//         console.log("The color is green.");
//     });
//     chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
//         chrome.declarativeContent.onPageChanged.addRules([{
//             conditions: [new chrome.declarativeContent.PageStateMatcher({
//                 pageUrl: {},
//             })
//             ],
//             actions: [new chrome.declarativeContent.ShowPageAction()]
//         }]);
//     });
// });
// function logURL(requestDetails) {
//     console.log("Loading: ");
//     console.log("Loading: " + requestDetails);
// }
//
// chrome.webRequest.onBeforeRequest.addListener(
//     logURL,
//     {urls: ["<all_urls>"]}
// );
var pattern = "https://developer.mozilla.org/*";

function redirect(requestDetails) {
    console.log("Redirecting: " + requestDetails.url);
    return {
        redirectUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583082032172&di=e377ef238ce410cbe59c2ab7bb09021f&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F86%2F10%2F01300000184180121920108394217.jpg"
    };
}

chrome.webRequest.onBeforeRequest.addListener(
    redirect,
    {urls:[pattern], types:["image"]},
    ["blocking"]
);