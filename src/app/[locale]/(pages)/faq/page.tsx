import { Metadata } from "next";
import FaqArea from "@/components/faq/faq-area";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";


export const metadata: Metadata = {
    title: "FAQ -  Blessings Travels",
};

export default function FaqPage() {
    return (
        <main>

            {/* breadcrumb area start */}
            <BreadcrumbTwo
                title="Faqs"
                subtitle="Faqs"
               
            />
            {/* breadcrumb area end */}


            {/* faq area start */}
            <FaqArea/>
            {/* faq area end */}
        </main>
    );
}
