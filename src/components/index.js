import template from './index.pug'
import data from '../../data/data.json'
import './index.scss'

export class Index {
  constructor (node) {
    this.node = node
    this.insertNode(this.node)
  }

  insertNode (node) {
    node.innerHTML = template(data)
  }
}

export default Index
