import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CvPage from "./components/CvPage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <CvPage />
      </div>
    </ChakraProvider>
  );
}

export default App;
