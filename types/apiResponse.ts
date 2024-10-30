export interface IApiResponse<T> {
    count: number;
    next: null;
    previous: null;
    results: Array<T>;
}

export interface Category {
    url: string,
    slug: string,
    name: string,
    image: string,
}

export interface Product {
    url: string,
    name: string,
    category: string,
    manufactures: string,
    slug: string,
    description: string,
    image: string,
    price: number
}

export interface Manufacter {
    name: string,
}


export interface ICategory extends IApiResponse<Category> {}

export interface IProduct extends IApiResponse<Product> {}

export interface IManufacter extends IApiResponse<Manufacter> {
  name: any;
}
