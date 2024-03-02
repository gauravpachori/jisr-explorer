import { useState } from "react";

import styles from "./content.module.css";

import { popoverChilds, typesName } from "../utils/constants";
import { FileSvg, FolderSvg } from "../utils/svgs";

import Content from "./content";
import PopOver from "./popover";

const Accordian = ({ elem }) => {
    const [active, setActive] = useState(false); // to maintain the active state to render childs and components
    const [expanded, setExpanded] = useState(false); // to handle popover

    // Handle right click
    const handleRightClick = (e) => {
        e.preventDefault(); // To prevent browser defaults
        setExpanded(!expanded);
    };

    // Handle click -- Expand accordian based on selection
    const handleClick = () => {
        setExpanded(false);
        setActive(!!active ? false : elem?.data ? elem.data : true);
    };

    // Just consoling actions for now -- Can be handled according to switch condition
    const handleActions = (elem) => {
        console.log(elem);
    };

    return (
        <section>
            <PopOver
                RootComp={
                    <div
                        onContextMenu={handleRightClick}
                        onClick={handleClick}
                        className={`${styles.accordian} ${
                            active ? styles.active : ""
                        }`}
                    >
                        {elem?.type === typesName.folder ? (
                            <FolderSvg
                                fill={
                                    active
                                        ? ["#C9E3F7", "#AED5F3"]
                                        : ["#FFC36E", "#FFD782"]
                                }
                            />
                        ) : (
                            <FileSvg
                                fill={
                                    active
                                        ? ["#C9E3F7", "#AED5F3"]
                                        : ["#FFC36E", "#FFD782"]
                                }
                            />
                        )}
                        <div>{elem.name}</div>
                    </div>
                }
                ChildComp={
                    <>
                        {popoverChilds.map((el) => (
                            <div key={el} onClick={() => handleActions(el)}>
                                {el}
                            </div>
                        ))}
                    </>
                }
                expanded={expanded}
                setExpanded={setExpanded}
            />

            {!!(active && active !== true) && <Content currentPath={active} />}
        </section>
    );
};

export default Accordian;
