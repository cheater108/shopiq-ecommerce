import ProductSkeleton from "../components/ProductSkeleton";

function loading() {
    return (
        <main className="flex w-11/12 m-auto mt-4">
            <div className="w-full">
                <div className="flex flex-wrap gap-4 justify-end w-full">
                    {Array.from({ length: 12 }).map((_, ind) => (
                        <ProductSkeleton key={ind} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default loading;
