
import { CustomHTMLElement } from '../helpers'

export default class CorporateHeader extends CustomHTMLElement {

  constructor() {
    super(
      {
        siteName: {
          type: String,
          value: 'Title'
        }
      },
      function() {
        return `
          <style>:host { display: block; background: red; }</style>
          <header>
            <img src="" alt="${this.siteName}">
          </header>
          `
      }
    )
  }

}
