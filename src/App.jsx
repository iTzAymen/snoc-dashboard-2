import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PosPage from "./pages/PosPage";
import HistoryPage from "./pages/HistoryPage";
import PosDetailsPage from "./pages/PosDetailsPage";
import TransactionDetailsPage from "./pages/TransactionDetailsPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/login" exact element={<LoginPage />} />
          <Route
            path="/"
            exact
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pos"
            exact
            element={
              <ProtectedRoute>
                <PosPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/pos/:id"
            element={
              <ProtectedRoute>
                <PosDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/history"
            exact
            element={
              <ProtectedRoute>
                <HistoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transaction/:id"
            exact
            element={
              <ProtectedRoute>
                <TransactionDetailsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
