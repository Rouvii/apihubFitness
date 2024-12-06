
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme"; 
import { Outlet, useLocation} from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import fitnessLogo from "./assets/fitnessLogo.webp";

const Background = styled.div`
  background-image: url(${fitnessLogo});
  background-size: 75%;
  background-position: center;
  min-height: 100vh;
`;

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isVisionPage = location.pathname === "/vision";

return (
  <ThemeProvider theme={theme}>
    {isHomePage || isVisionPage?(
      <Background>
        <div className="root-layout">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </Background>
    ) : (
      <div className="root-layout">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    )}
  </ThemeProvider>
);
}

export default App;
