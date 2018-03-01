/* global DOMParser */
import template from './HeroContent.pug'
import data from '../../../data/data.json'
import './HeroContent.scss'
import breakpoints from './../shared/Breakpoints.js'

export class HeroContent {
  constructor () {
    this.node = this.createNode(data, template)
    this.setDomContainer()
  }

  createNode (data, template) {
    const parser = new DOMParser()
    const ObjectMerge = Object.assign({}, data, breakpoints.width)
    return parser.parseFromString(template(ObjectMerge), 'text/html').body.children[0]
  }

  setDomContainer () {
    document.body.appendChild(this.node)
  }
}

export default HeroContent
