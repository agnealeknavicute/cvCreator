import { Box, FormLabel, Textarea } from "@chakra-ui/react";

interface ISummaryProps {
  description: string;
  updateDescription: (newDescription: string) => void;
}

const Summary = (props: ISummaryProps) => {
  return (
    <Box margin="20px 0">
      <FormLabel as="b" fontSize="20px">
        Summary
      </FormLabel>
      <Textarea
        placeholder="Here is a sample placeholder"
        value={props.description}
        onChange={(e) => {
          props.updateDescription(e.target.value);
        }}
      />
    </Box>
  );
};

export default Summary;
