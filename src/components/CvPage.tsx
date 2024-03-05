import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { useDispatch } from "react-redux";
import {
  deleteSkill,
  updateAddress,
  updateDescription,
  updateEducation,
  updateEmail,
  updateExperience,
  updateGitHub,
  updateLanguage,
  updateLastName,
  updateName,
  updatePhone,
  updateProject,
  updateSkills,
} from "../state/cvInfo/cvInfoSlice";
import EducationOrExperience from "./EducationOrExperience";
import PersonalInfo from "./PersonalInfo";
import Skills from "./Skills";
import Summary from "./Summary";
import Languages from "./Languages";
import CvDownload from "./CV/CvDownload";
import { Projects } from "./Projects";

function CvPage() {
  const name = useSelector((state: RootState) => state.cvInfo.name);
  const lastName = useSelector((state: RootState) => state.cvInfo.lastName);
  const contacts = useSelector((state: RootState) => state.cvInfo.contacts);
  const education = useSelector((state: RootState) => state.cvInfo.education);
  const experience = useSelector((state: RootState) => state.cvInfo.experience);
  const skills = useSelector((state: RootState) => state.cvInfo.skills);
  const projects = useSelector((state: RootState) => state.cvInfo.projects);
  const description = useSelector(
    (state: RootState) => state.cvInfo.description
  );
  const languages = useSelector((state: RootState) => state.cvInfo.languages);

  const dispatch = useDispatch();

  return (
    <Container paddingBottom={20}>
      <PersonalInfo
        name={name}
        contacts={contacts}
        lastName={lastName}
        updateName={(name: string) => dispatch(updateName(name))}
        updateLastName={(lastName: string) =>
          dispatch(updateLastName(lastName))
        }
        updateAddress={(address: string) => dispatch(updateAddress(address))}
        updateEmail={(email: string) => dispatch(updateEmail(email))}
        updatePhone={(number: number) => dispatch(updatePhone(number))}
        updateGitHub={(gitHub: string) => dispatch(updateGitHub(gitHub))}
      />
      <Summary
        description={description}
        updateDescription={(newDescription: string) =>
          dispatch(updateDescription(newDescription))
        }
      />
      <Projects
        projects={projects}
        updateProject={(proj: (typeof projects)[0]) =>
          dispatch(updateProject(proj))
        }
      />
      <EducationOrExperience
        title="Education"
        education={education}
        updateEducation={(newEd: (typeof education)[0]) =>
          dispatch(updateEducation(newEd))
        }
      />
      <EducationOrExperience
        title="Experience"
        experience={experience}
        updateExperience={(newEx: (typeof experience)[0]) =>
          dispatch(updateExperience(newEx))
        }
      />
      <Skills
        skills={skills}
        updateSkills={(newSkill: (typeof skills)[0]) =>
          dispatch(updateSkills(newSkill))
        }
        deleteSkill={(id: string) => dispatch(deleteSkill(id))}
      />
      <Languages
        languages={languages}
        updateLanguages={(language: (typeof languages)[0]) =>
          dispatch(updateLanguage(language))
        }
      />
      <CvDownload />
    </Container>
  );
}

export default CvPage;
