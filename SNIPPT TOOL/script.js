const form = document.getElementById('snippet-form');
const titleInput = document.getElementById('title');
const codeInput = document.getElementById('code');
const languageSelect = document.getElementById('language');
const snippetsDiv = document.getElementById('snippets');
const searchInput = document.getElementById('search');
const filterSelect = document.getElementById('filter');

let snippets = JSON.parse(localStorage.getItem('snippets')) || [];

function saveSnippets() {
  localStorage.setItem('snippets', JSON.stringify(snippets));
}

function renderSnippets() {
  const searchTerm = searchInput.value.toLowerCase();
  const languageFilter = filterSelect.value;

  snippetsDiv.innerHTML = '';
  snippets
    .filter(snippet => 
      (languageFilter === 'All' || snippet.language === languageFilter) &&
      (snippet.title.toLowerCase().includes(searchTerm) || snippet.code.toLowerCase().includes(searchTerm))
    )
    .forEach((snippet, index) => {
      const snippetEl = document.createElement('div');
      snippetEl.className = 'snippet';

      snippetEl.innerHTML = `
        <div class="snippet-header">
          <strong>${snippet.title} (${snippet.language})</strong>
          <button onclick="deleteSnippet(${index})">Delete</button>
        </div>
        <pre><code>${snippet.code}</code></pre>
      `;
      snippetsDiv.appendChild(snippetEl);
    });
}

function deleteSnippet(index) {
  snippets.splice(index, 1);
  saveSnippets();
  renderSnippets();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const snippet = {
    title: titleInput.value.trim(),
    code: codeInput.value.trim(),
    language: languageSelect.value
  };
  snippets.push(snippet);
  saveSnippets();
  form.reset();
  renderSnippets();
});

searchInput.addEventListener('input', renderSnippets);
filterSelect.addEventListener('change', renderSnippets);

// Initial render
renderSnippets();
