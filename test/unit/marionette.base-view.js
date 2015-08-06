import _ from 'underscore';
import $ from 'jquery';
import Bb from 'backbone';
Bb.$ = $;
import Mn from 'backbone.marionette';
import BaseView from '../../src/marionette.base-view';

var View;
var baseView;
var ChildView;
var childView;
describe('BaseView', () => {
  beforeEach(() => {
    View = BaseView.extend({
      template: _.template('<div class="place"></div>')
    });
    baseView = new View();
    baseView.render();
    ChildView = Bb.View.extend({
      className: 'child'
    });
    childView = new ChildView();
  });

  it('should extend from Bb.View', () => {
    expect(baseView).to.be.instanceof(Bb.View);
  });

  it('should extend from Mn.LayoutView', () => {
    expect(baseView).to.be.instanceof(Mn.LayoutView);
  });

  describe('showChildView()', () => {
    beforeEach(() => {
      sinon.spy(baseView, 'showChildView');
      sinon.spy(childView, 'render');
      baseView.showChildView('.place', childView);
    });

    it('should return the baseView instance', () => {
      expect(baseView.showChildView).to.have.always.returned(baseView);
    });

    it('should place the childView in that element', () => {
      expect(baseView.$('.place')).to.have.descendants('.child');
    });

    it('should have called render on the child view', () => {
      expect(childView.render).to.have.been.calledOnce;
    });
  });

  describe('getChildView()', () => {
    beforeEach(() => {
      sinon.spy(baseView, 'getChildView');
    });

    describe('when no element is matched', () => {
      beforeEach(() => {
        baseView.getChildView('#sandwiches');
      });

      it('should return undefined', () => {
        expect(baseView.getChildView).to.have.always.returned(undefined);
      });
    });

    describe('when an element is matched, and there is no view', () => {
      beforeEach(() => {
        baseView.getChildView('.child');
      });

      it('should return undefined', () => {
        expect(baseView.getChildView).to.have.always.returned(undefined);
      });
    });

    describe('when an element is matched, and there is a view', () => {
      beforeEach(() => {
        baseView.showChildView('.place', childView);
        baseView.getChildView('.place');
      });

      it('should return that view', () => {
        expect(baseView.getChildView).to.have.always.returned(childView);
      });
    });
  });
});
