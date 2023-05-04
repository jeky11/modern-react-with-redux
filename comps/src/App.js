import Button from "./Button";

function App() {
    return (
        <div>
            <div>
                <Button primary rounded outline>Click me!</Button>
            </div>
            <div>
                <Button secondary outline>Button 2</Button>
            </div>
            <div>
                <Button success>Hello</Button>
            </div>
            <div>
                <Button warning outline>Cancel</Button>
            </div>
            <div>
                <Button danger rounded>Oh no!</Button>
            </div>
        </div>
    );
}

export default App;