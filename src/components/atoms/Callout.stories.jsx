import React from "react";

import Callout, { CalloutBody, CalloutActions, CalloutMedia } from "./Callout";
import Button from "components/atoms/Button";

import TimeImage from "draws/Time";

export default {
  title: "Components/Atoms/Callout/",
  component: Callout,
  subcomponents: { CalloutBody, CalloutActions, CalloutMedia },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h6>Faça sua matrícula agora mesmo</h6>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
        laudantium minus, adipisci maxime voluptatum est quos voluptatibus
        consequatur tempore optio repellat at facilis. Maiores consequatur saepe
        cumque nihil ducimus asperiores.
      </p>
      <CalloutActions>
        <Button color="primary">Matrícula</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <TimeImage />
    </CalloutMedia>
  </Callout>
);
