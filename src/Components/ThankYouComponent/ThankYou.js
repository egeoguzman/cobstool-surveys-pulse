import { Flex, Heading, Link, useAuthenticator, useTheme } from "@aws-amplify/ui-react";
import { color } from "@mui/system";

export function ThankYou() {
  const { toResetPassword } = useAuthenticator();
  const { tokens } = useTheme();

  return (
    <Flex justifyContent="center" padding={`0 0 ${tokens.space.medium}`}>
      <Heading
  width='30vw'
  level={6} 
>
   Your feedback has been submitted! Thank you!
</Heading>
    </Flex>
  );  
}