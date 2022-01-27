import "./App.css";
import constructionLogo from "./construction_logo.svg";
// import NavItem from "./components/Item";
import NavBar from "./components/Navbar.js";

function App() {
    return (
        <div className="App">
            {/* <NavItem /> */}
            <NavBar></NavBar>
            <main>
                <section>
                    {/* <h1>Main Body</h1> */}
                    <div className="display">
                        <img
                            src={constructionLogo}
                            alt="Under Construction Logo"
                        ></img>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
