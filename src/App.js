import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

const user = {
  name: "Liza",
  city: "New York",
  bio: "I made this!",
  github: "https://github.com/liza",
  linkedin: "https://www.linkedin.com/in/liza/"
};

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default App;
