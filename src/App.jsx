// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Listgroup from "./assets/Components/Listgroup";
import { Container } from "react-bootstrap";
import Inputgroup from "./assets/Components/Inputgroup";
function App() {
  return (
    <Container>
      <div>
        <Inputgroup />
        <Listgroup />
      </div>
    </Container>
  );
}

export default App;
