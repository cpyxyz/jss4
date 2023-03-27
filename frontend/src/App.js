import { useEffect, useState } from "react";
import "./App.css";
import Create from "./components/Create";
import Employee from "./components/Employee";

function App() {
  const [emp, setEmp] = useState([]);

  async function fetchData() {
    const response = await fetch("http://localhost:8000/emps");
    const data = await response.json();
    if (response.ok) {
      setEmp(data);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Create fetctData={fetchData} />
      {emp.map((e) => {
        return (
          <div>
            <Employee
              ssn={e.ssn}
              name={e.name}
              email={e.email}
              age={e.age}
              fetchData={fetchData}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
