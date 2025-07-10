import BackToTop from "@/components/back-to-top";
import DashboardBanner from "@/components/dashboard/dashboard-banner";
import DashboardContentWrapper from "@/components/dashboard/dashboard-content-wrapper";
import FooterOne from "@/components/footer/footer-one";
import HeaderOne from "@/components/header/header-one";
import HeaderTwo from "@/components/header/header-two";
import MainProvider from "@/components/provider/main-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
    
      {/* header area end */}
      <main className="tp-dashboard-body-bg">
        {/* dashboard banner area start */}
        <DashboardBanner />
        {/* dashboard banner area end */}

        {/* dashboard content area start */}
        <DashboardContentWrapper>
          {/* main content */}
          {children}
        </DashboardContentWrapper>
      </main>

      {/* main content */}

      {/* footer area start */}
      <FooterOne />
      {/* footer area end */}
  
    </MainProvider>
  );
}
