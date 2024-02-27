import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  VStack,
} from "@chakra-ui/react";

interface IPersonalInfoProps {
  name: string;
  lastName: string;
  contacts: {
    address: string;
    email: string;
    phone: number | null;
  };
  updateName: (name: string) => void;
  updateLastName: (lastName: string) => void;
  updateAddress: (address: string) => void;
  updateEmail: (email: string) => void;
  updatePhone: (number: number) => void;
}
const PersonalInfo = (props: IPersonalInfoProps) => {
  return (
    <Box margin="20px 0">
      <FormLabel fontSize="20px">Personal information</FormLabel>
      <VStack spacing={4} align="stretch">
        <Box>
          <Input
            placeholder="First Name"
            value={props.name}
            onChange={(event) => {
              props.updateName(event.currentTarget.value);
            }}
            type="text"
          />
        </Box>
        <Box>
          <Input
            placeholder="Last Name"
            value={props.lastName}
            onChange={(event) => {
              props.updateLastName(event.currentTarget.value);
            }}
            type="text"
          />
        </Box>
        <Box>
          <Input
            placeholder="Address"
            value={props.contacts.address}
            onChange={(event) => {
              props.updateAddress(event.currentTarget.value);
            }}
            type="text"
          />
        </Box>
        <Box>
          <Input
            placeholder="Email"
            value={props.contacts.email}
            onChange={(event) => {
              props.updateEmail(event.currentTarget.value);
            }}
            type="text"
          />
        </Box>
        <Box>
          <InputGroup>
            <InputLeftAddon>+371</InputLeftAddon>
            <Input
              type="tel"
              value={props.contacts.phone ? props.contacts.phone : undefined}
              onChange={(event) => {
                props.updatePhone(Number(event.currentTarget.value));
              }}
              placeholder="Phone number"
            />
          </InputGroup>
        </Box>
      </VStack>
    </Box>
  );
};

export default PersonalInfo;
