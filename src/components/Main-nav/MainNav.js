import template from './MainNav.pug'
import data from '../../../data/data.json'
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

  static get state () {
    return {
      hamburguerClicked: 'main-menu__hamburger--clicked',
      listActivate: 'main-menu__list--activate',
      listLinkActivate: 'main-menu__list__link--activate'
    }
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
      this.elements.hamburger.classList.toggle(MainNav.state.hamburguerClicked)
      this.showList()
    })
  }

  showList () {
    this.elements.list.classList.toggle(MainNav.state.listActivate)
  }

  showItem (index) {
    this.elements.listLinks[index].classList.toggle(MainNav.state.listLinkActivate)
  }

  setEventlist () {
    this.elements.itemButtons.forEach(element => {
      element.addEventListener('click', () => {
        const index = Array.from(this.elements.itemButtons).indexOf(element)
        if (this.currentListButton === null) {
          this.currentListButton = index
        }
        if (index === this.currentListButton) {
          this.elements.listLinks[this.currentListButton].classList.toggle(MainNav.state.listLinkActivate)
        } else {
          this.elements.listLinks[this.currentListButton].classList.remove(MainNav.state.listLinkActivate)
          this.elements.listLinks[index].classList.add(MainNav.state.listLinkActivate)
          this.currentListButton = index
        }
      })
    })
  }
}

export default MainNav
