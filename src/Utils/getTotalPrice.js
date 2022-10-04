export const getTotalPrice = (products) => {
    return products.reduce((acc, current) => {
        return {
            price: acc.price + Number(current.price) * Number(current.qty),
            Originalprice: acc.Originalprice + Number(current.Originalprice) * Number(current.qty),
            discount: acc.discount + Number(current.qty) * (Number(current.Originalprice) - Number(current.price))
        }
    }, {
        price: 0,
        Originalprice: 0,
        discount: 0
    })
}