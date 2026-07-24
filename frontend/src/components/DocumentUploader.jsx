import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function DocumentUploader({ file, setFile }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, [setFile]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    multiple: false,
  });

  return (
    <div>
      <h2>Upload Document</h2>

      <div {...getRootProps()} className="upload-box">
        <input {...getInputProps()} />

        {isDragActive ? (
          <p>Drop your file here...</p>
        ) : (
          <>
            <p>📄 Drag & Drop a PDF or Image</p>
            <p>or click to browse</p>
          </>
        )}
      </div>

      {file && (
        <p style={{ marginTop: "10px", color: "green" }}>
          Selected: {file.name}
        </p>
      )}
    </div>
  );
}

export default DocumentUploader;