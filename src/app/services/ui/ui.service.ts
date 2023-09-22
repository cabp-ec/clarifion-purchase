import DBooster from '../../index';
import constants from '../../../static/constants';

export class UiService {
  constructor() {
  }

  /**
   * Close loader with the given progress after the given delay
   *
   * @param progress
   * @param delay
   */
  closeLoader(progress: number = 100, delay: number = 1000) {
    DBooster.store.loader.setProp(constants.VALUE, progress);
    const el = document.querySelector('div.loader-global');
    // @ts-ignore
    el.className = el.className.replace('loader-global', 'loader-global hidden');
    setTimeout(() => DBooster.store.loader.setProp(constants.ON, false), 1000);
  }

  /*setUpSlider(ids: string[], cb: () => void) {
    const carousels = [];

    ids.forEach((id, index) => carousels.push(new bootstrap.Carousel(`#${ id }`)));
    setTimeout(() => cb(), 500);

    // const carousel = new bootstrap.Carousel('#myCarousel')
  }*/

  /**
   * Change the mouse cursor to the given value
   *
   * @param value
   */
  changeCursorTo(value: string) {
    document.body.className = `cursor-${ value }`;
  }
}
