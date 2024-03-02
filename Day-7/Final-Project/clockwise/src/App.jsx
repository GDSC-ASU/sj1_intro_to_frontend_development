import "./App.css";
import { useState, useEffect } from "react";

// assets
import bgImage from "./assets/images/batman.jpg";
import reloadImg from "./assets/icons/img-icon.png";

// pages
import NotAuthCard from "./pages/NotAuthCard/NotAuthCard";
import AuthCard from "./pages/AuthCard/AuthCard";

// componenets
import Quote from "./components/Quote/Quote";

// utils
import { getRandomeImage } from "./utils/helpers";

const App = () => {
    const [name, setName] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const [imageSrc, setImageSrc] = useState(bgImage);
    const [isLaoding, setIsLoading] = useState("loaded");

    const handleNewName = (n) => {
        setName(n);
        switchAuth();
    };

    const switchAuth = () => {
        setIsAuth(!isAuth);
    };

    const getIamge = async () => {
        let imageResponse;
        try {
            imageResponse = await getRandomeImage();
        } catch (e) {
            console.log(e);
        }
        // setImageSrc(`https://apis.gdscasu.com/${imageResponse.imgSrc}`);
        setIsLoading("loading");
        const img = new Image();
        img.src = `https://apis.gdscasu.com/${imageResponse.imgSrc}`;
        img.onload = () => {
            setImageSrc(img.src);
            setIsLoading("loaded");
        };
    };
    useEffect(() => {
        window.addEventListener("load", getIamge);
        return () => {
            window.removeEventListener("load", getIamge);
        };
    }, []);

    return (
        <div className="App">
            <div className="reload-icon">
                <img
                    src={reloadImg}
                    alt="reload-image-icon"
                    onClick={getIamge}
                />
            </div>
            <div
                style={{ backgroundImage: `url(${imageSrc})` }}
                className="bg-img"></div>
            <div className={isLaoding}>
                <h3>Fishing for an image</h3>
            </div>
            <div>
                {isAuth ? (
                    <AuthCard username={name} />
                ) : (
                    <NotAuthCard handleNewName={handleNewName} />
                )}
            </div>
            <div className="quote-section">
                <Quote />
            </div>
        </div>
    );
};

export default App;
