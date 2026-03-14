# Paramount Menu Remover

Unofficial Chrome extension that removes the Paramount menu that completely covers half the screen every timne you move the mouse.

## What it does

- Removes elements that use the `skin-sidebar-plugin` class
- Watches the page and removes the overlay again if it reappears
- Only changes user-side UI and user-side HTML in the local browser session
- Does not alter Paramount servers, accounts, or content

## Install

1. Open `chrome://extensions`
2. Turn on Developer mode
3. Click Load unpacked

## Files

- `manifest.json` - extension setup
- `content.js` - removes the targeted menu elements

## Disclaimer

This project is unofficial and is not affiliated with, endorsed by, or associated with Paramount or Paramount+.