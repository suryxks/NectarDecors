import axios from "axios";
import { loginService, signUpService } from '../services/';
jest.mock("axios");

const userDetails = {
   email:'johndoe',
   password: 'john1234doe'
}

const user={
    _id: '1',
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@gmail.com",
    password:'john1234doe',
    createdAt: '04/09/2022',
    updatedAt: '04/09/2022'
}
const loginResponse = {
      data:{foundUser:user,encodedToken:'abcedfg'},
      status:200,  
}
const signUpResponse = {
    data: { createdUser: user, encodedToken: 'abcdefg' },
    status: 201,
    statusText:'Created'
}
describe('Login service', () => {
    beforeEach(() => {
         axios.post.mockResolvedValue(loginResponse)
    })
    test('Should get response as an object with keys: data and status', async () => {
        const loginResponse = await loginService(userDetails);
        expect(loginResponse).toHaveProperty('foundUser');
        expect(loginResponse).toHaveProperty('encodedToken')
    })
    test('Should call endpoint with given email & password', async () => {
         await loginService(userDetails)
        expect(axios.post).toHaveBeenCalledWith('/api/auth/login',userDetails)
    })
})
describe('Sign up service', () => {
    beforeEach(() => {
         axios.post.mockResolvedValue(signUpResponse)
    })
    test('Should get response as an object with keys: data and status', async () => {
        const signUpResponse= await signUpService(userDetails);
        expect(signUpResponse).toHaveProperty('createdUser');
        expect(signUpResponse).toHaveProperty('encodedToken')
    })
    test('Should call endpoint with given email & password', async () => {
         await signUpService(userDetails)
        expect(axios.post).toHaveBeenCalledWith('/api/auth/signup',userDetails)
    })
})