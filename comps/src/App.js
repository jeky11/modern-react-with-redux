import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Sidebar from "./components/Sidebar";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPageV1 from "./pages/CounterPageV1";
import CounterPageV2 from "./pages/CounterPageV2";

function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar/>
            <div className="col-span-5">
                <Route path="/">
                    <DropdownPage/>
                </Route>
                <Route path="/accordion">
                    <AccordionPage/>
                </Route>
                <Route path="/buttons">
                    <ButtonPage/>
                </Route>
                <Route path="/modal">
                    <ModalPage/>
                </Route>
                <Route path="/table">
                    <TablePage/>
                </Route>
                <Route path="/counter-v1">
                    <CounterPageV1 initialCount={10}/>
                </Route>
                <Route path="/counter-v2">
                    <CounterPageV2 initialCount={10}/>
                </Route>
            </div>
        </div>
    );
}

export default App;