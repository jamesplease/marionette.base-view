# marionette.base-view

A better View for Marionette.

### Motivation

There are two reasons why I created this library.

#### Too many views

Marionette has too many views. In the next version of Marionette, version 3, LayoutView and ItemView will
be merged into the same thing, and it will just be called `Marionette.View`. This is a good thing. The distinction
between the two is that LayoutViews can have child views, whereas ItemViews can not, which is insufficient to
warrant having two separate Classes, I think.

In the next version, you will no longer need to actively choose which view to use.

By including this library in your application, you get two benefits:

1. You only ever need to use this View, `Marionette.BaseView`, as it extends from LayoutView.
2. CollectionViews and CompositeViews will, by default, use this View when creating children

#### Regions

I've recently come to have the opinion that Regions are an unnecessary abstraction within Marionette. By this I mean
that I don't believe that Regions are a thing that developers should interact with directly. Rather, I think of
them as an implementation detail that the majority of developers should not bother with.

In my mind, Regions are analogous to `Backbone.sync`. Sure, that method what powers all of the AJAX requests within Backbone,
but most of the time you can (and should) just ignore it and just deal with the API provided by Models and Collections. So it goes
with Regions.

This library provides you with some API sugar that allows you to never use regions directly.
