import axios from "axios";

async function fetchProducts(page = 1) {
    const result = await axios.get(
        `https://dummyjson.com/products?limit=${page * 12}`
    );
    return result.data;
}

export { fetchProducts };
