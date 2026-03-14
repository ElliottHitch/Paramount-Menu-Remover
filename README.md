# Paramount Menu Remover

Simple Chrome extension that removes the Paramount menu that completely covers half the screen every timne you move the mouse.

## What it does

- Removes elements that use the `skin-sidebar-plugin` class
- Keeps watching the page and removes the overlay again if it comes back

## Install

1. Open `chrome://extensions`
2. Turn on Developer mode
3. Click Load unpacked


## Files

- `manifest.json` - extension setup
- `content.js` - removes the targeted menu elements
