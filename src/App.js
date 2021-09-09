import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "pages/HomePage/Home";
import Services from "pages/Services/Services";
import Footer from "components/Footer/Footer";
import Product from "pages/Product/Product";
import SignUp from "pages/SignUp/SignUp";


function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/services"  component={Services} />
                <Route path="/products"  component={Product} />
                <Route path="/sign-up"  component={SignUp} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
