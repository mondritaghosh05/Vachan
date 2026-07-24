function AnalyzeButton({ loading, onAnalyze }) {
  return (
    <button
      className="analyze-btn"
      onClick={onAnalyze}
      disabled={loading}
    >
      {loading ? "Analyzing..." : "Analyze Document"}
    </button>
  );
}

export default AnalyzeButton;