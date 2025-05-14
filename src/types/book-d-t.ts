export type IBookDT = {
  id: number;
  title: string;
  category: string;
  price: number;
  tag: string;
  image: string;
  stock: number;
  short_desc?: string;
  description?: string;
  additional_info?: {
    bookType: string;
    publisher: string;
    language: string;
    paperback: number;
    isbn: string;
    published: string;
  };
};
