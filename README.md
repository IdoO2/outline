# Tree sorter

We have a broken and unfinished client/server tree sorter app. HALP! :( Please fix it!

## Missing features (do as many as you can):

- **it should render out tree;** The CSS is kinda ready, but we forgot how to use it
- **make items change level;** we should be able to click on something within a node to move it up or down a level. There should be only 2 levels, so if we move something up, it should become a sibling of its parent, and if we move something down, it should become a child of its previous sibling
- **fetch items from the API** reachable at `/api` (see `/server` folder for details, not sure it works though). The server should return a list of Items and you should be able to move them around.
