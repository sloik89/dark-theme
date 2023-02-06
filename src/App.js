import React, { useState, useEffect } from "react";
import Article from "./Article";
import data from "./data";
const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
function App() {
  const [theme, setTheme] = useState(getStorageTheme());
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleTheme = () => {
    setTheme((oldTheme) => {
      let newTheme = oldTheme === "light-theme" ? "dark-theme" : "light-theme";
      return newTheme;
    });
  };
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overeacted</h1>
          <button onClick={handleTheme} className="btn">
            toogle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
