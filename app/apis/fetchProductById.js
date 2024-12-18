import axios from "axios";

async function fetchProductById(id) {
    const result = await axios.get(`https://dummyjson.com/products/${id}`);
    return result.data;
}

export default fetchProductById;
