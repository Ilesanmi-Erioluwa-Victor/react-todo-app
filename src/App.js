import { Container } from "@chakra-ui/react";
import { MainRoutes } from "./Pages/MainRoute";

function App() {
  return (
    <Container minWidth="6xl" bg={"#e4e7e4"} fontFamily="cursive">
      <MainRoutes />
    </Container>
  );
}

export default App;
