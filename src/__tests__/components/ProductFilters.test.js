import React from "react";
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent  from "@testing-library/user-event";
import { ProductFilters } from "../../components/ProductFilterForm/ProductFilters";
import { appRender } from '../.././test-utils';
import { constants } from "../../Utils/constants";
const { category_plants,
    category_walldecor,
    category_clocks,
    category_wallshelves,
    rating_four,
    rating_three,
    rating_two,
    rating_one,
} = constants
const filterValues={
category: {
    plants: false,
    wallDecor: false,
    clocks: false,
    wallShelves: false,
  },
  rating: {
    fourStars: false,
    threeStars: false,
    twoStars: false,
    oneStar: false,
  },
  price: {
    lowToHigh: false,
    highToLow: false,
  },
  priceRangeSlider: 2500,
}
const dispatch = jest.fn();
describe('Product Filter', () => {
    test('form renders with all the feilds',() => {
        appRender(<ProductFilters filterValues={filterValues} dispatch={ dispatch} />)
        const clearBtn = screen.getByText(/clear/i);
        expect(clearBtn).toBeInTheDocument();
        const plantsCheckBox = screen.getByLabelText(/plants/i);
        const wallDecorCheckBox = screen.getByLabelText(/wall decor/i);
        const clockCheckBox = screen.getByLabelText(/clocks/i);
        const wallShelvesChekBox = screen.getByLabelText(/wall shelves/i);
        const fourRating = screen.getByLabelText(/4 and above/i);
        const threeRating = screen.getByLabelText(/3 and above/i);
        const twoRating = screen.getByLabelText(/2 and above/i);
        const oneRating = screen.getByLabelText(/1 and above/i);
        expect(plantsCheckBox).toBeInTheDocument();
        expect(wallDecorCheckBox).toBeInTheDocument();
        expect(clockCheckBox).toBeInTheDocument();
        expect(wallShelvesChekBox).toBeInTheDocument();
        expect(fourRating).toBeInTheDocument();
        expect(threeRating).toBeInTheDocument();
        expect(twoRating).toBeInTheDocument();
        expect(oneRating).toBeInTheDocument();
    })  
    test('check box for categories works and calls the dispatch function with the correct arguments', async() => {
        const user = userEvent.setup();
        appRender(<ProductFilters filterValues={filterValues} dispatch={ dispatch} />)
        const clearBtn = screen.getByText(/clear/i);
        expect(clearBtn).toBeInTheDocument();
        const plantsCheckBox = screen.getByLabelText(/plants/i);
        const wallDecorCheckBox = screen.getByLabelText(/wall decor/i);
        const clockCheckBox = screen.getByLabelText(/clocks/i);
        const wallShelvesChekBox = screen.getByLabelText(/wall shelves/i);
       
        await user.click(plantsCheckBox);
        expect(plantsCheckBox).toBeEnabled();
        expect(dispatch).toHaveBeenCalledWith({ type: category_plants });
        await user.click(wallDecorCheckBox);
        expect(wallDecorCheckBox).toBeEnabled();
        expect(dispatch).toHaveBeenCalledWith({ type: category_walldecor });
        await user.click(clockCheckBox);
        expect(clockCheckBox).toBeEnabled();
        expect(dispatch).toHaveBeenCalledWith({ type: category_clocks });
        await user.click(wallShelvesChekBox);
        expect(wallShelvesChekBox).toBeEnabled();
        expect(dispatch).toHaveBeenCalledWith({ type: category_wallshelves });
        })  
    test('radio input for rating works and calls the dispatch function with the correct arguments', async() => {
        const user = userEvent.setup();
        appRender(<ProductFilters filterValues={filterValues} dispatch={ dispatch} />)
        const clearBtn = screen.getByText(/clear/i);
        expect(clearBtn).toBeInTheDocument();
       
        const fourRating = screen.getByLabelText(/4 and above/i);
        const threeRating = screen.getByLabelText(/3 and above/i);
        const twoRating = screen.getByLabelText(/2 and above/i);
        const oneRating = screen.getByLabelText(/1 and above/i);
      
        await user.click(fourRating);
        expect(fourRating).toBeEnabled();
        expect(dispatch).toHaveBeenCalledWith({ type: rating_four });
        await user.click(threeRating);
        expect(threeRating).toBeEnabled();
        expect(dispatch).toHaveBeenCalledWith({ type: rating_three });
        await user.click(twoRating);
        expect(twoRating).toBeEnabled();
        expect(dispatch).toHaveBeenCalledWith({ type: rating_two });
        await user.click(oneRating);
        expect(oneRating).toBeEnabled();
        expect(dispatch).toHaveBeenCalledWith({ type: rating_one });

    })  
})