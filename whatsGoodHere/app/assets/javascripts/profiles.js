
function showDetail (className) {
  var divs = document.getElementsByClassName(className)
  for (var div of divs) {
    if (div.classList.contains('hidden')) {
      div.classList.remove('hidden')
    } else {
      div.classList.add('hidden')
    }
  }
}

window.onload = function () {
  var faremodal = document.getElementById('fare-modal')
  var btn = document.getElementById('fare-info')
  var span = document.getElementsByClassName('modal-close')
  btn.onclick = function () {
    console.log('hi')
    faremodal.style.display = 'block'
  }
  span.onclick = function () {
    faremodal.style.display = 'none'
  }

  window.onclick = function (event) {
    console.log(event.target)
    if (event.target === faremodal) {
      faremodal.style.display = 'none'
    }
  }

  modal = document.getElementById('tips-modal')
  btn = document.getElementById('tips-info')
  span = document.getElementsByClassName('close')
  btn.onclick = function () {
    console.log('hi')
    modal.style.display = 'block'
  }
  span.onclick = function () {
    modal.style.display = 'none'
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  }

  modal = document.getElementById('specs-modal')
  btn = document.getElementById('specs-info')
  span = document.getElementsByClassName('close')
  btn.onclick = function () {
    console.log('hi')
    modal.style.display = 'block'
  }
  span.onclick = function () {
    modal.style.display = 'none'
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none'
    }
  }
}
