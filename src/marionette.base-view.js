import Mn from 'backbone.marionette';

var BaseView = Mn.LayoutView.extend({

  // Update `showChildView` to create the region, if it doesn't exist.
  // Then, return the LayoutView instance.
  showChildView(selector, view) {
    var regionName = this._generateRegionName(selector);

    if (!this.getRegion(regionName)) {
      this.addRegion(regionName, selector);
    }

    this.getRegion(regionName).show(view);
    return this;
  },

  // Update `getChildView` to also accept a selector as an argument
  getChildView(selector) {
    var regionName = this._generateRegionName(selector);
    var region = this.getRegion(regionName);
    return region ? region.currentView : undefined;
  },

  // Empties the region with the given selector.
  empty(selector) {
    var regionName = this._generateRegionName(selector);
    var region = this.getRegion(regionName);
    if (region) {
      region.empty();
    }
    return this;
  },
  
  // Given a selector, return the name of the region.
  _generateRegionName(selector) {
    return `r-${selector}`;
  },
});

Mn.BaseView = BaseView;

export default BaseView;
