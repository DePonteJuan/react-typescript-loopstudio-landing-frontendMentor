import { Header, About,Products } from "./components/index";
import GlobalStyle from "./globalStyles";
export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <About />
      <Products />
    </div>
  );
}
