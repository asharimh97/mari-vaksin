import { string, node, any, oneOfType } from "prop-types";
import { Pane, Text, Icon } from "evergreen-ui";

function VaccineInfo({ icon, description }) {
  return (
    <Pane display="flex" marginBottom={8}>
      <Icon icon={icon} color="muted" marginRight={8} />
      <Text color="muted">{description}</Text>
    </Pane>
  );
}

VaccineInfo.propTypes = {
  icon: oneOfType([node, any]),
  description: string,
};

export default VaccineInfo;
