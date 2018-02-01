import template from './index.pug'
import data from '../../data/data.json'
import './index.scss'

export class Index {
  constructor (node) {
    this.node = node
    this.insertStringToHTML(this.node)
  }

  insertStringToHTML (node) {
    node.innerHTML = template(data)
  }
}

export default Index
