function getFirstSelector(selector) {
  const first = document.querySelector(selector)
  return first
}

function nestedTarget() {
  const targetnested = document.getElementById('nested').querySelector('.target')
  return targetnested
}

function increaseRankBy(n) {
  const ranked = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < ranked.length; i++) {
    ranked[i].innerHTML = (i + n).toString()
  }
  return ranked
}

function deepestChild() {
  const child = document.getElementById('grand-node')
  child.querySelector('div')
  return child
}
