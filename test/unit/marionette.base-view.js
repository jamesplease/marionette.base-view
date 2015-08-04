import Bb from 'backbone';
import $ from 'jquery';
Bb.$ = $;
import Mn from 'backbone.marionette';
import BaseView from '../../src/marionette.base-view';

var baseView;
describe('BaseView', () => {
  beforeEach(() => {
    baseView = new BaseView();
  });

  it('should extend from Bb.View', () => {
    expect(baseView).to.be.instanceof(Bb.View);
  });

  it('should extend from Mn.LayoutView', () => {
    expect(baseView).to.be.instanceof(Mn.LayoutView);
  });
});
