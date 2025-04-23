const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const sourceLang = document.getElementById("source-lang");
const targetLang = document.getElementById("target-lang");
const translateBtn = document.getElementById("translate-btn");

translateBtn.onclick = async () => {
  const text = inputText.value.trim();
  if (!text) {
    alert("Please enter text to translate.");
    return;
  }

  outputText.value = "Translating...";

  try {
    // Use a different CORS proxy to bypass browser restrictions
    const apiKey = 'YOUR_GOOGLE_API_KEY';
const apiUrl = 'https://translation.googleapis.com/language/translate/v2';

const response = await fetch(`${apiUrl}?key=${apiKey}`, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    q: text,
    source: sourceLang.value,
    target: targetLang.value,
    format: 'text'
  })
});

    if (!response.ok) throw new Error("API error");

    const data = await response.json();
    outputText.value = data && data.translatedText ? data.translatedText : "Translation failed!";
  } catch (error) {
    outputText.value = "Error: Could not fetch translation. Please try again later.";
    console.error("Translation error:", error);
  }
};
