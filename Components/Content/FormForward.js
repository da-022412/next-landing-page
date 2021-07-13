import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Submitted an insurance claim on the Lemonade app?',
    subIntro:
        'Customers who filed an insurance claim on the Lemonade app had their face scanned and stored by the company.  You may be entitled to a cash award of between $1,000 and $5,000 for the unlawful collection of your biometric data under Illinois Law and possibly more as a service award if you participate in a class action lawsuit.',
    title: 'Why Could it Have Been Wrong for Lemonade to scan my face? What Can I Do About it?',
    subTitle:
        "Under Illinois' Biometric Information Privacy Act (BIPA), a company collecting employees' biometric data (like fingerprints, eye retina scans, or through facial recognition) must inform the person(s) affected, explain why this data is being collected, and how long it will be retained. Companies must also have written consent from a customer before they collect this biometric data. The law gives individuals the right and protection to take legal action against companies who obtain their facial scans or fingerprints without their knowledge and/or use this data without their consent. A number of class action and individual lawsuits have been filed over this issue, with settlements of up to $1.5 million. You may be entitled to $1,000-$5,000 per violation. Know your rights. Talk to a lawyer today.",
    emphasis:
        'Did you purchase any of the following sunscreen brands within the last four years?',
};

export default function Content() {
    return (
        <section className='content-section section'>
            <div className='container-md'>
                <div className='text-center'>
                    <h1 className='heading-1'>{content.intro}</h1>
                    <h2 className='heading-3'>{content.subIntro}</h2>
                    <JotForm />
                </div>
            </div>
            <div className='container-lg text-center'>
                <div className='container-md'>
                    <h3 className='heading-3'>
                        <b>{content.title}</b>
                    </h3>
                </div>
                <div className='content-wrap'>
                    <h3 className='heading-3'>
                        <em>{content.subTitle}</em>
                    </h3>
                    <h3 className='heading-3'>
                        <b>{false}</b>
                    </h3>
                </div>
                <div className='btn-container'>
                    <div className='btn primary-btn'>
                        <a href='#form' className='is-white'>
                            Continue to Free Case Review
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
