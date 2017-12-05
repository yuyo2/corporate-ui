import { Component, Prop } from '@stencil/core';
import { CorporateHeader } from '../../../../corporate/components/corporate-header/component';
//import { CorporateHeader } from '~/corporate/components/corporate-header/component';

@Component({
  tag: 'scania-header',
  styleUrl: 'component.scss'
})
export class ScaniaHeader extends CorporateHeader {

  @Prop() siteName: string = 'Site name';

  @Prop() items: any[] = [];

  render() {
    return (
      <nav class="navbar navbar-expand-md">
        <a class="navbar-brand" href="#">andreas</a>
      </nav>
    );
  }
}