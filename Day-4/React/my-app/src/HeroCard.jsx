import "./HeroCard.css";
const HeroCard = ({ name, company }) => {
    return (
        <div className="hero-card">
            <p className="hero-name">{name}</p>
            <p className="hero-company">{company}</p>
        </div>
    );
};

export default HeroCard;
