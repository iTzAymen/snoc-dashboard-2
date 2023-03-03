import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
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
  useEffect(() => {
    const userTheme = window.localStorage.getItem("theme");
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (userTheme == "undefined") {
      if (systemTheme) {
        document.documentElement.classList.add("dark");
      }
    } else {
      if (userTheme == "true") {
        document.documentElement.classList.add("dark");
      }
    }
    console.log(document.documentElement.classList);
  }, []);
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
