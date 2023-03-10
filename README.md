# Tree sorter

We have a broken and unfinished client/server tree sorter app. HALP! :( Please fix it!

## Missing features:

Do as many of these as you can, in the order presented:

- **it should render our tree;** The CSS is _kinda_ ready (may need some tweaking), but we forgot how to use it
- **make items change level;** We should be able to click on something within an item to move it up or down a level. There should be only 2 levels and an item should always be a child of another item or the root.
- **load/save our items to the database;** See `/server` folder for details. When you click Save the current state is saved to the database, and when you click Load the state is loaded from the database.

## Notes

- If you can put each feature in a separate commit, that would be great
- There are no real relationships between the items, so you they can freely be moved around individually, taking consraints described earlier into account
- Our designer is very angry with us when we do not follow the design, so please check the result against the provided reference image
