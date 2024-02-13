import DownFeaturedProducts from "../reusable/downFeaturedProducts";
import sampleFeaturedItems from "../reusable/sampleData/featuredItems";

const TopFeaturedProducts = () => {
    return (
        <div className="p-4 mt-10">
            <DownFeaturedProducts items={sampleFeaturedItems}/>
        </div>
    )
}

export default TopFeaturedProducts;