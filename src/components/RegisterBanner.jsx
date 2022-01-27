import { Pane, Text, Button } from "evergreen-ui";
import { VICTORI_URL } from "../lib/constants";

function RegisterBanner() {
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={16}
      background="tint2"
      borderRadius={5}
      marginBottom={16}
    >
      <Text fontWeight="bold" fontSize={16}>
        Registrasi vaksin ke Victori
      </Text>
      <a href={VICTORI_URL} target="_blank" rel="noopener noreferrer">
        <Button appearance="primary" intent="success">
          Daftar
        </Button>
      </a>
    </Pane>
  );
}

export default RegisterBanner;
