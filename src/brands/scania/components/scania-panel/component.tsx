import { Component } from '@stencil/core';

@Component({
  tag: 'scania-panel',
  styleUrl: 'component.scss'
})
export class ScaniaPanel {

  render() {
    return (
      <section>
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot name="main"></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </section>
    );
  }
}