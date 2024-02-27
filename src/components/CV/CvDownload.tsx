import { Button, Container, Flex } from "@chakra-ui/react";
import MyDocument from "./CV";
import { PDFViewer, usePDF } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useEffect } from "react";

const CvDownload = () => {
  const name = useSelector((state: RootState) => state.cvInfo.name);
  const lastName = useSelector((state: RootState) => state.cvInfo.lastName);
  const contacts = useSelector((state: RootState) => state.cvInfo.contacts);
  const education = useSelector((state: RootState) => state.cvInfo.education);
  const experience = useSelector((state: RootState) => state.cvInfo.experience);
  const skills = useSelector((state: RootState) => state.cvInfo.skills);
  const description = useSelector(
    (state: RootState) => state.cvInfo.description
  );
  const languages = useSelector((state: RootState) => state.cvInfo.languages);
  const [instance, update] = usePDF({
    document: undefined,
  });

  useEffect(() => {
    update(
      <MyDocument
        name={name}
        lastName={lastName}
        contacts={contacts}
        education={education}
        experience={experience}
        skills={skills}
        description={description}
        languages={languages}
      />
    );
  }, [
    name,
    lastName,
    contacts,
    education,
    experience,
    skills,
    description,
    languages,
  ]);

  const { url } = instance;
  return (
    <Container>
      <Flex justifyContent="center">
        {url && (
          <a href={url} download="document.pdf">
            <Button
              isDisabled={
                name === "" ||
                lastName === "" ||
                contacts.address === "" ||
                contacts.email === "" ||
                contacts.phone === null ||
                description === ""
              }
            >
              Get CV
            </Button>
          </a>
        )}
      </Flex>
    </Container>
  );
};

export default CvDownload;
