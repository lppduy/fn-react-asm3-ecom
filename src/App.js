import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartPage from './CartPage/CartPage';
import CheckoutPage from './CheckoutPage/CheckoutPage';
import DetailPage from './DetailPage/DetailPage';
import History from './History/History';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import Footer from './Share/Footer/Footer';
import Header from './Share/Header/Header';
import ShopPage from './ShopPage/ShopPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={HomePage}
          />{' '}
          <Route
            path="/detail/:id"
            component={DetailPage}
          />{' '}
          <Route
            path="/cart"
            component={CartPage}
          />{' '}
          <Route
            path="/login"
            component={LoginPage}
          />{' '}
          <Route
            path="/register"
            component={RegisterPage}
          />{' '}
          <Route
            path="/checkout"
            component={CheckoutPage}
          />{' '}
          <Route
            path="/history"
            component={History}
          />{' '}
          <Route
            path="/shop"
            component={ShopPage}
          />
        </Switch>{' '}
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
