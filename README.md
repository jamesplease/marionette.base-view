# marionette.base-view

A better View for Marionette.

[![Travis build status](http://img.shields.io/travis/jmeas/marionette.base-view.svg?style=flat)](https://travis-ci.org/jmeas/marionette.base-view)
[![Code Climate](https://codeclimate.com/github/jmeas/marionette.base-view/badges/gpa.svg)](https://codeclimate.com/github/jmeas/marionette.base-view)
[![Test Coverage](https://codeclimate.com/github/jmeas/marionette.base-view/badges/coverage.svg)](https://codeclimate.com/github/jmeas/marionette.base-view)
[![Dependency Status](https://david-dm.org/jmeas/marionette.base-view.svg)](https://david-dm.org/jmeas/marionette.base-view)
[![devDependency Status](https://david-dm.org/jmeas/marionette.base-view/dev-status.svg)](https://david-dm.org/jmeas/marionette.base-view#info=devDependencies)

### Installation

The quickest way to use this library is through npm or Bower.

```sh
bower install marionette.base-view
npm install marionette.base-view
```

### Motivation

I made this library for two reasons:

#### Too many views

Marionette has too many views. In the next version of Marionette, version 3, LayoutView and ItemView will
be merged into the same thing, and it will simply be called `Marionette.View`. This is a good thing. The distinction
between the two is that LayoutViews can have child views, whereas ItemViews can not. This is insufficient to
warrant having two separate constructors, I think.

This library extends from `LayoutView`, so it prepares you for Marionette v3.

#### Regions

I believe that Regions are an unnecessary abstraction within Marionette. By this I mean that Regions are not a thing that
developers should interact with directly. Instead, I think of them as an implementation detail that allows Marionette to
manage child views in a memory-safe way.

In my mind, Regions are analogous to `Backbone.sync`. Sure, it's the method what powers all of the AJAX requests within Backbone,
but most of the time you can (and should) ignore it and just deal with the API provided by Models and Collections. So it goes
with Regions.

This library provides you with some API sugar that allows you to never use regions directly.

### Recommended Usage

There are two basic guidelines for using this library: one for each motive described above.

1. You should use this instead of ItemViews and LayoutViews in all situations. Also, your base CollectionView and CompositeView
prototypes should be updated to use this instead of ItemViews.

2. You should never specify a `regions` hash for your views, nor should you use any method exposed by LayoutView that contains the word
`region`.

### Basic Example

```js
// Extend it like usual
var MyView = BaseView.extend({
  template: myTemplate,

  onShow() {
    // Don't bother with specifying regions. Just use selectors.
    this.showChildView('.navbar-container', new NavBar());

    // Later, you could get the navbar by calling...
    var navbar = this.getChildView('.navbar-container');
  }
});
```

### API

#### `showChildView( selector, view )`

Displays `view` in the element matched by `selector`. Under the hood, a region for this element will be created if it does not exist.

### `getChildView( selector )`

Returns the `view`, if there is one, contained in the element matched by `selector`.

### `empty( selector )`

Empties the underlying region matched by `selector`, if there is one.
