export const resetStyle = () => {
  document.querySelectorAll('.display *').forEach(dom => {
    dom.style = {}
  })
}

export const markSelected = (selectorName) => {
  document.querySelectorAll(`.display ${selectorName}`).forEach(dom => {
    dom.style.color = 'red'
    dom.style.backgroundColor = 'lightblue'
    // dom.style.opacity = dom.style.opacity ? +dom.style.opacity + .2 : .2
  })
}