import { useState } from "react";

import DocumentUploader from "../components/DocumentUploader";
import PromptInput from "../components/PromptInput";
import Controls from "../components/Controls";
import AnalyzeButton from "../components/AnalyzeButton";
import LoadingSpinner from "../components/LoadingSpinner";
import ResponseCard from "../components/ResponseCard";

function Home() {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState("");

  const [language, setLanguage] = useState("English");
  const [detail, setDetail] = useState("Detailed");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

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

    // Temporary mock response
    setTimeout(() => {
      setResult({
        documentName: file.name,
        confidenceScore: 92,
        confidenceLevel: "HIGH",

        briefSummary:
          "This is a temporary frontend response.",

        detailedSummary:
          "Once the backend is connected, this section will display the AI-generated explanation.",

        keyDetails: [
          { label: "Language", value: language },
          { label: "Explanation", value: detail },
          { label: "Prompt", value: prompt },
        ],
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="app">
      <header>
        <h1>VACHAN</h1>
        <p>
          AI-powered multilingual legal & policy document assistant
        </p>
      </header>

      <main className="main-container">

        <section className="upload-card">
          <DocumentUploader
            file={file}
            setFile={setFile}
          />
        </section>

        <section className="prompt-card">
          <PromptInput
            prompt={prompt}
            setPrompt={setPrompt}
          />
        </section>

        <Controls
          language={language}
          setLanguage={setLanguage}
          detail={detail}
          setDetail={setDetail}
        />

        <AnalyzeButton
          loading={loading}
          onAnalyze={handleAnalyze}
        />

        {loading && <LoadingSpinner />}

        <ResponseCard result={result} />

      </main>
    </div>
  );
}

export default Home;