
import MainNavigation from './navigation'

export default class MainContent extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <main>
        <MainNavigation></MainNavigation>
        <h1>Headline</h1>
        <p>Paragraph</p>
        <ul>
          <li>list item 1</li>
          <li>list item 2</li>
        </ul>
      </main>
      `;
  }

}

customElements.define('main-navigation', MainNavigation);
