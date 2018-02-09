import template from './MainNav.pug'
import data from '../../../data/mainNav.json'
import './MainNav.scss'

export class MainNav {
  constructor (node) {
    this.node = node
    this.element = {}
    this.insertHTML(this.node)
    this.setEventHamburger()
  }

  insertHTML (node) {
    node.innerHTML = template(data)
  }

  setEventHamburger () {
    this.element.navBar = this.node.querySelector('.main-menu__nav-bar')
    this.element.hamburger = this.element.navBar.querySelector('.main-menu__hamburger')
    this.element.hamburger.addEventListener('click', () => {
      this.element.hamburger.classList.toggle('main-menu__hamburger--clicked')
      this.showList()
    })
  }

  showList () {
    this.element.list = this.node.querySelector('.main-menu__list')
    this.element.list.classList.toggle('main-menu__list--activate')
  }
}

export default MainNav
