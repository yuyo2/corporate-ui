
export default class CorporateHeader extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>:host { background: red; }</style>
      <header>
        <img src="" alt="logotype">
      </header>
      `;

    var name = this.nodeName.toLowerCase();
    var root = this['createShadowRoot']();
    var node = document.querySelector(name);
    root.appendChild(node['content']);
  }
  disconnectedCallback() { }
  attributeChangedCallback(attr, oldVal, newVal) {  }

}
