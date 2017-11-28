
export default class CorporateFooter extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback(){
    this.innerHTML = `
      <footer>
        <address>Some address can be added here</address>
      </footer>
      `;
  }

}
