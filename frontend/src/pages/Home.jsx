import { useState } from "react";

import DocumentUploader from "../components/DocumentUploader";
import PromptInput from "../components/PromptInput";
import Controls from "../components/Controls";
import AnalyzeButton from "../components/AnalyzeButton";
import LoadingSpinner from "../components/LoadingSpinner";
import ResponseCard from "../components/ResponseCard";

import { analyzeDocument } from "../services/api";

function Home() {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState("");

  const [language, setLanguage] = useState("English");
  const [detail, setDetail] = useState("Detailed");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!file) {
      alert("Please upload a document.");
      return;
    }

    if (!prompt.trim()) {
      alert("Please enter a question.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await analyzeDocument({ file, prompt, language, detail });

      // Maps FastAPI response to ResponseCard structure
      setResult({
        documentName: file.name,
        confidenceScore: data.confidence_score ?? 90,
        confidenceLevel: data.confidence_level ?? "HIGH",
        briefSummary: data.summary || data.brief_summary || "Analysis complete.",
        detailedSummary: data.explanation || data.detailed_summary || "",
        keyDetails: [
          { label: "Language", value: language },
          { label: "Detail Level", value: detail },
          { label: "Prompt", value: prompt },
        ],
      });
    } catch (err) {
      console.error("API Call Error:", err);
      setError(err.message || "Failed to connect to backend server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>VACHAN</h1>
        <p>AI-powered multilingual legal & policy document assistant</p>
      </header>

      <main className="main-container">
        <section className="upload-card">
          <DocumentUploader file={file} setFile={setFile} />
        </section>

        <section className="prompt-card">
          <PromptInput prompt={prompt} setPrompt={setPrompt} />
        </section>

        <Controls
          language={language}
          setLanguage={setLanguage}
          detail={detail}
          setDetail={setDetail}
        />

        <AnalyzeButton loading={loading} onAnalyze={handleAnalyze} />

        {error && (
          <div className="error-message" style={{ color: "#ff4d4f", margin: "1rem 0", textAlign: "center" }}>
            {error}
          </div>
        )}

        {loading && <LoadingSpinner />}

        {!loading && <ResponseCard result={result} />}
      </main>
    </div>
  );
}

export default Home;