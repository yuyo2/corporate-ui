import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vehical-map',
  styleUrl: 'component.scss'
})
export class VehicalMap {

  @Prop() cords: any = {};

  render() {
    return (
      <div>
        <strong>Map - cors</strong>
        <span>x: {this.cords.x}, y: {this.cords.y}</span>
      </div>
    );
  }
}
