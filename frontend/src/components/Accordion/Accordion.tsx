import React, {ReactNode, useRef, useState} from "react";
import {ExpandMore, ExpandLess} from "@mui/icons-material/";

import "./accordion.scss";

type AccordionT = {
    title: string;
    state: number;
    setState: React.Dispatch<React.SetStateAction<number>>;
    index: number;
    children: ReactNode;
}
const Accordion: React.FC<AccordionT> = (props) => {
    const accordionContent = useRef(null);
    const [contentHeight, setContentHeight] = useState('0px');

    const toggling = () => {
        if (props.state === props.index) {
            setContentHeight('0px')
            return props.setState(0);
        }
        if (accordionContent.current) {
            const div = accordionContent.current as HTMLDivElement;
            setContentHeight(div.clientHeight + 'px');
        }
        props.setState(props.index);
        setTimeout(() => {
            // setContentHeight('auto')
        }, 300)
    };

    return (
        <div className="accordion">
            <div className="accordion-top" onClick={toggling}>
                <h4 className="middle-title">{props.title}</h4>
                {props.index === props.state ?
                    <ExpandLess /> :
                    <ExpandMore />
                }
            </div>
            <div className={`accordion-body${props.index === props.state ? " active" : " hided"}`} style={{height: contentHeight}}>
                <div className="accordion-children" ref={accordionContent}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;