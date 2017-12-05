import { Component, Prop, PropWillChange } from '@stencil/core';
// import BrandScania from '../../brands/scania/global/component';
// import CorporateHeader from '../components/corporate-header/component';

@Component({
  tag: 'corporate-ui',
  styleUrl: 'component.scss'
})
export class CorporateUi {

  @Prop() brand: string;

  @PropWillChange('brand')
  willChangeHandler() {
    document.body.classList.remove(this.brand)
  }

  tag: string

  render() {
    document.body.classList.add(this.brand)
    this.tag = this.brand + '-ui'
    return (
      <this.tag />
    )
  }
}