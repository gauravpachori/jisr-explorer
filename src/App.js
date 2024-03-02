import Home from "./components/home";
import FilesProvider from "./store/context";

const App = () => {
    return (
        <FilesProvider>
            <Home />
        </FilesProvider>
    );
};

export default App;
