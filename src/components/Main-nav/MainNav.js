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
    this.setEventListButton()
  }

  insertHTML (node) {
    node.innerHTML = template(data)
  }

  setContainer () {
    this.elements.navBar = this.node.querySelector('.main-menu__nav-bar')
    this.elements.list = this.node.querySelector('.main-menu__list')
    this.elements.listItem = this.elements.list.querySelector('.main-menu__list-item')
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

  setEventListButton () {
    this.elements.itemButtons.forEach(element => {
      element.addEventListener('click', this.showItem)
    })
  }

  showItem () {
    this.elements.listLinks.forEach(element => {
      console.log(element)
      element.addEventListener('click', () => {
        element.classList.toggle('.main-menu__list__link--activate')
      })
    })
  }
}

export default MainNav
