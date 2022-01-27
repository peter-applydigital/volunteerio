import { Container } from "@mui/material";
import React from "react";

function Hero({ title, description, background, children }) {
  return (
    <div>
      <img src={background} alt="Volunteer worker lifting food box on truck" width={"100%"} />
      <Container>
      <h1>{title ?? "Missing Title"}</h1>
      <p>{description ?? "No description."}</p>
      {children ?? null}
      </Container>
    </div>
  );
}

export default Hero;