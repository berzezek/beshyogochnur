// {
//     "count": 4,
//     "next": null,
//     "previous": null,
//     "results": [
//         {
//             "url": "https://api.beshyogochnur.uz/api/v1/catalogs/category-0/",
//             "name": "Category - 0",
//             "image": "https://api.beshyogochnur.uz/media/images/categories/default.webp",
//             "slug": "category-0"
//         },
//         {
//             "url": "https://api.beshyogochnur.uz/api/v1/catalogs/category-1/",
//             "name": "Category - 1",
//             "image": "https://api.beshyogochnur.uz/media/images/categories/default.webp",
//             "slug": "category-1"
//         },
//         {
//             "url": "https://api.beshyogochnur.uz/api/v1/catalogs/category-2/",
//             "name": "Category - 2",
//             "image": "https://api.beshyogochnur.uz/media/images/categories/default.webp",
//             "slug": "category-2"
//         },
//         {
//             "url": "https://api.beshyogochnur.uz/api/v1/catalogs/category-3/",
//             "name": "Category - 3",
//             "image": "https://api.beshyogochnur.uz/media/images/categories/default.webp",
//             "slug": "category-3"
//         }
//     ]
// }
interface IApiResponse<T> {
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
    slug: string,
    description: string,
    image: string,
    price: number
}


export interface ICategory extends IApiResponse<Category> {}

export interface IProduct extends IApiResponse<Product> {}
