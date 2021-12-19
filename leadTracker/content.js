console.log("content-script!!")

console.log(document)
let currDoc = document.querySelectorAll('script[type="application/ld+json"]')
console.log(currDoc)
let jsonparsed = JSON.parse(currDoc[0].innerText)
console.log(jsonparsed)

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        console.log("gotMessage")
        sendResponse({
            data: jsonparsed
        });
});