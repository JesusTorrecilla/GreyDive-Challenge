import Form from "./components/Form/Form";
import Results from "./components/Results/Results";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
