
import './App.css';
import {Provider} from "react-redux";
import reduxStore from "./redux/redux-store";
import ProductsPage from "./pages/productsPage/productsPage";



function App() {
  return (
      <Provider store={reduxStore}>
    <div className="container">
        <ProductsPage />
    </div>
      </Provider>
  );
}

export default App;
