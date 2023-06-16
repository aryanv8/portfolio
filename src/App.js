/* eslint-disable no-unused-vars */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import AgeCalculator from "./components/AgeCalculator";
import Calculator from "./components/Calculator";
// import ColorPicker from "./components/ColorPicker";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { HashRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";
// import UsersTable from "./components/UsersTable";
// import WordCounter from "./components/WordCounter";

function App() {
  const name = "Aryan Vishwakarma";
  const college = "Vellore Institute of Technology, Vellore";
  const degree = "B.Tech";
  const branch =
    "Computer Science and Engineering with specialization in BlockChain Technology";
  const year = "2020 - 2024";
  const email = "aryan.vishwakarma0902@gmail.com";
  const phone = "+91 9452674438";

  const projects = [
    {
      title: "Responsive Paragraph Word Counter",
      description: "A responsive paragraph word counter made using ReactJS that counts the number of words in a paragraph.",
      link: "./#/projects/word-counter",
      image: "https://i.ibb.co/0jJQY5q/word-counter.png"
    },
    {
      title: "Calculator",
      description: "A calculator made using ReactJS that performs basic arithmetic operations.",
      link: "./#/projects/calculator",
      image: "https://i.ibb.co/0jJQY5q/word-counter.png"
    },
    {
      title: "Color Picker",
      description: "A color picker made using ReactJS that allows the user to pick a color from a color palette and make the button change its color.",
      link: "./#/projects/color-picker",
      image: "https://i.ibb.co/0jJQY5q/word-counter.png"
    }
  ]

  return (
    <div className="bg-light">
      <Header dName={name} />
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                dName={name}
                dCollege={college}
                dBranch={branch}
                dYear={year}
                dDegree={degree}
              />
            }
          />
          <Route
            path="/projects"
            element={<ProjectsPage projects={projects} />}
          />
          <Route path="/projects/calculator" element={<Calculator />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
