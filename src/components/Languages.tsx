import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  FormLabel,
  Input,
  Flex,
  IconButton,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useState } from "react";

enum LanguageLevel {
  A1 = "Beginner",
  A2 = "Elementary",
  B1 = "Intermediate",
  B2 = "Upper Intermediate",
  C1 = "Advanced",
  C2 = "Proficiency",
}

interface ILanguageProps {
  languages: {
    text: string;
    level: string;
    id: string;
  }[];
  updateLanguages: (language: {
    text: string;
    level: string;
    id: string;
  }) => void;
}

const Languages = (props: ILanguageProps) => {
  function generateID() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  const [languageLevel, setLanguageLevel] = useState<LanguageLevel>(
    LanguageLevel.A1
  );
  const [language, setLanguage] = useState("");

  return (
    <Box margin="20px 0">
      <FormLabel as="b" fontSize="20px">
        Languages
      </FormLabel>
      <Flex>
        <Input
          marginRight={4}
          placeholder="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        />
        <Tabs fontSize="13px" variant="soft-rounded" colorScheme="green">
          <TabList fontSize="13px">
            {Object.keys(LanguageLevel).map((key) => (
              <Tab
                fontSize={13}
                padding="8px 10px"
                key={key}
                onClick={() =>
                  setLanguageLevel(
                    LanguageLevel[key as keyof typeof LanguageLevel]
                  )
                }
              >
                {key}
              </Tab>
            ))}
          </TabList>
        </Tabs>
        <IconButton
          isDisabled={language === ""}
          colorScheme="teal"
          marginTop={1}
          marginLeft={4}
          aria-label="Call Segun"
          size="sm"
          onClick={() => {
            props.updateLanguages({
              text: language,
              level: languageLevel,
              id: generateID(),
            });
            setLanguage("");
          }}
          icon={<AddIcon />}
        />
      </Flex>
      <Box>
        {props.languages.map((language) => {
          return (
            <Box key={language.id} padding="10px 0 0 5px" textAlign="left">
              {language.text} - {language.level}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Languages;
