import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { FaMicrophone } from "react-icons/fa";

function PromptInput({ prompt, setPrompt }) {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () => {
    resetTranscript();

    SpeechRecognition.startListening({
      continuous: false,
      language: "en-IN",
    });
  };

  if (transcript && transcript !== prompt) {
    setPrompt(transcript);
  }

  if (!browserSupportsSpeechRecognition) {
    return <p>Speech recognition unavailable.</p>;
  }

  return (
    <div className="prompt-input">

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask something about your document..."
      />

      <button
        className="mic-btn"
        onClick={startListening}
      >
        <FaMicrophone />
        {listening ? "Listening..." : "Speak"}
      </button>

    </div>
  );
}

export default PromptInput;