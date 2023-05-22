import useCounterV2 from "../hooks/use-counter-v2";
import Button from "../components/Button";

function CounterPageV2({initialCount}) {
    const {count, increment} = useCounterV2(initialCount);

    return (
        <div>
            <h1>Count is {count}</h1>
            <Button onClick={increment}>Increment</Button>
        </div>
    );
}

export default CounterPageV2;