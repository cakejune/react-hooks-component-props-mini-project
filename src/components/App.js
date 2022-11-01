import React from "react";
import blogs from "../data/blog";
import Header from "./Header"
import About from "./App"
import ArticleList from "./ArticleList"

function App() {
    return (
    <div className="App">
      <Header 
      title={ blogs.name }
      views={ 6 }
      foods={ ["pineapple","pizza", "pineapple"] }
      />
      <About />
      <ArticleList articles={blogs.posts}/>
      
    </div>
  );
}

export default App;
