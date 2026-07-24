import { FaVolumeUp } from "react-icons/fa";

function ResponseCard({ result }) {
  if (!result) return null;

  const speak = () => {
    if (!window.speechSynthesis) {
      alert("Speech Synthesis not supported.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(
      result.detailedSummary || result.briefSummary
    );

    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="response-card">

      <h2>Analysis Result</h2>

      <h3>{result.documentName}</h3>

      <p><strong>Confidence:</strong> {result.confidenceScore}%</p>

      <p>
        <strong>Level:</strong>{" "}
        <span className={result.confidenceLevel.toLowerCase()}>
          {result.confidenceLevel}
        </span>
      </p>

      <h3>Summary</h3>

      <p>{result.briefSummary}</p>

      <h3>Detailed Explanation</h3>

      <p>{result.detailedSummary}</p>

      <h3>Key Details</h3>

      <ul>
        {result.keyDetails.map((item) => (
          <li key={item.label}>
            <strong>{item.label}:</strong> {item.value}
          </li>
        ))}
      </ul>

      <button className="read-btn" onClick={speak}>
        <FaVolumeUp />
        Read Aloud
      </button>

    </div>
  );
}

export default ResponseCard;