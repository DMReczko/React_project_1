import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import OfferList from "./components/OfferList";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <EmployeeList />
            <OfferList />
            <Footer />
        </div>
    );
}

export default App;
