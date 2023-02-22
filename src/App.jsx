import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PosPage from "./pages/PosPage";
import HistoryPage from "./pages/HistoryPage";
import PosDetailsPage from "./pages/PosDetailsPage";
import TransactionDetailsPage from "./pages/TransactionDetailsPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/pos" exact element={<PosPage />} />
          <Route path="/pos/:id" element={<PosDetailsPage />} />
          <Route path="/history" exact element={<HistoryPage />} />
          <Route
            path="/transaction/:id"
            exact
            element={<TransactionDetailsPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
