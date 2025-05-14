
import BrandSlider from './slider/brand-slider';

export default function BrandAreaTwo() {
  return (
    <section className="brand-area theme-bg-2 tp-brand-5-bg mb-120">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="tp-brand-5-section text-center">
                    <h4 className="tp-brand-5-title">The renovator is proudly partnered with</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <BrandSlider/>
                </div>
            </div>
        </div>
    </section>
  )
}
