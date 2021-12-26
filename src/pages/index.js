import { Pane, Text } from "evergreen-ui";
import useSWR from "swr";
import { SEO, VaccineCard } from "../components";

export default function Home() {
  const { data } = useSWR("/api/collect");

  console.log(data);

  return (
    <>
      <SEO />
      <Pane
        display="flex"
        flexDirection="column"
        margin="auto"
        padding="32px"
        width="750px"
      >
        <Text fontSize="32px" as="h1" marginBottom="32px">
          Mari{" "}
          <Text color="blue400" as="span" fontSize="inherit">
            Vaksin!
          </Text>
        </Text>
        {data.data.map((item, idx) => {
          return <VaccineCard key={idx} item={item} />;
        })}
      </Pane>
    </>
  );
}
