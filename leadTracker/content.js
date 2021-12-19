console.log("content-script!!")

console.log(document)
let currDoc = document.querySelectorAll('script[type="application/ld+json"]')
console.log(currDoc)
let jsonparsed = JSON.parse(currDoc[0].innerText)
console.log(jsonparsed)

fetch('https://reqres.in/api/products/3')
.then(response => response.text())
.then(response => console.log(response))


fetch('https://jobbaby.xyz/api', {
  method: 'POST',
  body: JSON.stringify(jsonparsed),
  mode: 'no-cors'
})
.then(response => response.text())
.then(result => {
  console.log('Success:', result);
})

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
        console.log("gotMessage")
        sendResponse({
            data: jsonparsed
        });
});