# nodrop!

This is a simple extension that watches for file drag events in websites and
prevents them from happening on the body. This stops the annoying behavior of
Chrome of opening the file and leaving the website you were just on.

![Demo gif](https://raw.githubusercontent.com/apexskier/nodrop-extension-chrome/master/demo.gif)

## Caveats

- This will break drag and drop file upload behavior that's based on `ondrag`
  instead of `addEventListener`
- Some pages might have additional drag and drop functionality that breaks.
  If the red overlay shows up when it shouldn't, file a bug.

