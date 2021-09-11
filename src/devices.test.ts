import { expect } from '@esm-bundle/chai';
import {Devices} from './devices';

it('is defined', () => {
  expect(Devices);
});
describe('Vendor', () => {
  it('should greet', () => {
    const shop = new Devices("Ye Olde Shop");
    expect(shop.greet()).equal('Hello, welcome to Ye Olde Shop')
  })
  it('should get devices', async () => {
    let devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);
    expect(devices);
  })
})
