import Mn from 'backbone.marionette';

// This is the basic view used throughout Admiralty. It's a LayoutView,
// which means it has all of the functionality of Marionette's ItemView, too.
export default Mn.LayoutView.extend({

  // Update `showChildView` to coerce the region, if it doesn't exist.
  // Also, return the LayoutView instance rather than the Region.
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
    return this.getRegion(regionName).currentView;
  },

  // Given a selector, return the name of the region.
  _generateRegionName(selector) {
    return `r-${selector}`;
  },
});
