import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductSkeleton() {
    return (
        <div className="w-[calc(50%-12px)] md:w-[calc((100%-48px)/4)] border border-1 flex flex-col p-3 rounded-md shadow-sm h-[217px]  md:h-[317px]">
            <div className="h-[100px] md:h-[200px]"></div>
            <Skeleton />
            <Skeleton />
        </div>
    );
}

export default ProductSkeleton;
