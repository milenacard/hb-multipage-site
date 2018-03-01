/* global DOMParser */
import template from './HeroDecorative.pug'
import data from '../../../data/data.json'
import './HeroDecorative.scss'
import breakpoints from './../shared/Breakpoints.js'

export class HeroDecorative {
  constructor () {
    this.node = this.createNode(data, template)
    this.setDomContainer()
    this.images = {}
    this.setUrlImages(data)
    this.decorativeContainer = this.node.querySelector('.hero__image-container')
    this.setImages()
  }

  createNode (data, template) {
    const parser = new DOMParser()
    return parser.parseFromString(template(data), 'text/html').body.children[0]
  }

  setDomContainer () {
    document.body.appendChild(this.node)
  }

  setUrlImages (data) {
    this.images.small = `url('${data.heroDecorative.images.small.url}')`
    this.images.medium = `url('${data.heroDecorative.images.medium.url}')`
    this.images.large = `url('${data.heroDecorative.images.large.url}')`
  }

  setImages () {
    if (window.innerWidth < breakpoints.mediumMin) {
      this.decorativeContainer.style.backgroundImage = this.images.small
      this.decorativeContainer.style.backgroundImage = `no repeat`
    } else if (window.innerWidth >= breakpoints.mediumMin && window.innerWidth < breakpoints.large) {
      this.decorativeContainer.style.backgroundImage = this.images.medium
    } else {
      this.decorativeContainer.style.backgroundImage = this.images.large
    }
  }
}

export default HeroDecorative
