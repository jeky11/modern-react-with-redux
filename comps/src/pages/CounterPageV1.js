import useCounterV1 from "../hooks/use-counter-v1";
import Button from "../components/Button";

function CounterPageV1({initialCount}) {
    const {count, increment} = useCounterV1(initialCount);

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={increment}>Increment</Button>
        </div>
    );
}

export default CounterPageV1;