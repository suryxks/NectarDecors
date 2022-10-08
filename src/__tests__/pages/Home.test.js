import React from "react";
// import 'whatwg-fetch'
// import { setupServer } from 'msw/node';
// import { rest } from 'msw';
import { screen,waitFor} from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { appRender} from '../../test-utils';
import { Home } from "../../Pages";

describe('Check if the page renders with hero section ,categoreis and featured products', () => {
    const original = console.error;
    beforeEach(() => {
        console.error = jest.fn()
    })
    
    test('Hero section', async () => {
        appRender(<Home />)
        const user = userEvent.setup();
        const heroHeading = screen.getByText(/beautify your living space with/i);
        expect(heroHeading).toBeInTheDocument();
        const shopButton = screen.getByText(/shop now/i);
        await user.click(shopButton);
        await waitFor(()=>expect(window.location.pathname).toBe("/products"))
    })
    test('categories', () => {
        appRender(<Home />);
        const categoriesHeading = screen.getByText(/categories/i);
        expect(categoriesHeading).toBeInTheDocument();
        const featuredHeading=screen.getByText(/featured products/i)
        expect(featuredHeading).toBeInTheDocument();
    })
})