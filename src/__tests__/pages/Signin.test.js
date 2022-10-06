import React from "react";
import 'whatwg-fetch'
import { setupServer } from 'msw/node';
import { rest } from 'msw';
// import { createMemoryHistory } from 'history';
import { screen,waitFor} from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { appRender} from '../../test-utils';
import { Signin } from "../../Pages";

const server = setupServer(
    rest.post('/api/auth/login', (res, req, ctx) => {
        return res(ctx.json({ response: { data: { foundUser: { email: 'adarshbalika@gmail.com', cart: [], wishList: [] }, encodedToken: 'abcdef' } } }))
    })
)

  
describe('Sign In form renders with the required feilds and works', () => {
    const original = console.error
    beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())
    beforeEach(() => {
        console.error = jest.fn()
        console.error('you cant see me')
      })
      
      afterEach(() => {
        console.error('you cant see me')
        console.error = original
        
      })


    test('Renders a form with login ,Login as guest buttons and inputs for email and password and naviagtes to home page on successful login', async() => {
        appRender(<Signin />)
        const user = userEvent.setup()
        const userDetails = {
            email: 'adarshbalika@gmail.com',
            password: 'adarshBalika123',
        }
        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const loginButton = screen.getByText(/Login/i, { selector: 'button', exact: true, ignore:'#login-guest'});
        const guestLoginButton = screen.getByText(/login as guest/i);
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
        expect(guestLoginButton).toBeInTheDocument();
        
       await user.type(emailInput, userDetails.email);
       expect(emailInput).toHaveValue(userDetails.email);
       await user.type(passwordInput, userDetails.password);
       expect(passwordInput).toHaveValue(userDetails.password);
        await user.click(guestLoginButton);
        await waitFor(()=>expect(window.location.pathname).toBe('/'));
        
    })

})
