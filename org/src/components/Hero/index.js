import React from "react";

function Hero({ title, description, background, children }) {
  return (
    <div>
      <h1>{title ?? "Missing Title"}</h1>
      <p>{description ?? "No description."}</p>
      {children ?? null}
    </div>
  );
}

export default Hero;