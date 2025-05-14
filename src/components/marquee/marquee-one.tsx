import { ShapeLineThree } from "../svg";

const marquee_text = [
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
  { text: "Fitness voucher - Get more than", percent: "50%" },
];

export default function MarqueeOne() {
  return (
    <section className="tp-marquee-area tp-marquee-scroll fix">
      <div className="tp-marquee-item">
        {marquee_text.map((item, i) => (
          <h2 key={i} className="tp-marquee-title">
            {item.text}{" "}
            <span>
              {item.percent} <ShapeLineThree />
            </span>
          </h2>
        ))}
      </div>
    </section>
  );
}
