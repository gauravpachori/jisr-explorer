import { useContext } from "react";
import { FilesContext } from "../store/context";

import styles from "./content.module.css";

import Accordian from "./accordian";

const Content = ({ currentPath }) => {
    return (
        <main className={styles.container}>
            {currentPath.map((el, index) => (
                <Accordian key={el?.name + index} elem={el} />
            ))}
        </main>
    );
};

export default Content;
