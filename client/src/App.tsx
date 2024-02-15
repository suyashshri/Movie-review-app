import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import MovieDetailPage from "./routes/MovieDetailPage";
import { MoviesContextProvider } from "./context/MovieContext";

function App() {
  return (
    <MoviesContextProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/movie" element={<Home />} />
            <Route path="/movie/:id/update" element={<UpdatePage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
          </Routes>
        </Router>
      </div>
    </MoviesContextProvider>
  );
}

export default App;
