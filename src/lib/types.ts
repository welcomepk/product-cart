
export type Image = {
    thumbnail: string,
    mobile: string,
    tablet: string,
    desktop: string
}

export type Desert = {
    id: string,
    image: Image,
    name: string,
    category: string,
    price: number,
    cartQuantity?: number
}

export interface CartItem extends Desert {
    quantity: number
}