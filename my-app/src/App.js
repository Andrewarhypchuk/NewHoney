import './App.css';
import React from "react";
import Footer from "./Components/FooterComponent/FooterComponent";
import Main from "./Components/MainComponent/MainComponent";
import Header from "./Components/HeaderComponent/HeaderComponent";

function App() {

    return (
        <div  className='App' >
            <Header />
            <main>
               <Main />
            </main>
            <Footer/>
        </div>

    );
}

export default App;