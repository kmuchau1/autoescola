import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";

const ImageContainer = styled.div`
  text-align: right;
  svg {
    fill: ${(props) => props.theme.colors.primary.main};
    width: 100%;
    height: auto;
    max-width: 200px;
  }
`;

const ErrorTitle = styled.h1`
  margin-top: 0;
`;

const Error = ({ image, title, description }) => (
  <Section>
    <Grid sm={2}>
      <div>
        <Heading>
          <ErrorTitle>{title}</ErrorTitle>
        </Heading>
        <p>{description}</p>
        <div>
          <Button as={Link} to="/" color="primary">
            Página inicial
          </Button>
        </div>
      </div>
      <div>
        <ImageContainer>{image}</ImageContainer>
      </div>
    </Grid>
  </Section>
);

Error.defaultProps = {
  image: undefined,
  title: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Error;
