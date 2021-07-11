import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Have you recently purchased sunscreen?',
    subIntro:
        'Recent scientific research reveals that dozens of sunscreens contain benzene, a known carcinogen.  But this fact has been hidden from the public. Consumers who have purchased these sunscreens may have the right to monetary compensation, whether or not they became sick. Get a free assessment here.',
    title: 'Why might I be entitled to compensation as a stockholder of Tyson?',
    subTitle:
        'Consumers are able to stand up to companies using harmful products. Our attorneys are helping individuals who have purchased sunscreens with harmful chemicals to stand up to manufacturers and deter this behavior.',
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
                        <b>{content.emphasis}</b>
                    </h3>
                    <List />
                    <div className='container-md'>
                        <Faq />
                    </div>
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
