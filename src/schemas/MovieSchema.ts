export interface MovieSchema {
   id: number;
   title: string;
   price: number;
   image: string;
}

export interface MovieResponse {
   products: MovieSchema[];
}
