import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Topics from "./components/Topics"
import ChatTrial from "./components/Practice"
import Welcome from "./components/Welcome"
import Resources from "./components/Resources"
import "./index.css"
import { Link, useParams } from "react-router-dom"
import SearchResults from "./components/SearchResults"

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>Introduction to Statistics</h1>
        <Link to={"/"}>Home</Link>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/practice" element={<ChatTrial />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/hello/:fName/:lName" element={<Welcome />} />
      </Routes>
    </div>
  )
}
