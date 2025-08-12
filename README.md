# Simple Notifications Engine

This is an example of simple notification engine.

## Setup

1. add `notifications.js` and `notifications.css` to your code and link them to the page standard way
2. initialize engine using `let notifications = new Notifications(setup);` where `setup` is a configuration object which can containg any of following propetries:
    - `units`: valid css units definition [units for following properties, default is _px_]
    - `topoffset`: integer [notifications area top margin, in units as defined above, default is _20_]
    - `areaspacing`: integer [vertical spacing of notifications, in units as defined above, default is _8_]
    - `areawidth`: positive integer [area width, in units as defined above, default is _300_]
    - `displayduration`: positive integer [how long should be notification displayed in miliseconds, default is _1500_]
    - `autohide`: boolean [keep notification displayed or hide it automatically, default is _true_]
3. evoke functionality like `notifications.emit(message)` where `message` is either a string displayed 'as is' or a structured object which can be via `type` property (or _default_ value if not defined) bound to and displayed by (via templating factory) any defined processing template
