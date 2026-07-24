function Controls({
  language,
  setLanguage,
  detail,
  setDetail,
}) {
  return (
    <div className="controls-card">

      <div>
        <label>Language</label>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Bengali</option>
        </select>
      </div>

      <div>
        <label>Explanation</label>

        <select
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        >
          <option>Detailed</option>
          <option>Brief</option>
        </select>
      </div>

    </div>
  );
}

export default Controls;