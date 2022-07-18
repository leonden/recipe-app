import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Category />
      </BrowserRouter>
      <Pages />
    </div>
  );
}

export default App;
