function ResponseCard({ result }) {

  if (!result) return null;

  return (
    <section className="upload-card">

      <h2>Analysis Result</h2>

      <h3>{result.documentName}</h3>

      <p>
        <strong>Confidence:</strong>{" "}
        {result.confidenceScore}%
      </p>

      <p>
        <strong>Level:</strong>{" "}
        {result.confidenceLevel}
      </p>

      <br />

      <h3>Summary</h3>

      <p>{result.briefSummary}</p>

      <br />

      <h3>Detailed Explanation</h3>

      <p>{result.detailedSummary}</p>

      <br />

      <h3>Key Details</h3>

      <ul>
        {result.keyDetails.map((item) => (
          <li key={item.label}>
            <strong>{item.label}:</strong> {item.value}
          </li>
        ))}
      </ul>

      <br />

      <button>
        🔊 Read Aloud
      </button>

    </section>
  );
}

export default ResponseCard;