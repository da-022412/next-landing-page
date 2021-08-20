import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Do you own a Philips CPAP or other Philips Respironics device?',
    subIntro:
        'If so, your genetic information may have been illegally shared and you may be entitled to cash compensation. Speak with our investigating attorneys today for a free review of your rights.',
    title: 'arious Philips products cause harm as a polyester-based polyurethane foam meant for dampening sound and vibration breaks down, leading users to breath in chemicals or ingesting debris.',
    subTitle:
        'The FDA has reported that possible risks of particulate and chemical exposure from the recalled devices include asthma, skin and respiratory-tract irritation, and “toxic and carcinogenic effects” to organs including the kidneys and liver. ',
    emphasis:
        'If you have owned a Philips CPAP machine or any other Philips Respironics device, see if your device is affected and know your rights. Speak with an investigating attorney today at no cost.',
};

export default function Content() {
    return (
        <section className='content-section section'>
            <div className='container-md'>
                <div className='text-center'>
                    <h1 className='heading-1'>{content.intro}</h1>
                    <h2 className='heading-3'>
                        The FDA recently warned that more than a dozen Philips
                        Respironics machines could be “life threatening, cause
                        permanent impairment and require medical intervention.”
                        This includes exposure to cancer-causing carcinogens.{' '}
                        <b>
                            If you have owned one, you may be entitled to not
                            only a full or partial refund but additional funds
                            as well.
                        </b>
                    </h2>
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
                </div>
                <Faq />
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
