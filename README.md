# Quiet Tab

**Silence the noise. Keep your focus.**

A lightweight Chrome extension that hides the distracting unread email count from your Gmail browser tab.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Coming%20Soon-yellow)](https://quiet-tab.com)
[![Website](https://img.shields.io/badge/Website-quiet--tab.com-4A90A4)](https://quiet-tab.com)

---

## The Problem

Gmail shows "(4)" in your browser tab when you have unread emails. This constant visual reminder creates a low-level anxiety and pulls your attention away from focused work—even when you're not actively checking email.

## The Solution

Quiet Tab removes the unread count from the tab title. Your emails are still there when you're ready for them. You just won't be constantly reminded.

| Before | After |
|--------|-------|
| `Inbox (4) - david@gmail.com` | `Inbox - david@gmail.com` |

---

## Features

- **Lightweight** — Just ~30 lines of code
- **Zero permissions** — Only runs on Gmail, can't read your emails
- **No tracking** — No analytics, no data collection
- **Free forever** — No subscription, no premium tier
- **Open source** — Inspect the code yourself

---

## Installation

### From Chrome Web Store (Coming Soon)

1. Visit the [Quiet Tab page on Chrome Web Store](https://quiet-tab.com) *(pending approval)*
2. Click "Add to Chrome"
3. Done!

### Manual Installation (Developer Mode)

1. Clone or download this repository
   ```bash
   git clone https://github.com/u00dxk2/quiet-tab.git
   ```

2. Open Chrome and go to `chrome://extensions/`

3. Enable **Developer mode** (toggle in top right)

4. Click **Load unpacked**

5. Select the `quiet-tab` folder (the one containing `manifest.json`)

6. Open Gmail and enjoy the quiet

---

## How It Works

The extension uses a simple content script that:

1. Watches for changes to the page title using a `MutationObserver`
2. Removes any `(number)` pattern using a regex: `/\s*\(\d+\)\s*/g`
3. Updates the title to the cleaned version

That's it. No magic, no complexity. You can read the entire source in [`content.js`](content.js).

---

## Privacy

Quiet Tab is designed with privacy as a core principle:

| What we do | What we DON'T do |
|------------|------------------|
| ✅ Modify the browser tab title on Gmail | ❌ Read your emails |
| ✅ Run only on mail.google.com | ❌ Access your Gmail account |
| | ❌ Require any permissions |
| | ❌ Use analytics or tracking |
| | ❌ Collect any data |
| | ❌ Send data anywhere |

All processing happens locally in your browser. See our full [Privacy Policy](https://quiet-tab.com/privacy.html).

---

## Project Structure

```
quiet-tab/
├── manifest.json      # Chrome extension manifest (v3)
├── content.js         # The extension code (~30 lines)
├── icons/             # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
│   └── icon.svg       # Source SVG
├── website/           # Marketing website (quiet-tab.com)
│   ├── index.html
│   ├── privacy.html
│   └── favicon.svg
├── LICENSE            # MIT License
└── README.md          # You are here
```

---

## Contributing

Contributions are welcome! This is a simple project, but if you have ideas:

1. **Bug reports** — [Open an issue](https://github.com/u00dxk2/quiet-tab/issues)
2. **Feature requests** — [Open an issue](https://github.com/u00dxk2/quiet-tab/issues) to discuss first
3. **Pull requests** — Fork, make changes, submit PR

Please keep the spirit of the project: simple, lightweight, privacy-focused.

---

## License

[MIT License](LICENSE) — Feel free to use, modify, and share.

---

## Support

Having issues? [Open an issue](https://github.com/u00dxk2/quiet-tab/issues) on GitHub.

---

<p align="center">
  Made with ☕ by <a href="https://skylarkcreations.com">Skylark Creations</a> in Colorado
</p>
