"use strict";

const config = window.TRACE_CONFIG || {};
const arxiv = document.getElementById("arxiv-link");
if (arxiv && config.arxivUrl && /^https:\/\/arxiv\.org\/(abs|pdf)\//.test(config.arxivUrl)) {
  const link = document.createElement("a");
  link.id = "arxiv-link";
  link.className = "button secondary";
  link.href = config.arxivUrl;
  link.textContent = "arXiv";
  arxiv.replaceWith(link);
}
if (config.codeUrl && /^https:\/\/github\.com\//.test(config.codeUrl)) {
  document.querySelectorAll("[data-code-link]").forEach(link => { link.href = config.codeUrl; });
}

const copyButton = document.getElementById("copy-citation");
copyButton.addEventListener("click", async () => {
  const code = document.getElementById("bibtex");
  const status = document.getElementById("copy-status");
  try {
    await navigator.clipboard.writeText(code.textContent);
    status.textContent = "BibTeX copied to clipboard.";
  } catch {
    const range = document.createRange();
    range.selectNodeContents(code);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = "Citation selected. Press Ctrl+C or ⌘C to copy.";
  }
});
