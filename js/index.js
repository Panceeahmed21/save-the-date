

document.body.style.cssText = `height : 0 `


setInterval(() => {

    document.querySelector(".OVERLAY").classList.add("d-none")

    document.body.style.cssText = `height : auto `

}, 2000);





