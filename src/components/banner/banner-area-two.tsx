import Link from "next/link";

const banners = [
  {
    id: 1,
    background: "/assets/img/banner/banner-5-bg-1.jpg",
    spanText: "Claim your",
    title: "Free 7 days Pass",
    description: "Enjoy a workout on us! You will be happy for sure.",
    buttonText: "Get started",
    buttonClass: "tp-btn-5",
  },
  {
    id: 2,
    background: "/assets/img/banner/banner-5-bg-2.jpg",
    spanText: "Call Us",
    title: "402 911 2804",
    description: "If we can help you on your journey! Or check out our FAQ’s",
    buttonText: "CONTACT US",
    buttonClass: "tp-btn-4",
  },
];

export default function BannerAreaTwo() {
  return (
    <section className="banner-area">
      <div className="container-fluid p-0">
        <div className="row g-0">
          {banners.map((banner) => (
            <div className="col-lg-6" key={banner.id}>
              <div
                className="tp-banner-5-item"
                style={{ backgroundImage: `url(${banner.background})` }}
              >
                <div className="tp-banner-5-content text-center">
                  <span>{banner.spanText}</span>
                  <h2 className="tp-banner-5-title">
                    {banner.title.includes("tel:") ? (
                      <a href={`tel:${banner.title.replace(/\D/g, "")}`}>
                        {banner.title}
                      </a>
                    ) : (
                      banner.title
                    )}
                  </h2>
                  <p>{banner.description}</p>
                  <div className="tp-banner-5-btn">
                    <Link className={banner.buttonClass} href="/contact">
                      {banner.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
