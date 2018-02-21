import template from './MainNav.pug'
import data from '../../../data/mainNav.json'
import './MainNav.scss'

export class MainNav {
  constructor (node) {
    this.node = node
    this.elements = {}
    this.insertHTML(this.node)
    this.setContainer()
    this.setEventHamburger()
    this.setEventlist()
    this.currentListButton = null
  }

  insertHTML (node) {
    node.innerHTML = template(data)
  }

  setContainer () {
    this.elements.navBar = this.node.querySelector('.main-menu__nav-bar')
    this.elements.list = this.node.querySelector('.main-menu__list')
    this.elements.listItems = this.elements.list.querySelectorAll('.main-menu__list-item')
    this.elements.itemButtons = this.elements.list.querySelectorAll('.main-menu__list-item-button')
    this.elements.listLinks = this.elements.list.querySelectorAll('.main-menu__list__link')
  }

  setEventHamburger () {
    this.elements.hamburger = this.elements.navBar.querySelector('.main-menu__hamburger')
    this.elements.hamburger.addEventListener('click', () => {
      this.elements.hamburger.classList.toggle('main-menu__hamburger--clicked')
      this.showList()
    })
  }

  showList () {
    this.elements.list.classList.toggle('main-menu__list--activate')
  }

  showItem (index) {
    this.elements.listLinks[index].classList.toggle('main-menu__list__link--activate')
  }

  setEventlist () {
    this.elements.itemButtons.forEach(element => {
      element.addEventListener('click', () => {
        const index = Array.from(this.elements.itemButtons).indexOf(element)
        if (this.currentListButton === null) {
          console.log('esta es la primera vez ')
          this.currentListButton = index
        }
        if (index === this.currentListButton) {
          console.log('esta es al repetir ')
          this.elements.listLinks[this.currentListButton].classList.toggle('main-menu__list__link--activate')
        } else {
          console.log('esta es al ser diferentes ')
          this.elements.listLinks[this.currentListButton].classList.remove('main-menu__list__link--activate')
          this.elements.listLinks[index].classList.add('main-menu__list__link--activate')
          this.currentListButton = index
        }
      })
    })
  }
}

export default MainNav
