
export default class MainNavigation extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback(){
    this.innerHTML = `
      <nav>
        <a href="">Home</a>
        <a href="">Page</a>
      </nav>
      `;
  }

}
