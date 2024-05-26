import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import LastDrawResults from "./components/LastDrawResults";

function App() {
  return (
    <>
      <Header />
      <LastDrawResults />
      <Content />
      <Footer />
    </>
  );
}

export default App;
