import { CheckTwoSvg, UnCheckSvg } from "../svg";

const pricingPlans = [
	{
		id: 1,
		title: "Silver Membership",
		validity: "Valid for 2 months",
		price: 24, // per month
		frequency: "/ Month",
		benefits: [
			"Unlimited Classes",
			"Fitness Assessment",
			"Locker room with showers"
		],
		inactiveBenefits: [
			"Guest Privileges",
			"Free parking"
		],
	},
	{
		id: 2,
		title: "Gold Membership",
		validity: "Valid for 12 months",
		price: 54, // per month
		frequency: "/ Month",
		benefits: [
			"Unlimited Classes",
			"Fitness Assessment",
			"Locker room with showers",
			"Guest Privileges"
		],
		inactiveBenefits: [
			"Free parking"
		],
	},
	{
		id: 3,
		title: "Platinum Membership",
		validity: "Perfect for committed trainers",
		price: 64, // per month
		frequency: "/ Month",
		benefits: [
			"Unlimited Classes",
			"Fitness Assessment",
			"Locker room with showers"
		],
		inactiveBenefits: [
			"Guest Privileges",
			"Free parking"
		],
	}
];

export default function PricingOne() {
	return (
		<section className="pricing-area pt-115 pb-80">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="tp-section-5 text-center mb-65">
							<h5 className="tp-section-5-subtitle mb-10">Pricing plan</h5>
							<h3 className="tp-section-5-title">Membership Plans</h3>
							<p>We keep it simple. No catch. Just outrageously good prices</p>
						</div>
					</div>
				</div>
				<div className="row">
					{pricingPlans.map(plan => (
						<div className="col-lg-4 col-md-6" key={plan.id}>
							<div className={`tp-pricing-5-item ${plan.title === "Gold Membership" ? "active" : ""} mb-40 wow fadeInUp`} data-wow-delay={`.${plan.id}s`}>
								<div className="tp-pricing-5-head">
									<div className="tp-pricing-5-head-text">
										<h4 className="tp-pricing-5-head-title">{plan.title}</h4>
										<span>{plan.validity}</span>
									</div>
									<h2 className="tp-pricing-5-price">
										<span>$</span>{" "}{plan.price}<b>
											{plan.frequency}</b>
										</h2>
								</div>
								<div className="tp-pricing-5-list">
									<ul>
										{plan.benefits.map((benefit, index) => (
											<li key={index}>
												<span>
													<CheckTwoSvg />
												</span>
												{benefit}
											</li>
										))}
										{plan.inactiveBenefits.map((benefit, index) => (
											<li className="inactive" key={index}>
												<span>
													<UnCheckSvg />
												</span>
												{benefit}
											</li>
										))}
									</ul>
								</div>
								<div className="tp-pricing-5-btn">
									<a className="tp-btn-4" href="#">Join Course Plan</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
