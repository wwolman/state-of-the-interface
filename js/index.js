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
        infoForElement += `<li class="past">${$sec.querySelector('h2').textContent}`
    }  else {
        infoForElement += `<li>${$sec.querySelector('h2').textContent}`
    }
}

// Iterate though each matching element call the checkonesection function for each one
document.querySelectorAll('.full-viewport').forEach(checkOneSection)


document.querySelector('.panel').innerHTML = `
<h2>Page Stats</h2>
<li>The Window is <strong>${winH}</strong> px tall, <strong>${winW}</strong> px wide </li>
<li>The Document is <strong>${docH}</strong> px tall, <strong>${docW}</strong> px wide </li>
<li>The Window has scrolled <strong>${winY}</strong> px tall, <strong>${winX}</strong> px wide </li>
    <ol>
        <li>That's <strong>${pctY}</strong> % of <strong>${maxY}</strong> vertically </li>
        <li>That's <strong>${pctX}</strong>  % of <strong>${maxX}</strong> horizontally </li>
    </ol>
    <li></li>
    <ol> ${infoForElement} </ol>
    <li></li>
   
`
}

window.addEventListener('load', theStateOfTheInterface)
window.addEventListener('scroll', theStateOfTheInterface)
window.addEventListener('resize', theStateOfTheInterface)