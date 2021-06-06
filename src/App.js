// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import ArrayToExcelButton from "./ComponentFolder/ArrayToExcel/ArrayToExcelButton"

const App =()=> {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJsonArray = async () => {
    try {
      const response = await fetch('https://jsonfy.com/users');
      let jsonArray = await response.json();
      setUserData(jsonArray);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchJsonArray();
  }, [])

  return (
    <div className="App">
      {loading ?
        <p>Loading</p> :
        <ArrayToExcelButton apiArray={userData} fileName={"UserData.xls"} buttonTitle={"Download User Data"} />
      }
    </div>
  );
}

export default App;
