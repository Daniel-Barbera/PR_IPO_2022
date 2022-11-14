'use client'; 
import React from "react";
import { Flex } from "reflexbox";

import Title from "../components/Title";
import Shell from "./Shell";
import { ButtonLink } from "../components/Buttons";

const Welcome = () => (
  <Shell>
    <Title value="SIMÓN DICE" />
    <Flex justify="center">
      <ButtonLink href="games/simon/board">Jugar</ButtonLink>
    </Flex>
  </Shell>
);

export default Welcome;
