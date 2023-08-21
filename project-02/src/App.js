import { Navbar } from "./components/Navbar/Navbar";
import { ContactHeader } from "./components/contanctHeader/ContactHeader";
import { Card } from "./components/card/Card";


function App() {
  return (
    <div className="App">
     <Navbar/>
     <ContactHeader/>
     <Card />
    </div>
  );
}

export default App;
