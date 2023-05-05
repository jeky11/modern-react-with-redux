import {useState} from "react";

function Accordion({items}) {
    const [expendedIndex, setExpendedIndex] = useState(0);

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expendedIndex;

        return (
            <div key={item.id}>
                <div onClick={() => setExpendedIndex(index)}>{item.label}</div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        )
    });

    return (
        <div>{renderedItems}</div>
    );
}

export default Accordion;