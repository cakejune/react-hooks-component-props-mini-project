import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header
        title={blogData.name}
        views={6}
        foods={["pineapple", "pizza", "pineapple"]}
      />
      <About text={blogData.about} img={blogData.image} />
      <ArticleList articles={blogData.posts} />
    </div>
  );
}

export default App;
