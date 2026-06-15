import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";

import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";
import CreateMovie from "../pages/CreateMovie";
import EditMovie from "../pages/EditMovie";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#020817]">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/create" element={<CreateMovie />} />
          <Route path="/edit/:id" element={<EditMovie />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}