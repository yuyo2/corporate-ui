
import { CustomHTMLElement } from '../helpers'

export default class CorporateHeader extends CustomHTMLElement {

  constructor() {

    super({
      properties: {
        siteName: {
          type: String,
          value: 'Title'
        }
      },
      template: () => {
        return this.renderTemplate()
      }
    })

    this.addEventListener('click', evt => {
      this.setAttribute('site-name', 'asdasdasd')
    });
  }

  renderTemplate() {
    return `
      <style>:host { display: block; background: red; }</style>
      <img src="" alt="${this.siteName}">
    `
  }

  static get observedAttributes() { return ['site-name'] }

  attributeChangedCallback(name, oldValue, newValue, sdasd) {
    console.log(this, oldValue, newValue, this['properties'])
    this.innerHTML = this.renderTemplate()
  }

}
