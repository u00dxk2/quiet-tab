// Quiet Tab - https://quiet-tab.com
// Silence the noise. Keep your focus.
// Removes the unread count (e.g., "(4)") from Gmail tab titles

function cleanTitle() {
  const title = document.title;
  // Remove any "(number)" pattern from the title
  // Matches: "Inbox (123)", "Gmail - Primary (5)", etc.
  const cleanedTitle = title.replace(/\s*\(\d+\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
  
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
