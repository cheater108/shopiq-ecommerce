import Skeleton from "react-loading-skeleton";

function loading() {
    return (
        <div className="w-11/12 m-auto flex flex-col md:flex-row mt-4 gap-12 items-center">
            <div className="w-[75%] md:w-2/5"></div>
            <div className="w-full md:h-[70vh] p-2">
                <Skeleton height={40} />
                <Skeleton count={3} />
                <Skeleton className="mt-4" />
                <Skeleton className="mt-4" />
            </div>
        </div>
    );
}

export default loading;
