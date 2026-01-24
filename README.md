# Quiet Tab

**Silence the noise. Keep your focus.**

A tiny Chrome extension that hides the distracting unread email count from your Gmail browser tab.

🌐 **Website:** [quiet-tab.com](https://quiet-tab.com)

## The Problem

Gmail shows "(4)" in your browser tab when you have unread emails. This constant visual reminder creates a low-level anxiety and pulls your attention away from focused work—even when you're not actively checking email.

## The Solution

Quiet Tab removes the unread count from the tab title. Your emails are still there when you're ready for them. You just won't be constantly reminded.

**Before:** `Inbox (4) - david@gmail.com`  
**After:** `Inbox - david@gmail.com`

## Installation

### From Chrome Web Store (Coming Soon)
1. Visit the [Quiet Tab page on Chrome Web Store](#)
2. Click "Add to Chrome"
3. Done!

### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Generate icons: Open `icons/generate-icons.html` in a browser and download the 3 PNG files
3. Go to `chrome://extensions/`
4. Enable "Developer mode" (top right)
5. Click "Load unpacked"
6. Select the `quiet-tab` folder
7. Open Gmail and enjoy the quiet

## Features

- ✅ **Lightweight** — Just ~30 lines of code
- ✅ **Zero permissions** — Only runs on Gmail, can't read your emails
- ✅ **No tracking** — No analytics, no data collection
- ✅ **Free forever** — No subscription, no premium tier
- ✅ **Open source** — Inspect the code yourself

## How It Works

The extension uses a content script that:
1. Watches for changes to the page title
2. Removes any `(number)` pattern using a simple regex
3. Updates the title to the cleaned version

That's it. No magic, no complexity.

## Privacy

Quiet Tab:
- Does NOT read your emails
- Does NOT require any permissions
- Does NOT send data anywhere
- Does NOT track usage
- ONLY modifies the browser tab title on Gmail pages

## Support

Having issues? [Open an issue](https://github.com/u00dxk2/quiet-tab/issues) on GitHub.

## License

MIT License - Feel free to use, modify, and share.

---

Made with ☕ by [Skylark Creations](https://skylarkcreations.com) in Colorado.
