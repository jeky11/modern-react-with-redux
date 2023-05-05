import {GoBell, GoCloudDownload, GoDatabase} from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
    const handleClick = () => {
        console.log("click!");
    };

    return (
        <div>
            <div>
                <Button primary rounded outline className="mb-5" onClick={handleClick}>
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

export default ButtonPage;