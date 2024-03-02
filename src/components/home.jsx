import { useContext } from "react";
import { FilesContext } from "../store/context";

import Content from "./content";

const Home = () => {
    const { currentPath } = useContext(FilesContext);

    return <Content currentPath={currentPath} />;
};

export default Home;
