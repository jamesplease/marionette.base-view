# marionette.base-view

A better View for Marionette.

[![Travis build status](http://img.shields.io/travis/jmeas/marionette.base-view.svg?style=flat)](https://travis-ci.org/jmeas/marionette.base-view)
[![Code Climate](https://codeclimate.com/github/jmeas/marionette.base-view/badges/gpa.svg)](https://codeclimate.com/github/jmeas/marionette.base-view)
[![Test Coverage](https://codeclimate.com/github/jmeas/marionette.base-view/badges/coverage.svg)](https://codeclimate.com/github/jmeas/marionette.base-view)
[![Dependency Status](https://david-dm.org/jmeas/marionette.base-view.svg)](https://david-dm.org/jmeas/marionette.base-view)
[![devDependency Status](https://david-dm.org/jmeas/marionette.base-view/dev-status.svg)](https://david-dm.org/jmeas/marionette.base-view#info=devDependencies)

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
