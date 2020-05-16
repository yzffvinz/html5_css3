export const resetStyle = () => {
  document.querySelectorAll('.display *').forEach(dom => {
    dom.style = {}
  })
}

export const markSelected = (selectorName) => {
  selectorName = selectorName.replace(',', ',.display ')
  document.querySelectorAll(`.display ${selectorName}`).forEach(dom => {
    dom.style.color = 'red'
    dom.style.backgroundColor = 'lightblue'
  })
}