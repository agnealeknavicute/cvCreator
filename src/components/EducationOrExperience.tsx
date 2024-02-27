import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import "react-datepicker/dist/react-datepicker.css";
import Cards from "./Cards";

interface EducationProps {
  title: string;
  education: {
    school: string;
    degree: string;
    timePeriod: string;
  }[];
  updateEducation: (education: {
    school: string;
    degree: string;
    timePeriod: string;
  }) => void;
}
interface ExperienceProps {
  title: string;
  experience: {
    company: string;
    position: string;
    timePeriod: string;
  }[];
  updateExperience: (experience: {
    company: string;
    position: string;
    timePeriod: string;
    positionDescription: string;
  }) => void;
}

const EducationOrExperience = (props: EducationProps | ExperienceProps) => {
  const [activeForm, setActiveForm] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [schoolOrCompany, setSchoolOrCompany] = useState("");
  const [resultOrPosition, setResOrPos] = useState("");
  const [positionDescription, setPositionDescription] = useState("");
  const [inputError, setInputError] = useState(false);

  return (
    <Box margin="20px 0">
      <FormLabel fontSize="20px">{props.title}</FormLabel>
      {"education" in props ? (
        <Cards education={props.education} />
      ) : (
        <Cards experience={props.experience} />
      )}
      {activeForm ? (
        <FormControl margin="10px 0">
          <Input
            isInvalid={inputError}
            errorBorderColor="red.300"
            marginBottom="10px"
            placeholder={
              "education" in props ? "Riga Technical University" : "Google"
            }
            value={schoolOrCompany}
            onChange={(event) => {
              setSchoolOrCompany(event.currentTarget.value);
            }}
            type="text"
          />
          <Input
            isInvalid={inputError}
            errorBorderColor="red.300"
            marginBottom="10px"
            placeholder={
              "education" in props
                ? "Bachelor of Information Technology"
                : "Android Developer"
            }
            value={resultOrPosition}
            onChange={(event) => {
              setResOrPos(event.currentTarget.value);
            }}
            type="text"
          />
          {"experience" in props && (
            <Textarea
              placeholder="Short description of your position"
              value={positionDescription}
              onChange={(event) => {
                setPositionDescription(event.currentTarget.value);
              }}
            />
          )}

          <Flex>
            <Box>
              Start
              <Input
                placeholder="Start"
                value={startDate.toISOString().split("T")[0]}
                onChange={(event) => {
                  setStartDate(new Date(event.currentTarget.value));
                }}
                type="date"
              />
            </Box>
            <Spacer />
            <Box>
              End
              <Input
                placeholder="End"
                value={endDate.toISOString().split("T")[0]}
                onChange={(event) => {
                  setEndDate(new Date(event.currentTarget.value));
                }}
                type="date"
              />
            </Box>
          </Flex>
        </FormControl>
      ) : (
        ""
      )}
      <Flex align="center">
        <IconButton
          colorScheme="teal"
          aria-label="Call Segun"
          size="sm"
          onClick={() => {
            setInputError(false);
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
              if (schoolOrCompany === "" || resultOrPosition === "") {
                setInputError(true);
                return;
              }
              setActiveForm(!activeForm);
              const end = `${endDate.toLocaleString("en-us", {
                month: "long",
              })} (${endDate.getFullYear()})`;
              const start = `${startDate.toLocaleString("en-us", {
                month: "long",
              })} (${startDate.getFullYear()})`;
              "education" in props
                ? props.updateEducation({
                    school: schoolOrCompany,
                    degree: resultOrPosition,
                    timePeriod: `${start}
                     - ${end}`,
                  })
                : props.updateExperience({
                    company: schoolOrCompany,
                    position: resultOrPosition,
                    timePeriod: `${start}
                    - ${end}`,
                    positionDescription: positionDescription,
                  });
              setSchoolOrCompany("");
              setResOrPos("");
              setPositionDescription("");
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

export default EducationOrExperience;
