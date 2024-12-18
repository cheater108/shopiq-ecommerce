import { fetchProducts } from "../apis/fetchProducts";
import ProductCard from "../components/ProductCard";
import ShowMore from "../components/ShowMore";

async function page({ searchParams }) {
    const { page = 1 } = await searchParams;
    const { products, total } = await fetchProducts(page);

    return (
        <main className="flex w-11/12 m-auto mt-4">
            <div className="w-full">
                <div className="flex flex-wrap gap-4 w-full">
                    {products.map((elem) => (
                        <ProductCard
                            key={elem.id}
                            title={elem.title}
                            desc={elem.description}
                            img_url={elem.images[0]}
                            price={elem.price}
                            id={elem.id}
                        />
                    ))}
                </div>
                {Number(page) * 12 < total && <ShowMore page={Number(page)} />}
            </div>
        </main>
    );
}

export default page;
