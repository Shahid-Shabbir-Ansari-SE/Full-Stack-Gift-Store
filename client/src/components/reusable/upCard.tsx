import Card from "./card";
import upCardProps from "./types/upCardProps";

const UpCard = ({cardImage, cardLink, cardTitle}: upCardProps) => {
    return (
        <Card cardImageLink={cardImage}
            cardLink={cardLink}
            cardTitle={cardTitle}
            mainDivStyle={"flex-col justify-center items-center"}
        />
    )
}

export default UpCard;