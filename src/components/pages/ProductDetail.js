import React from "react";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Button from "components/atoms/Button";
import Footer from "components/organisms/Footer";
import Callout, {
  CalloutBody,
  CalloutActions,
  CalloutMedia,
} from "components/atoms/Callout";

import HeroImage from "assets/hero.jpg";
import TimeImage from "draws/Time";

const PinnedList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const PinnedItem = styled.li`
  display: inline-block;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 16px 16px 0;

  svg {
    margin-right: 8px;
    vertical-align: middle;
  }
`;

const ProductDetail = () => (
  <Section>
    <Hero image={HeroImage}>
      <Heading>
        <h1>Auto Escola</h1>
      </Heading>
    </Hero>
    <Section>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sint
        illum nobis nulla, ipsam reprehenderit odit fuga qui sunt cum porro,
        tenetur hic. Fugiat, ut minus asperiores necessitatibus maiores
        recusandae!
      </p>
      <p>
        Autem fugiat, repellendus beatae magnam, fugit veritatis architecto
        veniam esse, placeat nulla rem. Impedit eveniet porro accusamus aperiam
        inventore, vel voluptates dolores quod ratione suscipit recusandae ipsam
        qui natus dolore.
      </p>
      <p>
        Reiciendis corporis praesentium fugiat vero inventore voluptas, aperiam
        sunt fuga. Magnam placeat possimus ducimus aperiam, quis deserunt
        delectus doloremque dolores quibusdam nam provident tempore, expedita
        tempora praesentium nobis, modi quas?
      </p>

      <h5>Documentos necessários:</h5>
      <PinnedList>
        <PinnedItem>
          <FaIdCard />
          RG
        </PinnedItem>
        <PinnedItem>
          <FaIdCard />
          CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll />
          Certidão de nascimento ou casamento
        </PinnedItem>
        <PinnedItem>
          <FaHome />
          Comprovante de residência
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h6>Faça sua matrícula agora mesmo</h6>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            laudantium minus, adipisci maxime voluptatum est quos voluptatibus
            consequatur tempore optio repellat at facilis. Maiores consequatur
            saepe cumque nihil ducimus asperiores.
          </p>
          <CalloutActions>
            <Button color="primary">Matrícula</Button>
          </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
          <TimeImage />
        </CalloutMedia>
      </Callout>
    </Section>
    <Footer />
  </Section>
);

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {};

export default ProductDetail;
