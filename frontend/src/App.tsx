
import ActionPage from './page/action-page';
import Main from './page/main';
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route index element={<Main/>}/>
      <Route path="/create" element={<ActionPage/>}/>
    </Routes>
    
  );
}

export default App;
