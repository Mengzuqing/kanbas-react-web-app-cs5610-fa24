import { Routes , Route, Navigate } from "react-router";
import TOC from "./TOC";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";


export default function Labs() {
    return (
      <div id="wd-lab1">
        <h1> Zuqing Meng</h1>
        <h1> Labs</h1>
          {/* Adding the GitHub repository link */}
      <p>
        <a id="wd-github" href="https://github.com/Mengzuqing/kanbas-react-web-app-cs5610-fa24" target="_blank" rel="noreferrer noopener">
          View my GitHub repository
        </a>
      </p>

        <TOC/>
        <Routes>

          <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
        
        </Routes>
        
 
      </div>
    );
  }
  