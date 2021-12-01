import React from "react";
import styled from "styled-components";

import { useScrollToTop } from "hooks/scroll";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";
import Card, { CardMedia, CardMediaDescription } from "components/atoms/Card";
import BreadCrumb from "components/atoms/BreadCrumb";

import HeroImage from "assets/hero.jpg";
import AboutImage from "draws/About";
import InstImage1 from "assets/instructors/inst1.jpg";
import InstImage2 from "assets/instructors/inst2.jpg";
import InstImage3 from "assets/instructors/inst3.jpg";
import InstImage4 from "assets/instructors/inst4.jpg";

const ImageContainer = styled.div`
  svg {
    width: 100%;
    height: auto;
    max-width: 300px;
    fill: ${(props) => props.theme.colors.primary.main};
  }
`;

const instructors = [
  {
    id: 1,
    name: "Thor",
    avatar: InstImage1,
  },
  {
    id: 2,
    name: "Mel",
    avatar: InstImage2,
  },
  {
    id: 3,
    name: "Loki",
    avatar: InstImage3,
  },
  {
    id: 4,
    name: "Rex",
    avatar: InstImage4,
  },
];

const About = () => {
  useScrollToTop();

  return (
    <>
      <Hero image={HeroImage}>
        <Heading>
          <h1>Auto Escola</h1>
        </Heading>
        <BreadCrumb
          items={[{ label: "Início", link: "/" }, { label: "Sobre" }]}
        />
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
              Natus dignissimos nobis facilis nisi iusto consequuntur minima
              quae molestiae tenetur accusantium rem, illum recusandae odit
              fugit nesciunt? Minima saepe nisi vitae quis mollitia laudantium
              pariatur quaerat reiciendis? Earum, nisi?
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              ab architecto aliquam. Quam natus, nulla repudiandae eveniet,
              dicta placeat impedit velit neque, error nisi veniam officia
              perferendis ad reprehenderit saepe.
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
              consectetur sit expedita explicabo molestiae. Cupiditate, harum
              iste id neque illum provident.
            </p>
          </div>
          <div>
            <h4>Visão</h4>
            <p>
              Vero mollitia magni, quisquam quo adipisci doloribus porro aliquam
              veritatis quam tenetur recusandae aspernatur sapiente beatae sunt
              reprehenderit nesciunt odio eius. Est laudantium dicta vel neque,
              ea quaerat officiis voluptatem.
            </p>
          </div>
        </Grid>
      </Section>
      <Section image={HeroImage}>
        <Heading>
          <h2>Conheça nossos professores</h2>
        </Heading>
        <Grid sm={2} md={3} lg={4}>
          {instructors.map((instructor) => (
            <Card key={instructor.id}>
              <CardMedia image={instructor.avatar}>
                <CardMediaDescription>
                  <h5>{instructor.name}</h5>
                </CardMediaDescription>
              </CardMedia>
            </Card>
          ))}
        </Grid>
      </Section>
      <Footer />
    </>
  );
};

About.defaultProps = {};

About.propTypes = {};

export default About;
