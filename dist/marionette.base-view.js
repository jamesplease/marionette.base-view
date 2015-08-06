(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('backbone.marionette')) : typeof define === 'function' && define.amd ? define(['backbone.marionette'], factory) : global.BaseView = factory(global.Mn);
})(this, function (Mn) {
  'use strict';

  var BaseView = Mn.LayoutView.extend({

    // Update `showChildView` to create the region, if it doesn't exist.
    // Then, return the LayoutView instance.
    showChildView: function showChildView(selector, view) {
      var regionName = this._generateRegionName(selector);

      if (!this.getRegion(regionName)) {
        this.addRegion(regionName, selector);
      }

      this.getRegion(regionName).show(view);
      return this;
    },

    // Update `getChildView` to also accept a selector as an argument
    getChildView: function getChildView(selector) {
      var regionName = this._generateRegionName(selector);
      var region = this.getRegion(regionName);
      return region ? region.currentView : undefined;
    },

    // Given a selector, return the name of the region.
    _generateRegionName: function _generateRegionName(selector) {
      return 'r-' + selector;
    }
  });

  Mn.BaseView = BaseView;

  var marionette_base_view = BaseView;

  return marionette_base_view;
});
//# sourceMappingURL=marionette.base-view.js.map