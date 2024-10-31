import React, {Suspense} from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

const Home = React.lazy(() => import('./components/Home')); 

const RoomsList = React.lazy(() => import('./components/rooms/index')); 
const RoomsCreate = React.lazy(() => import('./components/rooms/create'));

const App = () => {
  return (
    <Router>
          {/* <Navbar /> */}
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                < NavLink className={({ isActive }) => 'nav-link $(isActive ? "active" : "")'} aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                < NavLink className={({ isActive }) => 'nav-link $(isActive ? "active" : "")'} aria-current="page" to="/rooms">Room List</NavLink>
              </li>
              <li className="nav-item">
                < NavLink className={({ isActive }) => 'nav-link $(isActive ? "active" : "")'} aria-current="page" to="/rooms/create">Create Rooms</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navigation */}
      <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
      {/* Suspense untuk fallback saat loading */}
      <Routes>
        <Route path="/" element={<Home />}/> {/* Routes ke halaman Home */}
        <Route path="/rooms" element={<RoomsList />}/> {/* Routes ke halaman Jenis Sampah List */}
        <Route path="/rooms/create" element={<RoomsCreate />}/> {/* Routes ke halaman Jenis Sampah Create */}
      </Routes>
      </Suspense>
      <div className="mt-2">&copy; 2024 Daffa</div>
      </div>

      {/* Footer */}
    </Router>
  )
}

export default App