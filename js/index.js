// window.addEventListener('load', function theStateOfTheInterface(){
let theStateOfTheInterface =() => {

let winH = document.documentElement.clientHeight
let winW = document.documentElement.clientWidth
let docH = document.documentElement.scrollHeight
let docW = document.documentElement.scrollWidth
let winY = window.scrollY
let winX = window.scrollX
let maxY = docH - winH
let maxX = docW - winW
let pctY = Math.round(winY / Math.max(maxY, 1) * 100)
let pctX = Math.round(winX / Math.max(maxX, 1) * 100)

let $third = document.querySelector('.full-viewport:nth-child(3)')
let thirdTop = $third.getBoundingClientRect().top


if (thirdTop < winH / 2){
    console.log(`Above Viewport Half`)
} else {
    console.log(`Below viewport half`)
}


document.querySelector('.panel').innerHTML = `
<li>The Window is <strong>${winH}</strong> px tall, <strong>${winW}</strong> px wide </li>
<li>The Document is <strong>${docH}</strong> px tall, <strong>${docW}</strong> px wide </li>
<li>The Window has scrolled <strong>${winY}</strong> px tall, <strong>${winX}</strong> px wide </li>
    <ol>
        <li>That's <strong>${pctY}</strong> % of <strong>${maxY}</strong> vertically </li>
        <li>That's <strong>${pctX}</strong>  % of <strong>${maxX}</strong> horizontally </li>
    </ol>
    <li>The third section is <strong>${$third.offsetTop}</strong> px from the top of the document</li>
    <li>The third section is <strong>${$third.getBoundingClientRect().top}</strong> from the top of the viewport / window</li>
`
}

window.addEventListener('load', theStateOfTheInterface)
window.addEventListener('scroll', theStateOfTheInterface)
window.addEventListener('resize', theStateOfTheInterface)