import React from "react";
import Article from "./Article";
import blogPosts from "../data/blog";

function ArticleList({articles}) {
    const articleComponents = articles.map(article=> {
        return <p key={article.id}><span>Title: {article.title}</span></p>
        })

  return (
      <main>
       {articleComponents}
       <Article />
      </main>
  );
}

export default ArticleList;
