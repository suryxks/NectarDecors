import React from "react";
import 'whatwg-fetch'
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { screen,waitFor} from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { appRender} from '../../test-utils';
import { Signup } from "../../Pages";

const server = setupServer(
    rest.post('/api/auth/signup', (res, req, ctx) => {
        return res(ctx.json({ createdUser: { email: 'adarshbalika@gmail.com', cart: [], wishList: [] }, encodedToken: 'abcdef' }))
    })
)

  
describe('Sign Up form renders with the required feilds and works', () => {
    beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())
    beforeEach(() => {
        console.error = jest.fn()
      })
      
     


    test('Renders a form with sign up button and inputs for email and password and naviagtes to home page on successful signup', async() => {
        appRender(<Signup />)
        const user = userEvent.setup()
        const userDetails = {
            email: 'adarshbalika@gmail.com',
            password: 'adarshBalika123',
        }
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const signupButton = screen.getByText(/sign up/i);
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(signupButton).toBeInTheDocument();
        
       await user.type(emailInput, userDetails.email);
       expect(emailInput).toHaveValue(userDetails.email);
       await user.type(passwordInput, userDetails.password);
        expect(passwordInput).toHaveValue(userDetails.password);
        await user.click(signupButton);
        await waitFor(()=>expect(window.location.pathname).toBe('/'));
        
    })

})
