
export class CustomHTMLElement extends HTMLElement {

  constructor(properties, template) {
    super()
    this['properties'] = properties;
    this['template'] = template;
  }

  setProps() {
    for(let name in this['properties']) {
      let property = this['properties'][name]
      let key = this.toSnake(name)
      let attribute = this['attributes'][key] || property
      let value = attribute['value']
      if (property) {
        this[name] = property.type(value)
      }
    }
  }

  connectedCallback() {
    this.setProps()

    let shadow = this.attachShadow({mode: 'open'});

    shadow.innerHTML = this['template']();
  }

  toSnake(val) {
    return val.replace(/([a-z][A-Z])/g, function(g) { return g[0] + '-' + g[1].toLowerCase() })
  }
}
