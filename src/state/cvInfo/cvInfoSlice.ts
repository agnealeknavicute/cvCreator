import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface activeEx {
  position: string;
  timePeriod: string;
  company: string;
  positionDescription: string;
}
interface activeEd {
  degree: string;
  timePeriod: string;
  school: string;
}
interface skill {
  text: string;
  id: string;
}
interface language {
  text: string;
  level: string;
  id: string;
}

export interface ICvInfo {
  name: string;
  lastName: string;
  photo: string;
  contacts: {
    address: string;
    phone: number | null;
    email: string;
  };
  experience: activeEx[];
  education: activeEd[];
  description: string;
  skills: skill[];
  languages: language[];
}

const initialState: ICvInfo = {
  name: "",
  lastName: "",
  photo: "",
  contacts: {
    address: "",
    phone: null,
    email: "",
  },
  experience: [],
  education: [],
  description: "",
  skills: [],
  languages: [],
};

const cvInfoSlice = createSlice({
  name: "cvInfo",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    updatePhone: (state, action: PayloadAction<number>) => {
      state.contacts.phone = action.payload;
    },
    updateAddress: (state, action: PayloadAction<string>) => {
      state.contacts.address = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      debugger;
      state.contacts.email = action.payload;
    },
    updateEducation: (state, action: PayloadAction<activeEd>) => {
      state.education.push(action.payload);
    },
    updateExperience: (state, action: PayloadAction<activeEx>) => {
      state.experience.push(action.payload);
    },
    updateSkills: (state, action: PayloadAction<skill>) => {
      state.skills.push(action.payload);
    },
    deleteSkill: (state, action: PayloadAction<string>) => {
      state.skills = state.skills.filter(
        (skill) => skill.id !== action.payload
      );
    },
    updateDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    updateLanguage: (state, action: PayloadAction<language>) => {
      state.languages.push(action.payload);
    },
  },
});

export const {
  updateName,
  updateLastName,
  updateAddress,
  updateEmail,
  updatePhone,
  updateEducation,
  updateExperience,
  updateSkills,
  updateDescription,
  deleteSkill,
  updateLanguage,
} = cvInfoSlice.actions;

export default cvInfoSlice.reducer;
