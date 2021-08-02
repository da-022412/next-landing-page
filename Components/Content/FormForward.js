import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Have you Purchased Aerosol Sunscreen Produced by Neutragena or Aveeno?',
    subIntro:
        'Many of these have been found to contain benzene, a chemical that causes cancer. If you have purchased one of the sunscreens below, you may be entitled to compensation.',
    title: 'Five NEUTROGENA® and AVEENO® aerosol sunscreen product lines have been found to contain benzene and have been recalled by the manufacturer, now subject to the FDA MedWatch Adverse Event Reporting Program. The specific sunscreens include the following:',
    subTitle:
        'Recently, one purchaser suffered from burns and a damaged house when her Kidde fire extinguisher failed to operate. We urge you to check your fire extinguisher brand and contact us if it’s a Kidde. Even if you’ve owned a Kidde in the past you are eligible to take action.',
    emphasis:
        'If you have purchased any of these sunscreens, you may be entitled to compensation and can help deter the business practices that lead to such a dangerous byproduct affecting consumers. Know your rights. Get in touch today at no cost.',
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
                    <List />
                </div>
                <div className='content-wrap'>
                    <h3 className='heading-3'>
                        <em>{false}</em>
                    </h3>
                    <h3 className='heading-3'>
                        <b>{content.emphasis}</b>
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
