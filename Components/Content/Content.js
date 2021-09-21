import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Certain newer Subaru models collect your biometric information through facial recognition technology that violates the law in Illinois, Oregon, and Pennsylvania.',
    subIntro:
        'The relevant models that collect biometric data include the following (by year):',
    title: 'Why would I be owed money?',
    subTitle:
        'Premama claims that its Fertility Support products provide natural reproductive support for women trying to conceive, and that it is proven to optimize your chances of conception.  However, there are no studies supporting those claims, and  Premama admitted that it cannot definitively say that its products increase the chances of becoming pregnant.',
    emphasis:
        'If you have purchased a “disinfecting” UV light at any point during the last four years, we would like to hear from you.',
};

export default function Content() {
    return (
        <section className='content-section section'>
            <div className='container-md'>
                <div className='text-center'>
                    <h1 className='heading-1'>{content.intro}</h1>
                    <h2 className='heading-3'>{content.subIntro}</h2>
                    <List />
                    <br />
                    <h3 className='heading-3'>
                        <b>
                            Know your rights and help deter the wrongful
                            collection of biometric data. Get in touch today to
                            see if you have been affected and may be owed
                            compensation.
                        </b>
                    </h3>
                    <br />
                    <div className='btn primary-btn'>
                        <a href='#form' className='is-white'>
                            Continue to Free Case Review
                        </a>
                    </div>
                </div>
            </div>
            <div className='container-lg text-center'>
                <Faq />
                <div className='content-wrap'>
                    <h2 className='heading-2'>{false}</h2>
                    <h3 className='heading-3'>
                        <em>{false}</em>
                    </h3>
                    <h3 className='heading-3'>
                        <b>{false}</b>
                    </h3>
                </div>
                <div className='container-lg'>
                    <JotForm />
                </div>
            </div>
        </section>
    );
}
