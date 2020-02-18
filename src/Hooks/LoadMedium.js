import React, { useState, useEffect } from "react";

function LoadMedium() {
  const [article, setArticle] = useState({
    // className: "columns medium-post",
    // id: "retainable-rss-embed",
    // datarss: "https://medium.com/feed/@steven_creates",
    // datamaxcol: "1",
    // datalayout: "slider",
    // datapoststyle: "external",
    // datareadmore: "Read"
  });

  useEffect(() => {
    setArticle({
      className: "columns medium-post",
      id: "retainable-rss-embed",
      datarss: "https://medium.com/feed/@steven_creates",
      datamaxcol: "1",
      datalayout: "slider",
      datapoststyle: "external",
      datareadmore: "Read"
    });
  }, []);
  return (
    <div
      className={article.className}
      id={article.id}
      data-rss={article.datarss}
      data-maxcols={article.datamaxcol}
      data-layout={article.datalayout}
      data-poststyle={article.datapoststyle}
      data-readmore={article.datareadmore}></div>
  );
}

export default LoadMedium;
