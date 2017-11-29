
import { CustomHTMLElement } from '../helpers'

export default class CorporateFooter extends CustomHTMLElement {

  constructor() {
    super(
      {},
      function() {
        return `
          <footer>
            <address>Some address can be added here</address>
          </footer>
          `
      }
    )
  }

}