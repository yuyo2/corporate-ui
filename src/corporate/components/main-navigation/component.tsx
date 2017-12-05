import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'main-navigation',
  styleUrl: 'component.scss'
})
export class MainNavigation {

  @Prop({ mutable: true }) items: any[] = [];

  render() {
    // This was added to provide a solution for re defining prop type for props having type string instead of intended type
    // Can be used for example, when manually setting a custom element property in index.html as an array ex: items='[{"name": "global"}]'
    // this.items = typeof this.items === 'object' ? this.items : JSON.parse( new Function('self', 'return self.items')(this) );
    return (
      <nav class="navbar navbar-expand-sm">
        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav mr-auto">
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