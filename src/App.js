import React from "react";
import Header from "./Components/Header";
import BlogList from "./Components/BlogList";
import Footer from "./Components/Footer";
import data from "./data";

const App = () => {
  
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <BlogList />
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
