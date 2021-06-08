import { Header, About,Products, Footer } from "./components/index";
import GlobalStyle from "./globalStyles";
export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <About />
      <Products />
      <Footer />
    </div>
  );
}
