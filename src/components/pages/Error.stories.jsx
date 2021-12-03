import React from "react";

import Error from "./Error";
import BugImage from "draws/Bug";

export default {
  title: "Components/Pages/Error",
  component: Error,
};

export const usage = () => (
  <Error
    image={<BugImage />}
    title="Página não encontrada"
    description="Ops."
  />
);
