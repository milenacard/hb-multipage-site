import template from './MainNav.pug'
import data from '../../../data/mainNav.json'
import './MainNav.scss'

export class MainNav {
  constructor (node) {
    this.node = node
    this.insertStringToHTML(this.node)
  }

  insertStringToHTML (node) {
    node.innerHTML = template(data)
  }
}

export default MainNav
