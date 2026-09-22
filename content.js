// Quiet Tab - https://quiet-tab.com
// Silence the noise. Keep your focus.
// Removes the unread count (e.g., "(4)") from Gmail tab titles

// Matches a parenthesised unread count in any locale Gmail writes it in.
//   \p{Nd}      any decimal digit, so Arabic-Indic (١٢٣) and Devanagari (१२३) count too
//   [.,...]     the digit-grouping separators locales actually use:
//               comma (en-US "1,234"), period (de-DE "1.234"),
//               no-break / narrow no-break / thin / figure space (fr-FR, ru-RU "1 234"),
//               apostrophe and right single quote (de-CH "1'234"),
//               U+066C Arabic thousands separator.
// A separator only counts BETWEEN digits, so "(1,)", "(,234)" and "()" are left alone.
const UNREAD_COUNT = /\s*\(\p{Nd}+(?:[.,    ’'٬]\p{Nd}+)*\)\s*/gu;

function cleanTitle() {
  const title = document.title;
  if (typeof title !== 'string' || title === '') return;

  // Remove any "(number)" pattern from the title
  // Matches: "Inbox (1,234)", "Gmail - Primary (5)", "Posteingang (1.234)", etc.
  const cleanedTitle = title.replace(UNREAD_COUNT, ' ').replace(/\s+/g, ' ').trim();

  if (cleanedTitle !== title) {
    document.title = cleanedTitle;
  }
}

// Run immediately when script loads
cleanTitle();

// Watch for title changes using MutationObserver
// Gmail dynamically updates the title, so we need to catch those changes
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.target.nodeName === 'TITLE') {
      cleanTitle();
    }
  }
});

// Observe the document for title element changes
observer.observe(document.documentElement, {
  subtree: true,
  childList: true,
  characterData: true
});

// Backup interval check - Gmail can be tricky with its updates
setInterval(cleanTitle, 1000);
