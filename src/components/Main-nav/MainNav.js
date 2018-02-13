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

  setEventlist () {
    this.elements.list.addEventListener('click', this.setEventListButton.bind(this))
  }

  setEventListButton (event) {
    const clickElement = event.target
    if (clickElement.classList.contains('main-menu__list-item-button')) {
      const index = Array.from(this.elements.itemButtons).indexOf(clickElement)
      this.showItem(index)
    }
  }

  showItem (index) {
    console.log(this.elements.listLinks[index])
    this.elements.listLinks[index].classList.toggle('main-menu__list__link--activate')
  }
}

export default MainNav
