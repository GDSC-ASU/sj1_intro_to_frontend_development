import "./Quote.css";
import { useState, useEffect } from "react";

// assets
import reloadIcon from "../../assets/icons/reload-icon.png";

import { getRandomeQuote } from "../../utils/helpers";

const Quote = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    const getQuote = async () => {
        let quoteResponse;
        try {
            quoteResponse = await getRandomeQuote();
        } catch (e) {
            console.log(e);
        }
        setQuote(quoteResponse.quote);
        setAuthor(quoteResponse.author);
    };

    useEffect(() => {
        window.addEventListener("load", getQuote);
        return () => {
            window.removeEventListener("load", getQuote);
        };
    }, []);
    return (
        <div className="Quote">
            <p className="sub-txt">{quote}</p>
            <div className="author-section">
                <p className="sub-txt">{author}</p>
                <div>
                    <img
                        src={reloadIcon}
                        alt="reload-icon"
                        onClick={getQuote}
                    />
                </div>
            </div>
        </div>
    );
};

export default Quote;
