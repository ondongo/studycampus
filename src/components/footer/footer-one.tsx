
// prop type
type IProps = {
  style_2?: boolean;
};

export default function FooterOne({ style_2 = false }: IProps) {
  return (
    <footer>
      
      <div className={`${style_2 ? "tp-footer-5-bottom" : "tp-footer-bottom"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-footer-copyright text-center">
                <span>
                  © {new Date().getFullYear()} <a href="#">BlessingTravel</a>. Tous
                  droits reservés.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
