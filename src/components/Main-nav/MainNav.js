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
    // this.showItem()
  }

  insertHTML (node) {
    node.innerHTML = template(data)
  }

  setContainer () {
    this.elements.navBar = this.node.querySelector('.main-menu__nav-bar')
    this.elements.list = this.node.querySelector('.main-menu__list')
    this.elements.itemButton = this.elements.list.querySelector('.main-menu__list-item-button')
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

/*   showItem () {
    this.elements.listItem = this.elements.itemButton.querySelector('.main-menu__list-item')
    this.elements.listLink = this.elements.listItem.querySelector('.main-menu__list__link')
    this.elements.itemButton.addEventListener('clic', () => {
      this.elements.listLink.classList.toggle('main-menu__list__link--activate')
    })
  } */
}

export default MainNav
