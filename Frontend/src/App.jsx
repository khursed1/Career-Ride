import "./App.css";
import Header from "./components/Custom/Header";
import Landing from "./components/Custom/Landing";

function App() {
  return (
    <>
      <Header />
      {/* Landing page */}
      <Landing />
    </>
  );
}

export default App;


// import "./App.css";
// import Header from "./components/Custom/Header";
// import Landing from "./components/Custom/Landing";
// import ResumePage from "./pages/ResumePage"; // ✅ Adjust path if needed

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/dashboard/resume/:id" element={<ResumePage />} />
//         {/* Add more routes as needed */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


