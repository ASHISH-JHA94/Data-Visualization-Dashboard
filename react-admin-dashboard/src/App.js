import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";


import DataFilter from "./scenes/DataFilter"

import Calendar from "./scenes/calendar"
import Faq from "./scenes/faq";
import { Routes, Route } from "react-router-dom";
import Bar from "./scenes/bar"
import Pie from "./scenes/pie"
import Line from "./scenes/line"
import Geography from "./scenes/geography"


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes basename="/react-admin-dashboard">
              <Route path="/" element={<Dashboard />} />
              <Route path="/react-admin-dashboard/filters" element={<DataFilter/>}/>
              <Route path="/react-admin-dashboard/calendar" element={<Calendar/>}/>
              <Route path="/react-admin-dashboard/faq" element={<Faq/>} />
              <Route path="/react-admin-dashboard/bar" element={<Bar/>}/>
              <Route path="/react-admin-dashboard/pie" element={<Pie/>}/>
              <Route path="/react-admin-dashboard/line" element={<Line/>}/>
              <Route path="/react-admin-dashboard/geography" element={<Geography/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
