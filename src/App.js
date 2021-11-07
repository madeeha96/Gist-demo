import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserGists from "./app/containers/userGists";
import GistDetails from "./app/containers/gistDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact={true} element={<UserGists />} />
        <Route path="/:id" element={<GistDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
