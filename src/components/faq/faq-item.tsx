

type IProps = {
    faq: {
        id: number;
        active?: boolean;
        question: string;
        answer: string;
    },
    parentId: string
}

export default function FaqItem({ faq, parentId }: IProps) {
    return (
        <div className={`accordion-item ${faq.active ? "expand" : ""}`} key={faq.id}>
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${faq.active ? "faq-expend" : "collapsed"}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${faq.id}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${faq.id}`}
                >
                    {faq.question}
                    <span className="accordion-btn"></span>
                </button>
            </h2>
            <div
                id={`flush-collapse${faq.id}`}
                className={`accordion-collapse collapse ${faq.active ? "show" : ""
                    }`}
                data-bs-parent={`#${parentId}`}
            >
                <div className="accordion-body">
                    {faq.answer}
                </div>
            </div>
        </div>
    )
}
