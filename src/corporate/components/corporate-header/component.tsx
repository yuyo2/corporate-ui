import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'corporate-header',
  styleUrl: 'component.scss'
})
export class CorporateHeader {

  @Prop() siteName: string = 'Site name';

  @Prop() items: any[] = [];

  render() {
    // This was added to provide a solution for re defining prop type for props having type string instead of intended type
    // Can be used for example, when manually setting a custom element property in index.html as an array ex: items='[{"name": "global"}]'
    // this.items = typeof this.items === 'object' ? this.items : JSON.parse( new Function('self', 'return self.items')(this) );
    return (
      <nav class="navbar navbar-expand-md">
        <a class="navbar-brand" href="#">{this.siteName}</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <slot name="items"></slot>
            {
              this.items.map(item => {
                return (
                  <li class="nav-item">
                    <a class="nav-link" href="#">{ item.name }</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    );
  }
}