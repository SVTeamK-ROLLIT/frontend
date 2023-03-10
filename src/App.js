import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
import Welcome from './page/Welcome/Welcome';
import MyPage from './page/MyPage/MyPage';
import MakeRolling from './page/MakeRolling/MakeRolling';
import Rolling from './page/RollingPaper/Rolling';
import Register from './page/Register';
import Memo from './page/Memo/Memo';
import Photo from './page/PhotoModal';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* 첫 시작 화면 */}
          <Route path="/" element={<Welcome />} />
          {/* 회원가입 페이지 */}
          <Route path="/Register" element={<Register />} />
          {/* 마이페이지 */}
          <Route path="/MyPage" element={<MyPage />} />
          {/* 롤링페이지 생성하는 페이지 */}
          <Route path="/MakeRolling" element={<MakeRolling />} />
          {/* 롤링페이지 화면 */}
          <Route path="/Rolling/:paperId" element={<Rolling />} />
          {/* 메모작성페이지 화면 */}
          <Route path="/Memo" element={<Memo />} />
          <Route path="/photo" element={<Photo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
