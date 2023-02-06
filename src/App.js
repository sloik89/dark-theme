import React, { useState, useEffect } from "react";
import Article from "./Article";
import data from "./data";
function App() {
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>overeacted</h1>
          <button className="btn">toogle</button>
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
