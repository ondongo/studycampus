

export default function ShopReviewForm() {
    return (
        <form action="#">
            <div className="tp-product-details-review-form-rating d-flex align-items-center">
                <p>Your Rating :</p>
                <div className="tp-product-details-review-form-rating-icon d-flex align-items-center">
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                </div>
            </div>
            <div className="tp-product-details-review-input-wrapper">
                <div className="tp-product-details-review-input-box">
                    <div className="tp-product-details-review-input">
                        <textarea id="msg" name="msg" placeholder="Write your review here..."></textarea>
                    </div>
                    <div className="tp-product-details-review-input-title">
                        <label htmlFor="msg">Your Name</label>
                    </div>
                </div>
                <div className="tp-product-details-review-input-box">
                    <div className="tp-product-details-review-input">
                        <input name="name" id="name" type="text" placeholder="Pranta" />
                    </div>
                    <div className="tp-product-details-review-input-title">
                        <label htmlFor="name">Your Name</label>
                    </div>
                </div>
                <div className="tp-product-details-review-input-box">
                    <div className="tp-product-details-review-input">
                        <input name="email" id="email" type="email" placeholder="acadia@mail.com" />
                    </div>
                    <div className="tp-product-details-review-input-title">
                        <label htmlFor="email">Your Email</label>
                    </div>
                </div>
            </div>
            <div className="tp-product-details-review-suggetions mb-20">
                <div className="tp-product-details-review-remeber">
                    <input id="remeber" type="checkbox" />
                    <label htmlFor="remeber">Save my name, email, and website in this browser for the next time I comment.</label>
                </div>
            </div>
            <div className="tp-product-details-review-btn-wrapper">
                <button className="tp-product-details-review-btn">Submit</button>
            </div>
        </form>
    )
}
