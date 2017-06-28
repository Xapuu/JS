// First

function increment (target) {
  let selectedElem = document.querySelector(`${target}`)
  let area = document.createElement('TEXTAREA')

  area.setAttribute('class', 'counter')
  area.setAttribute('disabled', 'true')
  area.value = 0

  let increment = document.createElement('BUTTON')
  let add = document.createElement('BUTTON')

  increment.setAttribute('class', 'btn')
  increment.setAttribute('id', 'incrementBtn')
  increment.innerHTML = 'Increment'
  increment.addEventListener('click', incrementation)

  add.setAttribute('class', 'btn')
  add.setAttribute('id', 'addBtn')
  add.innerHTML = 'add'
  add.addEventListener('click', addElem)

  let list = document.createElement('UL')
  list.setAttribute('class', 'results')

  selectedElem.appendChild(area)
  selectedElem.appendChild(increment)
  selectedElem.appendChild(add)
  selectedElem.appendChild(list)

  function addElem () {
    let targetedElem = this.parentNode.querySelector('.counter')
    console.log(targetedElem.value)

    let newListElem = document.createElement('LI')
    let textNode = document.createTextNode(targetedElem.value)
    newListElem.appendChild(textNode)

    document.querySelector('.results').appendChild(newListElem)
  }
  function incrementation () {
    let targetedElem = this.parentNode.querySelector('.counter')
    targetedElem.value = Number(targetedElem.value) + 1
  }
}

// Second Timer

function timer () {
  let timerIsWorking = false
  let time = 0
  let myInterval

  document.getElementById('start-timer').addEventListener('click', startTicking)
  document.getElementById('stop-timer').addEventListener('click', stoptTicking)

  function startTicking () {
    if (!timerIsWorking) {
      timerIsWorking = true
      myInterval = setInterval(tickAndAppend, 1000)
      function tickAndAppend () {
        time++
        document.getElementById('seconds').innerHTML = ('0' + time % 60).slice(
          -2
        )
        document.getElementById('minutes').innerHTML = ('0' +
          Math.floor(time / 60) % 60).slice(-2)
        document.getElementById('hours').innerHTML = ('0' +
          Math.floor(time / (60 * 60) % 24)).slice(-2)
      }
    }
  }
  function stoptTicking () {
    timerIsWorking = false
    clearInterval(myInterval)
  }
}

// Third Book Generator

function createBook (selector, title, author, isbn) {
  let bookNode = document.createElement('DIV')
  bookNode.setAttribute('id', 'book1')
  bookNode.style = 'border:medium none;'

  let titleNode = document.createElement('P')
  titleNode.setAttribute('class', 'title')
  titleNode.innerHTML = title

  let authorNode = document.createElement('P')
  authorNode.setAttribute('class', 'author')
  authorNode.innerHTML = author

  let isbnNode = document.createElement('P')
  isbnNode.setAttribute('class', 'isbn')
  isbnNode.innerHTML = isbn

  let selectButton = document.createElement('BUTTON')
  selectButton.innerHTML = 'Select'
  selectButton.addEventListener('click', selected)

  let deselectButton = document.createElement('BUTTON')
  deselectButton.innerHTML = 'Deselect'
  deselectButton.addEventListener('click', deselected)

  bookNode.appendChild(titleNode)
  bookNode.appendChild(authorNode)
  bookNode.appendChild(isbnNode)
  bookNode.appendChild(selectButton)
  bookNode.appendChild(deselectButton)
  document.querySelector(`${selector}`).appendChild(bookNode)

  function selected () {
    this.parentNode.style = 'border: 2px solid blue;'
  }

  function deselected () {
    this.parentNode.style = 'border: medium none;'
  }
}

// Fifth

function domSearch () {
  let controls = document.createElement('DIV')
  controls.setAttribute('class','add-controls')
  let controlLabel = document.createElement('LABEL')
  controlLabel.innerHTML='Enter text'
  controls.appendChild(controlLabel)
  let addButton = document.createElement('BUTTON')
  addButton.innerHTML='Add'
  addButton.style='display: inline-block'
  controls.appendChild('addButton')

  document.getElementById('content').appendChild
}
