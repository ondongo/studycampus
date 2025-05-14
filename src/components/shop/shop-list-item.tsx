import Link from "next/link"
import Image from "next/image"
import { IBookDT } from "@/types/book-d-t"
import { getTagClass } from "./shop-item"
import { formatPrice } from "@/lib/format-price"


type IProps = {
    item: IBookDT
}

export default function ShopListItem({ item }: IProps) {
    return (
        <div className="tp-shop-list-product-item d-flex mb-10">
            <div className="tp-shop-list-product-thumb p-relative">
                <Link href={`/shop-details/${item.id}`}>
                    <Image
                        src={item.image}
                        alt={item.title}
                        width={148}
                        height={220}
                        style={{ height: "auto" }}
                    />
                </Link>
            </div>
            <div className="tp-shop-list-product-content p-relative">
                <div className="tp-shop-product-thumb-tag">
                   <span className={getTagClass(item.tag)}>{item.tag}</span>
                </div>
                <div className="tp-shop-product-tag">
                    <span>{item.category}</span>
                </div>
                <h4 className="tp-shop-product-title">
                    <Link href={`/shop-details/${item.id}`}>{item.title}</Link>
                </h4>
                <p>{item.short_desc}</p>
                <div className="tp-shop-product-price">
                  <span>{formatPrice(item.price,true)}</span>
                </div>
                <div className="tp-shop-list-product-btn">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
