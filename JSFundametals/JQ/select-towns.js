// 1
function extractText () {
  let allElems = Array.from($('#items li'))
  $('#result').append(allElems.map(x => x.innerHTML).join(', '))
}
// 2
function search () {
  let searchParam = $('#searchText')[0].value
  let towns = Array.from($('#towns li'))
  let matchCounter = 0
  for (let i = 0; i < towns.length; i++) {
    if (towns[i].innerHTML.indexOf(searchParam) > -1) {
      towns[i].setAttribute('style', 'font-weight:bold')
      matchCounter++
    }
  }

  $('#result').append(matchCounter)
}
// 4
function attachEvents () {
  let buttons = $('.button')
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', makeMeSpecial)
  }
  function makeMeSpecial () {
    let selected = $('.selected')
    for (let i = 0; i < selected.length; i++) {
      selected.removeClass('selected')
    }
    this.className += ' selected'
  }
}
// 3!!!! 25/100
function initializeTable () {
  $('#createLink').on('click', createNewCountry)

  function createNewCountry () {
    let countryName = $('#newCountryText')[0].value
    let countryCapitalName = $('#newCapitalText')[0].value

    let tr = document.createElement('TR')
    let countryTh = document.createElement('TH')
    let capitalTh = document.createElement('TH')

    let actionsTh = document.createElement('TH')

    let upA = document.createElement('A')
    let downA = document.createElement('A')
    let deleteA = document.createElement('A')

    upA.setAttribute('href', '#')
    downA.setAttribute('href', '#')
    deleteA.setAttribute('href', '#')
    upA.innerHTML = '[Up]'
    downA.innerHTML = '[Down]'
    deleteA.innerHTML = '[Delete]'

    upA.addEventListener('click', moveUp)
    downA.addEventListener('click', moveDown)
    deleteA.addEventListener('click', deleteion)

    actionsTh.appendChild(upA)
    actionsTh.appendChild(downA)
    actionsTh.appendChild(deleteA)

    countryTh.innerHTML = countryName
    capitalTh.innerHTML = countryCapitalName
    tr.appendChild(countryTh)
    tr.appendChild(capitalTh)
    tr.appendChild(actionsTh)

    document.getElementById('countriesTable').appendChild(tr)
  }

  function moveUp () {
    let currentNode = this.parentNode.parentNode
    let list = $('#countriesTable tr')

    for (let i = 1; i < list.length; i++) {
      if (currentNode == list[i] && i - 1 >= 2) {
        currentNode.parentNode.insertBefore(currentNode, list[i - 1])
      }
    }
  }

  function moveDown () {
    let currentNode = this.parentNode.parentNode
    let list = $('#countriesTable tr')
    for (let i = 1; i < list.length - 1; i++) {
      if (currentNode == list[i]) {
        currentNode.parentNode.insertBefore(list[i + 1], currentNode)
      }
    }
  }

  function deleteion () {
    let currentChild = this.parentNode.parentNode
    currentChild.parentNode.removeChild(currentChild)
  }
}

// 6

function attachEvents () {
  let items = $('#items li')

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', selectOrDeselect)
  }
  function selectOrDeselect () {
    if (this.outerHTML.indexOf('data-selected') > -1) {
      this.removeAttribute('data-selected')
      this.removeAttribute('style', 'background-color:#DDD')
    } else {
      this.setAttribute('data-selected', 'true')
      this.setAttribute('style', 'background-color:#DDD')
    }
  }

  $('#showTownsButton').on('click', function () {
    let towns = []
    let selected = $('#items li')

    for (let i = 0; i < selected.length; i++) {
      if (selected[i].outerHTML.indexOf('data-selected') > -1) {
        towns.push(selected[i].innerHTML)
      }
    }
    if(towns.length!=0){
    document
      .getElementById('selectedTowns')
      .innerHTML=('Selected towns: ' + towns.join(', '))
  }else{
        document
      .getElementById('selectedTowns')
      .innerHTML=""
  }
})
}
