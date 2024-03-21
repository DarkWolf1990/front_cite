(()=>{
function loadSVG() {
    const svgDoc = document.getElementById('svgDoc').getSVGDocument()
    const svgTxt = svgDoc.getElementById('svgTxt')
    const svgBtn = svgDoc.getElementById('svgBtn')
    const htmTxt = document.getElementById('htmTxt')
    const htmBtm = document.getElementById('htmBtn')
}
onload= loadSVG
    htmBtn.addEventListener('click', function () {
        svgTxt.lastChild.replaceWith(htmTxt.value)
        htmTxt.value = ''
        svgBtn.addEventListener('click', function () {
            htmTxt.value = svgTxt.lastChild.wholeText
            svgTxt.lastChild.replaceWith('SVG Text')
        })
    })
})()