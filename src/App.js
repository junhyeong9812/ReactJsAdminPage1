import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
//탑바
import Topbar from './pages/main/Topbar';
//사이드바
import Sidebar from './pages/main/Sidebar';
//대시보드
import Dashboard from './pages/dashboard';
import { useState } from 'react';
import User from './pages/user';
// import Invoices from './pages/invoices';
import Contacts from './pages/contacts';
import Bar from './pages/bar';
import Form from './pages/form';
import Line from './pages/line';
import Pie from './pages/pie';
import FAQ from './pages/faq';
import Geography from './pages/geography';
import Invoices from './pages/invoices';
import Calendar from './pages/calendar/calendar';

function App() {
  // useMode 훅을 사용하여 현재 테마와 색상 모드 토글 기능을 가져옴
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    // ColorModeContext.Provider를 사용하여 하위 컴포넌트에서 색상 모드 토글 기능을 사용할 수 있도록 함
    <ColorModeContext.Provider value={colorMode}>
      {/* ThemeProvider를 사용하여 MUI 컴포넌트에 테마를 적용 */}
      <ThemeProvider theme={theme}>
        {/* CssBaseline을 사용하여 기본 스타일을 설정 */}
        <CssBaseline />
        <div className="app">
          {/* 사이드바 */}
          <Sidebar />
          <main className="content">
            {/* 탑바 */}
            <Topbar />

            {/*대시보드 라우터 구현 */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/User" element={<User />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
