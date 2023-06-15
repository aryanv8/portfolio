import "./App.css";
// import AgeCalculator from "./components/AgeCalculator";
// import Calculator from "./components/Calculator";
// import ColorPicker from "./components/ColorPicker";

import Header from "./components/Header";
import HomePage from "./components/HomePage";
// import UsersTable from "./components/UsersTable";
// import WordCounter from "./components/WordCounter";

function App() {
  const name = "Aryan Vishwakarma";
  const college = "Vellore Institute of Technology, Vellore";
  const degree = "B.Tech";
  const branch = "Computer Science and Engineering with specialization in BlockChain Technology";
  const year = "2020 - 2024";
  const email = "aryan.vishwakarma0902@gmail.com";
  const phone = "+91 9452674438";


  return (
    <div className="bg-light">
      <Header dName={name} />
      <HomePage dName={name} dCollege={college} dBranch={branch} dYear={year} dDegree={degree} />
    </div>
  );
}

export default App;
