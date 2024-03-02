import { useState } from "react";
import "./App.css";
import Messages from "./components/Messages";
import axios from "axios";
import FileUploadForm from "./components/FileInput";

function App() {
  return (
    <>
      <FileUploadForm />
    </>
  );
}

export default App;
