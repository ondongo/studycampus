import DashboardSidebar from "./dashboard-sidebar-area";

type IProps = {
  children: React.ReactNode;
  studentSidebar?: boolean;
};
export default function DashboardContentWrapper({
  children,
  studentSidebar = false,
}: IProps) {
  return (
    <section className="tpd-main pb-75">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            {/* dashboard-menu-area-start */}

            <DashboardSidebar />

            {/* dashboard-menu-area-end */}
          </div>
          <div className="col-lg-9">
            {/* dashboard-content-area-start */}
            <div className="tpd-content-layout">{children}</div>
            {/* dashboard-content-area-end */}
          </div>
        </div>
      </div>
    </section>
  );
}
