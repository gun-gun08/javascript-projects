const markdownInput = document.getElementById('markdown');
const previewOutput = document.getElementById('preview');

marked.setOptions({
  breaks: true,
});

function updatePreview() {
  const rawMarkdown = markdownInput.value;
  previewOutput.innerHTML = marked.parse(rawMarkdown);
}
updatePreview();
markdownInput.addEventListener('input', updatePreview);
