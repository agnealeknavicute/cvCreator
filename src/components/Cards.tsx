import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface CardsEducationProps {
  education: {
    school: string;
    degree: string;
    timePeriod: string;
  }[];
}
interface CardsExperienceProps {
  experience: {
    company: string;
    position: string;
    timePeriod: string;
  }[];
}

const Cards = (props: CardsEducationProps | CardsExperienceProps) => {
  return (
    <Container padding="0">
      {"education" in props
        ? props.education.map((ed) => {
            return (
              <Box marginTop="15px" marginBottom="15px" key={Math.random()}>
                <Flex>
                  <Text marginRight="5px" as="b">
                    {ed.degree},{" "}
                  </Text>
                  <Text as="i">{ed.timePeriod}</Text>
                </Flex>
                <Flex>
                  <Text as="b">{ed.school}</Text>
                </Flex>
              </Box>
            );
          })
        : props.experience.map((ex) => {
            return (
              <Box key={Math.random()}>
                <Flex>
                  <Text marginRight="5px" as="b">
                    {ex.position}
                  </Text>
                  <Text as="i">{ex.timePeriod}</Text>
                </Flex>

                <Flex>
                  <Text as="b">{ex.company}</Text>
                </Flex>
              </Box>
            );
          })}
    </Container>
  );
};

export default Cards;
