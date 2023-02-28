import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import OfferList from "./components/OfferList/OfferList";
import Footer from "./components/Footer/Footer";

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
