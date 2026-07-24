import { useState } from "react";

function PromptInput({ prompt, setPrompt }) {
  const [isListening, setIsListening] = useState(false);

  const startVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsListening(true);

    recognition.start();

    recognition.onresult = (event) => {
      setPrompt(event.results[0][0].transcript);
    };

    recognition.onerror = () => {
      setIsListening(false);
      alert("Couldn't recognize speech.");
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  };

  return (
    <div>
      <h2>Ask a Question</h2>

      <textarea
        rows="5"
        placeholder="Example: Explain this agreement in simple language..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button onClick={startVoiceInput} disabled={isListening}>
        {isListening ? "🔴 Listening..." : "🎤 Voice Input"}
      </button>
    </div>
  );
}

export default PromptInput;