import React from "react";
import BugImage from "draws/Bug";

import Error from "components/pages/Error";

const error404 = () => (
  <Error
    image={<BugImage />}
    title="Página não encontrada"
    description="Ops."
  />
);

export default error404;
