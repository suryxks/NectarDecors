import React from "react"
import { HorizontalCard} from '../../components'
export const FeaturedList = ({ featured }) => {
    return featured.map((product) => (
        <HorizontalCard
         product={product}
        key={product._id}
        data-testid="featured"
        />
      ))
}