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
    this.width = {}
    this.setWidth()
    this.setUrlImages(data)
    this.decorativeContainer = this.node.querySelector('.hero__image-container')
    this.setImages()
    this.matchMedia()
  }

  createNode (data, template) {
    const parser = new DOMParser()
    return parser.parseFromString(template(data), 'text/html').body.children[0]
  }

  setDomContainer () {
    document.body.appendChild(this.node)
  }

  setWidth () {
    this.width.large = '(min-width:' + breakpoints.width.large + ')'
    this.width.small = '(min-width:' + breakpoints.width.smallMin + ')'
    this.width.mediumMin = '(min-width:' + breakpoints.width.mediumMin + ')'
    this.width.mediumMax = '(min-width:' + breakpoints.width.mediumMax + ')'
  }

  setUrlImages (data) {
    this.images.small = `url('${data.heroDecorative.images.small.url}')`
    this.images.medium = `url('${data.heroDecorative.images.medium.url}')`
    this.images.large = `url('${data.heroDecorative.images.large.url}')`
  }

  setImages () {
    if (window.innerWidth < breakpoints.width.mediumMin) {
      this.decorativeContainer.style.backgroundImage = this.images.small
    } else if (window.innerWidth >= breakpoints.width.mediumMin && window.innerWidth < breakpoints.width.large) {
      this.decorativeContainer.style.backgroundImage = this.images.medium
    } else {
      this.decorativeContainer.style.backgroundImage = this.images.large
    }
  }

  matchMedia () {
    if (window.matchMedia(this.width.large).matches) {
      this.decorativeContainer.style.backgroundImage = this.images.large
    } else if (window.matchMedia(this.width.mediumMin).matches && window.matchMedia(this.width.mediumMax).matches) {
      this.decorativeContainer.style.backgroundImage = this.images.medium
    } else {
      this.decorativeContainer.style.backgroundImage = this.images.small
    }
  }
}

export default HeroDecorative
