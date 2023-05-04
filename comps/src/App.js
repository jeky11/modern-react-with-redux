import {GoBell, GoCloudDownload, GoDatabase} from "react-icons/go";
import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button primary rounded outline>
                    <GoBell/>
                    Click me!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    <GoCloudDownload/>
                    Button 2
                </Button>
            </div>
            <div>
                <Button success>
                    <GoDatabase/>
                    Hello
                </Button>
            </div>
            <div>
                <Button warning outline>
                    Cancel
                </Button>
            </div>
            <div>
                <Button danger rounded>
                    Oh no!
                </Button>
            </div>
        </div>
    );
}

export default App;