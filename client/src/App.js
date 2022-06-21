import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Navbar from "./components/Navbar";

// Database
import RecordList from "./components/database/recordList";
import Edit from "./components/database/edit";
import Create from "./components/database/create";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      {/* <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router> */}
      
    </main>
    
  );
}

export default App;
