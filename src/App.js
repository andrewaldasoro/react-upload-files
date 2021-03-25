import React, { useState } from "react";
import * as axios from "axios";
import "./style.css";

export default function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const fileExist = !!file;

  const onFileChange = e => {
    setFile(e.target.files[0]);
  };

  const onUploadClick = () => {
    const formData = new FormData();
    formData.append(file.name, file);

    axios.post("http://localhost:3000/upload/file", formData).then(res => {
      setResult(res.data);
    });
  };

  return (
    <React.Fragment>
      <input type="file" accept=".csv" onChange={onFileChange} />
      <button onClick={onUploadClick} disabled={!fileExist}>
        Upload
      </button>
      {result}
    </React.Fragment>
  );
}
