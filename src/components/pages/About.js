import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/hero.jpg";
import AboutImage from "draws/About";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 300px;
    fill: ${(props) => props.theme.colors.primary.main};
  }
`;

const About = () => (
  <>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Auto Escola</h1>
      </Heading>
    </Hero>
    <Section>
      <Grid md={2}>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            ducimus enim, ex porro cum eligendi rerum officiis mollitia,
            dignissimos repudiandae possimus sequi voluptates quasi voluptatum
            rem esse? Sapiente, ea alias!
          </p>
          <p>
            Natus dignissimos nobis facilis nisi iusto consequuntur minima quae
            molestiae tenetur accusantium rem, illum recusandae odit fugit
            nesciunt? Minima saepe nisi vitae quis mollitia laudantium pariatur
            quaerat reiciendis? Earum, nisi?
          </p>
          <p>
            Nemo nulla doloribus asperiores culpa, accusantium, deserunt
            molestias exercitationem autem iure cumque iste nisi! Est mollitia
            vitae debitis nihil? Iusto nostrum harum culpa quibusdam mollitia
            sapiente ex neque accusantium dicta.
          </p>
          <ul>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ab
            architecto aliquam. Quam natus, nulla repudiandae eveniet, dicta
            placeat impedit velit neque, error nisi veniam officia perferendis
            ad reprehenderit saepe.
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </Grid>
    </Section>
    <Section inverse>
      <Grid md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            et sed accusantium iste, voluptatem laboriosam quos dolores, minus
            consectetur sit expedita explicabo molestiae. Cupiditate, harum iste
            id neque illum provident.
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Vero mollitia magni, quisquam quo adipisci doloribus porro aliquam
            veritatis quam tenetur recusandae aspernatur sapiente beatae sunt
            reprehenderit nesciunt odio eius. Est laudantium dicta vel neque, ea
            quaerat officiis voluptatem.
          </p>
        </div>
      </Grid>
    </Section>
    <Section image={HeroImage}>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
