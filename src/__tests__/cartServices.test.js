import axios from "axios";
import { addToCartService,removeFromCartService,updateProductQuantityService ,getCartService} from '../services/';
jest.mock("axios");

const token = 'abcdef';
const product={
    _id:'1',
    title: "Decorly",
    description: "Set Of 4 Green & White Decorative Bonsai Plants With Pots",
    Originalprice: "499",
    price: "450",
    categoryName: "Plants",
    discount: "10%",
    Stockquantity: "10",
    featured: true,
    rating: "4.5",
    imageUrl:
      "https://res.cloudinary.com/dxdefqayz/image/upload/c_scale,w_210/v1647232619/NectarDecors/Plants/2a60d462-66b8-42d0-b940-d2a768d9c4431634735175699DekorlySetOf4GreenWhiteDecorativeBonsaiPlantsWithPots1_qyhyis.jpg"
}
const id = '1';
const response = {
    data: {
        cart:[]
    }
}
const addResponse = {
    data: {
        cart: [{ ...product }]
    }
}
const type = 'increment';
describe('Get cart  service', () => {
    beforeEach(() => {
         axios.get.mockResolvedValue(response)
    })
    test('Should get response as an object with keys: data and status', async () => {
        const getCartResponse= await getCartService(token);
        expect(getCartResponse).toHaveProperty('cart');
        
    })
    test('Should call endpoint with token', async () => {
         await getCartService(token)
        expect(axios.get).toHaveBeenCalledWith('/api/user/cart',{"headers": {"authorization":token}})
    })
})
describe('add to cart  service', () => {
    beforeEach(() => {
         axios.post.mockResolvedValue(addResponse)
    })
    test('Should get response as an object with key cart', async () => {
        const addToCartResponse= await addToCartService(token,product);
        expect(addToCartResponse).toHaveProperty('cart');
        
    })
    test('Should call endpoint with token and product', async () => {
         await addToCartService(token,product)
        expect(axios.post).toHaveBeenCalledWith('/api/user/cart',{product},{"headers": {"authorization":token}})
    })
})
describe('remove from cart  service', () => {
    beforeEach(() => {
         axios.delete.mockResolvedValue(response)
    })
    test('Should get response as an object with key cart', async () => {
        const removeFromCartResponse= await removeFromCartService(token,id);
        expect(removeFromCartResponse).toHaveProperty('cart');
        
    })
    test('Should call endpoint with token and product id', async () => {
         await removeFromCartService(token,id)
        expect(axios.delete).toHaveBeenCalledWith(`/api/user/cart/${id}`,{"headers": {"authorization":token}})
    })
})
describe('updateProductQuantityService   service', () => {
    beforeEach(() => {
         axios.post.mockResolvedValue(addResponse)
    })
    test('Should get response as an object with key cart', async () => {
        const updateResponse= await updateProductQuantityService(token,id,type);
        expect(updateResponse).toHaveProperty('cart');
        
    })
    test('Should call endpoint with token and product id', async () => {
         await updateProductQuantityService(token,id,type)
        expect(axios.post).toHaveBeenCalledWith(`/api/user/cart/${id}`,{ action: { type} },{"headers": {"authorization":token}})
    })
})

