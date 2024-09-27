import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import GroupChat from "./components/Topics"
import ChatTrial from "./components/Practice"
import Welcome from "./components/Welcome"
import Resources from "./components/Resources"
import SearchResults from "./components/SearchResults"
import "./index.css"
import { Link, useParams } from "react-router-dom"

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>Hommye</h1>
        <Link to={"/"}>Home</Link>
      </header>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/topics" element={<GroupChat />} />
        <Route path="/practice" element={<ChatTrial />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/hello/:fName/:lName" element={<Welcome />} />
      </Routes>
    </div>
  )
}
