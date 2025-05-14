import Image from "next/image";
import { formatPrice } from "@/lib/format-price";
import { IBookDT } from "@/types/book-d-t";
import Link from "next/link";

type IProps = {
  item: IBookDT;
};

export function getTagClass(tag: string) {
    if (tag.includes('%')) {
        return 'off';
    }
    
    switch (tag) {
        case 'Hot':
            return 'hot';
        case 'New':
            return 'new';
        default:
            return '';
    }
}

export default function ShopItem({ item }: IProps) {
  return (
    <div className="tp-shop-product-item text-center mb-50">
      <div className="tp-shop-product-thumb p-relative">
        <Link href={`/shop-details/${item.id}`}>
          <Image
            src={item.image}
            alt={item.title}
            width={282}
            height={380}
            style={{ height: "auto" }}
          />
        </Link>
        <div className="tp-shop-product-thumb-tag">
          <span className={getTagClass(item.tag)}>{item.tag}</span>
        </div>
        <div className="tp-shop-product-thumb-btn">
          <button>Add to cart</button>
        </div>
      </div>
      <div className="tp-shop-product-content">
        <div className="tp-shop-product-tag">
          <span>{item.category}</span>
        </div>
        <h4 className="tp-shop-product-title">
          <Link href={`/shop-details/${item.id}`}>{item.title}</Link>
        </h4>
        <div className="tp-shop-product-price">
          <span>{formatPrice(item.price,true)}</span>
        </div>
      </div>
    </div>
  );
}
