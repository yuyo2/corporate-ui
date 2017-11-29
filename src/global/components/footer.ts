
import { CustomHTMLElement } from '../helpers'

export default class CorporateFooter extends CustomHTMLElement {

  constructor() {
    super({
      template: function() {
        return `
          <address>Some address can be added here</address>
        `
      }
    })
  }

}