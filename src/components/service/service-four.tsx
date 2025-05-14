import Image from "next/image";

const shopServices = [
  {
    id: 1,
    title: "Efficient <br> Book Delivery",
    description: "Fast & Efficient Service",
    image: "/assets/img/shop/author/shop-icon-1.png",
    backgroundImage: "/assets/img/shop/product/shop-service-shape.jpg",
  },
  {
    id: 2,
    title: "Free Shipping For <br> Book Lovers",
    description: "Shop Books Now",
    image: "/assets/img/shop/author/shop-icon-2.png",
  },
  {
    id: 3,
    title: "Return with Confidence",
    description: "Within 20 Days Return",
    image: "/assets/img/shop/author/shop-icon-3.png",
  },
];

export default function ServiceFour() {
  return (
    <section className="tp-shop-service-area pb-90">
      <div className="container">
        <div className="row">
          {shopServices.map((service) => (
            <div key={service.id} className="col-lg-4">
              <div
                className={`tp-shop-service-item d-flex justify-content-between align-items-center mb-30 ${
                  service.id === 1 ? "p-relative" : ""
                }`}
                style={
                  service.backgroundImage
                    ? { backgroundImage: `url(${service.backgroundImage})` }
                    : {}
                }
              >
                <div className="tp-shop-service-content">
                  <h4
                    className="tp-shop-service-title"
                    dangerouslySetInnerHTML={{ __html: service.title }}
                  ></h4>
                  <p>{service.description}</p>
                </div>
                <div className="tp-shop-service-thumb">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={140}
                    height={140}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
