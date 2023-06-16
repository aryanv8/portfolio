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
import UsersTable from "./components/UsersTable";
import WordCounter from "./components/WordCounter";
import ColorPicker from "./components/ColorPicker";
import AgeCalculator from "./components/AgeCalculator";

import CalculatorImage from "./images/calculator.png";
import WordCounterImage from "./images/word-counter.png";
import ColorPickerImage from "./images/color-picker.png";
import UsersTableImage from "./images/users-table.png";
import AgeCalculatorImage from "./images/age-calculator.png";

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
      description:
        "A responsive paragraph word counter made using ReactJS that counts the number of words in a paragraph.",
      link: "./#/projects/word-counter",
      image: WordCounterImage,
    },
    {
      title: "Calculator",
      description:
        "A calculator made using ReactJS that performs basic arithmetic operations.",
      link: "./#/projects/calculator",
      image: CalculatorImage,
    },
    {
      title: "Color Picker",
      description:
        "A color picker made using ReactJS that allows the user to pick a color from a color palette and make the button change its color.",
      link: "./#/projects/color-picker",
      image: ColorPickerImage,
    },
    {
      title: "Users Table from API",
      description:
        "A table made using ReactJS that fetches data from an API and displays it in a table.",
      link: "./#/projects/users-table",
      image: UsersTableImage,
    },
    {
      title: "Age Calculator",
      description:
        "An age calculator made using ReactJS that calculates the age of a person from the date of birth.",
      link: "./#/projects/age-calculator",
      image: AgeCalculatorImage,
    },
  ];

  return (
    <div className="bg-dark" style={{ minHeight: "100vh" }}>
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
          <Route path="/projects/age-calculator" element={<AgeCalculator />} />
          <Route
            path="/projects/color-picker"
            element={
              <ColorPicker colors={["red", "blue", "aqua", "green", "teal", "maroon", "pink", "darkblue", "orange", "skyblue", "yellow", "purple", "lime"]} />
            }
          />
          <Route path="/projects/users-table" element={<UsersTable />} />
          <Route path="/projects/word-counter" element={<WordCounter />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
