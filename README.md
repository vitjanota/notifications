# Simple Notifications Engine

This is an example of simple notification engine.

## Setup

1. add `notifications.js` and `notifications.css` to your code and link them to the page standard way
2. initialize engine using `let notifications = new Notifications(setup,templates);` where `setup` is a configuration object which can containg any of following propetries:
    - `units`: valid css units definition [units for following properties, default is _px_]
    - `topOffset`: integer [notifications area top margin, in units as defined above, default is _20_]
    - `areaSpacing`: integer [vertical spacing of notifications, in units as defined above, default is _8_]
    - `areaWidth`: positive integer [area width, in units as defined above, default is _300_]
    - `displayDuration`: positive integer [how long should be notification displayed in miliseconds, default is _1500_]
    - `autoHide`: boolean [keep notification displayed or hide it automatically, default is _true_]

    and `templates` is an object defining custom processing templates as `template-identifier: template code` pairs (about the usage see further).

3. evoke functionality like `notifications.emit(message,template)` where `message` is either a plain string displayed 'as is' or a structured object which can be via `template` attribute (or _default_ value if not defined) bound to and displayed by (via templating factory) any defined processing template. There are four predefined templates (in `notifications.js`)
    - default
    - warning
    - error
    - hint

    which can be extended/redefined during the notifications engine initialization as mentioned above.

    Styling of templates can be defined/altered in `notifications.css` via definitions based on  `div.notificationArea.[template-identifier]` selector.
