
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme"; 
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="root-layout">
      <Header/>
        <main>
          <Outlet />
        </main>
      
      
      </div>
      </ThemeProvider>
  );
}

export default App;
