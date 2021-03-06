import { Badge, MapMarkerIcon, Pane, Text, TimeIcon } from "evergreen-ui";
import VaccineInfo from "./VaccineInfo";

function VaccineCard({ item, ...props }) {
  const { location, vaccine, dose, start, end, capacity, filled, note } = item;

  const renderFullBadge = () => {
    const cap = Number(capacity);
    const fill = Number(filled);

    const isFull = cap === fill;

    if (isFull) {
      return <Badge color="red">Penuh</Badge>;
    }

    const color = cap - fill > 10 ? "green" : "orange";

    return <Badge color={color} marginLeft={8}>{`${fill}/${cap}`}</Badge>;
  };
  return (
    <Pane
      {...props}
      padding="16px"
      background="tint2"
      border="muted"
      marginBottom={16}
      borderRadius={5}
    >
      <Pane marginBottom={8} width="100%">
        <Text as="h2" fontSize="16px" fontWeight="bold">
          {vaccine}
          <Badge color="green" marginLeft={8}>
            {dose}
          </Badge>
          {renderFullBadge()}
        </Text>
      </Pane>
      <VaccineInfo icon={MapMarkerIcon} description={location} />
      <VaccineInfo icon={TimeIcon} description={`${start} - ${end}`} />
      <Text>{note}</Text>
    </Pane>
  );
}

export default VaccineCard;
