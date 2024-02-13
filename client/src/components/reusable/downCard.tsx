import Card from "./card";
import downCardProps from "./types/upCardProps";

const DownCard = ({cardImage, cardLink, cardTitle}: downCardProps) => {
    return (
        <Card cardImageLink={cardImage}
            cardLink={cardLink}
            cardTitle={cardTitle}
            mainDivStyle={"flex-col-reverse justify-center items-center"}
        />
    )
}

export default DownCard;