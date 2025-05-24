import MainProvider from "@/components/provider/main-provider";
import BackToTop from "@/components/back-to-top";
import FooterOne from "@/components/footer/footer-one";
import HeaderOne from "@/components/header/header-one";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderOne  />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterOne/>
      {/* footer area end */}

    
    </MainProvider>
  );
}
