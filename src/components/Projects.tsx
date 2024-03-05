import { AddIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { useId, useState } from "react";

interface ProjectsProps {
  projects: {
    title: string;
    description: string;
    id: string;
  }[];
  updateProject: (project: {
    title: string;
    description: string;
    id: string;
  }) => void;
}

export const Projects = (props: ProjectsProps) => {
  const [activeForm, setActiveForm] = useState(false);
  const [title, setTitle] = useState("");
  const [inputError, setInputError] = useState(false);
  const [description, setDescription] = useState("");

  return (
    <Box margin="20px 0">
      <FormLabel fontSize="20px">Projects</FormLabel>
      <Box textAlign="left">
        {props.projects.map((project) => {
          return (
            <Box key={project.id} margin="10px 0">
              <FormLabel fontSize="16px">Title:</FormLabel>
              <Box>{project.title}</Box>
              <FormLabel fontSize="16px">Description:</FormLabel>
              <Box>{project.description}</Box>
            </Box>
          );
        })}
      </Box>
      {activeForm && (
        <FormControl margin="10px 0">
          <Input
            isInvalid={inputError}
            errorBorderColor="red.300"
            marginBottom="10px"
            placeholder="Title"
            value={title}
            onChange={(event) => {
              setTitle(event.currentTarget.value);
            }}
            type="text"
          />
          <Textarea
            isInvalid={inputError}
            errorBorderColor="red.300"
            marginBottom="10px"
            placeholder="Description"
            value={description}
            onChange={(event) => {
              setDescription(event.currentTarget.value);
            }}
          />
        </FormControl>
      )}
      <Flex align="center">
        <IconButton
          colorScheme="teal"
          aria-label="Call Segun"
          size="sm"
          onClick={() => {
            setActiveForm(!activeForm);
          }}
          icon={activeForm ? <CloseIcon /> : <AddIcon />}
        />
        {activeForm ? (
          <IconButton
            marginLeft="10px"
            colorScheme="teal"
            aria-label="Call Segun"
            size="sm"
            onClick={() => {
              if (title === "" || description === "") {
                setInputError(true);
                return;
              }
              setActiveForm(!activeForm);
              props.updateProject({
                title: title,
                description: description,
                id: new Date().getTime().toString(),
              });
              setTitle("");
              setDescription("");
            }}
            icon={<CheckIcon />}
          />
        ) : (
          ""
        )}
      </Flex>
    </Box>
  );
};
