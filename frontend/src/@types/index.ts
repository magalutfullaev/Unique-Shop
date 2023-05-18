export type BannerT = {
    title: string;
    subtitle: string;
    link: string;
    img: string;
}

export type CartItemT = {
    _id: number;
    img: any;
    name: string;
    price: number;
    discount: number;
    orders: number;
    sizes: string[];
    liked: boolean;
    createdAt: string;
}

export type CategoryT = {
    value: string,
    text: string,
    _id: string
    type: string,
}

export type allCategoriesT = {
    title: string,
    data: CategoryT[]
}