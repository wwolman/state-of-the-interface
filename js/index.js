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

let infoForElement = ''


let checkOneSection = ($sec) => {
    let fromD = $sec.offsetTop
    let fromW = $sec.getBoundingClientRect().top
    if (fromW < winH / 2) {
        infoForElement += `<li>The third section is <strong>above</strong> the window's midpoint</li>`
    }  else {
        infoForElement += `<li>The third section is <strong>below</strong> the window's midpoint</li>`
    }
}

let $third = document.querySelector('.full-viewport:nth-child(3)')
checkOneSection($third)





document.querySelector('.panel').innerHTML = `
<li>The Window is <strong>${winH}</strong> px tall, <strong>${winW}</strong> px wide </li>
<li>The Document is <strong>${docH}</strong> px tall, <strong>${docW}</strong> px wide </li>
<li>The Window has scrolled <strong>${winY}</strong> px tall, <strong>${winX}</strong> px wide </li>
    <ol>
        <li>That's <strong>${pctY}</strong> % of <strong>${maxY}</strong> vertically </li>
        <li>That's <strong>${pctX}</strong>  % of <strong>${maxX}</strong> horizontally </li>
    </ol>
    <li></li>
    <li></li>
    ${infoForElement}
`
}

window.addEventListener('load', theStateOfTheInterface)
window.addEventListener('scroll', theStateOfTheInterface)
window.addEventListener('resize', theStateOfTheInterface)