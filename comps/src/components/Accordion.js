import {useState} from "react";
import {GoChevronDown, GoChevronLeft} from "react-icons/go";

function Accordion({items}) {
    const [expendedIndex, setExpendedIndex] = useState(0);

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expendedIndex;

        const icon = <span>
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>

        return (
            <div key={item.id}>
                <div onClick={() => setExpendedIndex(index)}>
                    {icon}
                    {item.label}
                </div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        )
    });

    return (
        <div>{renderedItems}</div>
    );
}

export default Accordion;