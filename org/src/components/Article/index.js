import React from "react";

function Article({ title, description, children }) {
  return (
    <div>
      <h2>{title ?? "Missing Title"}</h2>
      <p>{description ?? "No description."}</p>
      {children ?? null}
    </div>
  );
}

export default Article;