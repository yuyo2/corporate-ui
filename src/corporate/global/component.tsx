import { Component, Prop, PropWillChange } from '@stencil/core';

@Component({
  tag: 'corporate-ui',
  styleUrl: 'component.scss'
})
export class CorporateUi {

  @Prop() brand: string;

  tag: string;

  @PropWillChange('brand')
  willChangeHandler() {
    document.body.classList.remove(this.brand)
  }

  render() {
    if (!this.brand) {
      return;
    }

    document.body.classList.add(this.brand)
    this.tag = this.brand.indexOf('{{') < 0 ? this.brand + '-ui' : undefined;
    return (
      <this.tag />
    )
  }
}
