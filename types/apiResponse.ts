export interface IApiResponse<T> {
    count: number;
    next: null;
    previous: null;
    results: Array<T>;
}

export interface Category {
    id: number,
    url: string,
    slug: string,
    name: string,
    image: string,
    thumbnail: string
}

export interface Product {
    id: number,
    url: string,
    name: string,
    category: string,
    manufactures: string,
    slug: string,
    description: string,
    image: string,
    thumbnail: string,
    price: number,
    pdf: string,
}

export interface Manufacter {
    id: number,
    name: string,
}


export interface ICategory extends IApiResponse<Category> { }

export interface IProduct extends IApiResponse<Product> { }

export interface IManufacter extends IApiResponse<Manufacter> {
    name: any;
}
