import DownCard from "./downCard";
import featuredProductsProps from "./types/faeturedProduts";


const DownFeaturedProducts = ({items}: featuredProductsProps) => {
    return (
        <div className="flex space-x-4">
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <DownCard cardImage={items[0].cardImage} cardLink={items[0].cardLink} cardTitle={items[0].cardTitle} />
                <DownCard cardImage={items[1].cardImage} cardLink={items[1].cardLink} cardTitle={items[1].cardTitle} />
            </div>
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                <DownCard cardImage={items[2].cardImage} cardLink={items[2].cardLink} cardTitle={items[2].cardTitle} />
                <DownCard cardImage={items[3].cardImage} cardLink={items[3].cardLink} cardTitle={items[3].cardTitle} />
            </div>
        </div>
    )
}

export default DownFeaturedProducts;