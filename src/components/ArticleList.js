import React from "react";
import Article from "./Article";
import blogPosts from "../data/blog";

function ArticleList({articles}) {
    const articleComponents = articles.map(article=> {
        return <p key={article.id}>
            <Article 
            title={article.title}
            date={article.date}
            preview={article.preview}
            minutes={article.minutes<6 ? `☕️Less than 6 minute read` : `☕️☕️More than 6 minutes read.`}
            />
        </p>
        })

  return (
      <main>
       {articleComponents}
      </main>
  );
}

export default ArticleList;
