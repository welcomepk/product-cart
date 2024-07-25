
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
    price: number
}

export interface CartItem {
    id: string,
    quantity: number
}