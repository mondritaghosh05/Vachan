const API_BASE_URL = "http://localhost:8000";

export const analyzeDocument = async ({ file, prompt, language, detail }) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("user_request", prompt);
  formData.append("language", language);
  formData.append("detail_level", detail);

  const response = await fetch(`${API_BASE_URL}/analyze`, {
    method: "POST",
    body: formData, 
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || "Failed to analyze document.");
  }

  return await response.json();
};