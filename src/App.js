import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Page/Welcome';
import Login from './Page/Login';
import MyPage from './Page/MyPage';
import MakeRolling from './Page/MakeRolling';
import Rolling from './Page/Rolling';
import Memo from './Page/Memo';
import Register from './Page/Register';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* 첫 시작 화면 */}
          <Route path="/Welcome" element={<Welcome />} />
          {/* 로그인 페이지 */}
          <Route path="/Login" element={<Login />} />
          {/* 회원가입 페이지 */}
          <Route path="/Register" element={<Register />} />
          {/* 마이페이지 */}
          <Route path="/MyPage" element={<MyPage />} />
          {/* 롤링페이지 생성하는 페이지 */}
          <Route path="/MakeRolling" element={<MakeRolling />} />
          {/* 롤링페이지 화면 */}
          <Route path="/Rolling" element={<Rolling />} />
          {/* 메모작성페이지 화면 */}
          <Route path="/Memo" element={<Memo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
