import {
  Box,
  Flex,
  FormLabel,
  IconButton,
  Spacer,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { useState } from "react";
import { Input, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

interface ISkillsProps {
  skills: {
    text: string;
    id: string;
  }[];
  updateSkills: (newSkill: { text: string; id: string }) => void;
  deleteSkill: (id: string) => void;
}

const Skills = (props: ISkillsProps) => {
  const [skill, setSkill] = useState("");

  function generateID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  return (
    <Box margin="20px 0 0">
      <Box>
        <FormLabel as="b" fontSize="20px">
          Skills
        </FormLabel>
        <Flex>
          <IconButton
            isDisabled={skill === ""}
            colorScheme="teal"
            marginTop={1}
            marginRight={2}
            aria-label="Call Segun"
            size="sm"
            onClick={() => {
              props.updateSkills({ text: skill, id: generateID() });
              setSkill("");
            }}
            icon={<AddIcon />}
          />
          <Spacer />

          <Input
            placeholder="Javascript"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          />
        </Flex>
      </Box>
      <Box padding="10px 0 0 35px" textAlign="left">
        {props.skills.map((skill) => {
          return (
            <Tag
              marginRight="10px"
              size="md"
              key={Math.random()}
              borderRadius="full"
              marginBottom="5px"
            >
              <TagLabel>{skill.text}</TagLabel>
              <TagCloseButton
                onClick={() => {
                  props.deleteSkill(skill.id);
                }}
              />
            </Tag>
          );
        })}
      </Box>
    </Box>
  );
};

export default Skills;
