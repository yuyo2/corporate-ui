import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'corporate-footer',
  styleUrl: 'component.scss'
})
export class CorporateFooter {

  @Prop({ mutable: true }) items: any[] = [];

  render() {
    return (
      <nav class="navbar navbar-expand-md">
        <a class="navbar-brand ml-auto" href="#">Brand</a>
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