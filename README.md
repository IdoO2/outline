# Tree sorter

We have a broken and unfinished client/server tree sorter app. HALP! :( Please fix it!

## Missing features:

Do as many of these as you can, in the order presented:

- **it should render out tree;** The CSS is kinda ready, but we forgot how to use it
- **make items change level;** we should be able to click on something within an item to move it up or down a level. There should be only 2 levels, so if we move something left, it should become a sibling of its parent, and if we move something right, it should become a child of its previous sibling (if present).
- **fetch items from the API** reachable at `/api` (see `/server` folder for details, not sure it works though). The server should return a list of items and you should be able to move them around.
