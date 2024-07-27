import "./App.css";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <div className="m-4">
        <Navbar /><Profile /><About /><Skills /><Projects />
      </div>
    </>
  );
}

export default App;
