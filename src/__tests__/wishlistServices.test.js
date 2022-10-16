import axios from "axios";
import { addToWishListService,getWishListService,deleteFromWishListService} from '../services/';
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
        wishlist:[]
    }
}
const addResponse = {
    data: {
        wishlist: [{ ...product }]
    }
}

describe('Get wishlist  service', () => {
    beforeEach(() => {
         axios.get.mockResolvedValue(response)
    })
    test('Should get response as an object with keys: data and status', async () => {
        const getwishlistResponse= await getWishListService(token);
        expect(getwishlistResponse).toHaveProperty('wishlist');
        
    })
    test('Should call endpoint with token', async () => {
         await getWishListService(token)
        expect(axios.get).toHaveBeenCalledWith('/api/user/wishlist',{"headers": {"authorization":token}})
    })
})
describe('add to wishlist  service', () => {
    beforeEach(() => {
         axios.post.mockResolvedValue(addResponse)
    })
    test('Should get response as an object with key wishlist', async () => {
        const addTowishlistResponse= await addToWishListService(token,product);
        expect(addTowishlistResponse).toHaveProperty('wishlist');
        
    })
    test('Should call endpoint with token and product', async () => {
         await addToWishListService(token,product)
        expect(axios.post).toHaveBeenCalledWith('/api/user/wishlist',{product},{"headers": {"authorization":token}})
    })
})
describe('remove from wishlist  service', () => {
    beforeEach(() => {
         axios.delete.mockResolvedValue(response)
    })
    test('Should get response as an object with key wishlist', async () => {
        const deleteFromwishlistResponse= await deleteFromWishListService(token,id);
        expect(deleteFromwishlistResponse).toHaveProperty('wishlist');
        
    })
    test('Should call endpoint with token and product id', async () => {
         await deleteFromWishListService(token,id)
        expect(axios.delete).toHaveBeenCalledWith(`/api/user/wishlist/${id}`,{"headers": {"authorization":token}})
    })
})