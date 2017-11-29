
import { CustomHTMLElement } from '../helpers'
import MainNavigation from './navigation'

export default class CorporateFooter extends CustomHTMLElement {

  constructor() {
    super({
      template: function() {
        return `
          <MainNavigation></MainNavigation>
          <h1>Headline</h1>
          <p>Paragraph</p>
          <ul>
            <li>list item 1</li>
            <li>list item 2</li>
          </ul>
        `
      }
    })
  }

}

customElements.define('main-navigation', MainNavigation, {extends: 'header'});
