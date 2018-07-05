
# SPAllinsonJS - Intermediate App

v1.3.4



## Description

This app outlines more SPAllinsonJS features.

Topics include: Splash, Preloading, Offline, Repeat, Repaint, Append, Bind, Rebind, Eval



## See it in Action

[www.spallinsonjs.com/example-apps/intermediate](http://spallinsonjs.com/example-apps/intermediate)



## App Architecture

The architecture is the same as the beginner example app except it adds:
- `components/splash/*`
- `components/user/*`

#### index.html

The only change is to also import:
- `components/splash/splash.css`
- `components/user/user.css`

#### app/settings.js

###### _A_.Settings.splash

SPAllinsonJS allows for a splash screen (aka loading screen, launch screen).

While the splash screen is showing, SPAllinsonJS can preload as many components as you like. Simply add `preload: true` to any registered component.

Note: Preloading only works if the splash screen is enabled.

Preloading works well with HTML5 offline capabilities too, as it's just launch the app, preload all, then use offline forever.

If you look at the splash screen's view (`components/splash/splash.html`), you'll see it's simply an `<img>` tag with `src` and `onload` attributes. Positioning and responsive design are handled by `components/splash/splash.css`.

The current launch sequence / flow is as follows:
- the user launches the app (i.e. visits the "site")
- as little as possible is initially downloaded
- the splash screen is shown and starts to download the image specified in the src attribute (which is usually the app's or company's logo)
- once the image is rendered, `onload="_A_.Splash.loaded()"` fires which triggers SPAllinsonJS to start to preload the rest of the app
- once everything is preloaded, the splash is dismissed and SPAllinsonJS routes to `initialRoute`

So, the logo is shown first, and throughout the duration of the preloading, nice!

`_A_.Settings.splash` has a few settings itself:

- `enabled` takes a boolean

- `view` is the location of the splash screen's view

- `doesFadeOut` allows you to either fade out the splash screen, or quickly remove it

- `showForAtLeastMills` allows you to show the splash screen for longer than it may take to preload your app. `2500` is like saying "show the splash screen for at least 2500 mills"

- `imageSuffixForDevicePixelRatio` allows SPAllinsonJS to use specific splash screen images for different screen resolutions. If you look in the splash component's folder, you'll see two images: `splash.png` and `splash@2x.png`. Due to the app's `imageSuffixForDevicePixelRatio` values in `settings.js`, SPAllinsonJS will use the `splash@2x.png` image if the screen resolution is `1.5`, `2` or `2.25`, otherwise it will use `splash.png`



## Repeat

There are two ways to repeat a component over a dataset:
- `[R:]` from the view
- `_A_.Repeat()` from the controller

#### [R:]

Page one of this app uses more of an MVVM approach.

Data is stored on the model of the `PageOne` component.

The view uses `[R: User, model.users ]` to repeat `User` components over the dataset `model.users`.

Pressing the button calls `_C_.appendUser()` which appends a new user object to our `model.users` array, and then calls `_A_.Repaint(self.me)`.

What `_A_.Repaint(self.me)` does is tell SPAllinsonJS to refresh the view of the component (with "coordinate" `self.me`), without destroying the instance of the component!

So, the view is "repainted", and `[R: User, model.users ]` now displays 3 users.

#### \_A\_.Repeat() and \_A\_.Append()

Page two of this app does the exact same thing, except it uses more of a classic `document.getElementById()` approach.

`_A_.Repeat()` allows you to repeat components into a div of id, clearing the div before hand.

`_A_.Append()` allows you to add additional components to a div of id, without clearing the div before hand.

Using either of these means that your view will need a div of said id.

The view of page two has a container div with id `_C_.usersContainer`.

`_C_` in views actually returns a unique string. So I personally use the naming convention of `_C_.something` to uniquely identify elements.

You can then access the div via `document.getElementById(self.me + '.something')`.

If you look at the `viewDidLoad()` method of page two's controller, you will see it in turn calls `_A_.Repeat()`.

Next look at the `this.appendUser()` method and you'll see it has been changed to in turn call `_A_.Append()`.

Notice they both pass in `self.me + '.usersContainer'` as the div id. That corresponds to `_C_.usersContainer` in the view.

`self.me` and `_C_` are the same thing!



## Bind, Rebind and Eval

The `User` component's view displays the user's information.

If you look at the view (`components/user/user.html`), you'll see `[B: model.name ]` and `[E: _C_.model.age ]` used.

`[B:]` is for bind, while `[E:]` is for eval.

As it is they both "do the same thing".

The difference is that bind displays some value on the component's model (i.e. a public variable on the controller, like `model.something`), while eval evaluates the "expression". The expression in this case is `_C_.model.age` which is the same piece of data: `age` on the controller's `model`.

Bind also wraps the value in a div, so you can call `_A_.Rebind(self.me)` to update all of the bound values once you know the data has changed.

Using the eval route, you could call `_A_.Repaint(self.me)` to update the value once you know the data has changed, though that will repaint the entire view, and not just specific pieces.

SPAllinsonJS provides a bunch of ways of doing things!

Though, I probably would recommend using the MVVM pattern with a one directional data flow like the popular redux pattern.



## SPAllinsonJS Documentation

#### Example Apps

- [Beginner App](https://github.com/SPAllinsonJS/spallinsonjs-example-beginner)
- Intermediate App
- [Advanced App](https://github.com/SPAllinsonJS/spallinsonjs-example-advanced)

#### Docs

All documentation can be found on the official site: [www.spallinsonjs.com](http://www.spallinsonjs.com)



## Copyright

All content &copy; [Chris J. Allinson](http://www.allinson.ca) 1996 - Present. All rights reserved.
