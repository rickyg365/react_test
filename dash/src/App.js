import "./App.css";
// import NavItem from "./components/Item";
import NavBar from "./components/Navbar.js";

function App() {
    return (
        <div className="App">
            {/* <NavItem /> */}
            <NavBar></NavBar>
            <main>
                <section>
                    <h1>Main Body</h1>
                </section>
            </main>
        </div>
    );
}

export default App;
