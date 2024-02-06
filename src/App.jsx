import { useState } from "react";

import "./App.css";

import Register from "./components/Authentication/Register";

function App() {
  const [user, setUser] = useState(undefined);

  return <Register onAuth={(user) => setUser(user)} />;
}

export default App;