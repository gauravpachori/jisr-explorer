import { useEffect, useRef } from "react";

import styles from "./content.module.css";

const PopOver = ({
    RootComp = <></>,
    ChildComp = <></>,
    className = "",
    childClassName = "",
    expanded = false,
    setExpanded,
}) => {
    const popOverRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popOverRef.current && !popOverRef.current.contains(e.target)) {
                setExpanded(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setExpanded]);

    return (
        <div ref={popOverRef} className={`${styles.popover} ${className}`}>
            {RootComp}
            {expanded && (
                <div className={`${styles.popoverChild} ${childClassName}`}>
                    {ChildComp}
                </div>
            )}
        </div>
    );
};

export default PopOver;
