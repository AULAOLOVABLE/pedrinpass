import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "./pages/Index";
import "./index.css";

const App = () => (
  <BrowserRouter>
    <Toaster position="top-right" richColors />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<Index />} />
    </Routes>
  </BrowserRouter>
);

export default App;