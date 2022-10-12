import React from "react";
import {  screen,waitFor} from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { appRender} from '../../test-utils';
import { ProductListing } from "../../Pages";
const original = console.error;
beforeEach(() => {
    console.error = jest.fn()
  })
  
  afterEach(() => {
      console.error = original;
  })
describe('Product listing page renders with filters form and products card', () => {
    test('products page renders with form ,combobox for sorting', () => {
        const user = userEvent.setup();
        appRender(<ProductListing />);
        const filtersHeading = screen.getByText(/filters/i);
        const filtersForm = screen.getByRole('form');
        const sortOptions = screen.getByRole('combobox');
        expect(sortOptions).toBeInTheDocument();
        expect(filtersForm).toBeInTheDocument();
        expect(filtersHeading).toBeInTheDocument();
    })
    

})