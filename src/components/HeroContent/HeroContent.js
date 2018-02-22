/* global DOMParser */
import template from './HeroContent.pug'
import data from '../../../data/data.json'
import './HeroContent.scss'

export class HeroContent {
  constructor () {
    this.node = this.createNode(data, template)
  }

  createNode (data, template) {
    const parser = new DOMParser()
    return parser.parseFromString(template(data), 'text/html').body.children[0]
  }

  setDomContainer () {
    document.body.appendChild(this.node)
  }
}

export default HeroContent
