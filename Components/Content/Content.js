import JotForm from '../Form/JotForm';
import List from '../List/List';
import Faq from '../Faq/Faq';

const content = {
    intro: 'Have You Purchased A “Disinfecting” UV Light?',
    subIntro: 'If so, you may be owed money.',
    title: 'Why Would I Be Owed Money?',
    subTitle:
        'With the Covid-19 pandemic, many manufacturers are marketing ultraviolet-C (“UVC”) lights in order to disinfect surfaces in the home or similar spaces.  However, the U.S. Food and Drug Administration (“FDA”) reports that “[t]he effectiveness of UVC lamps in inactivating the SARS-CoV-2 virus is unknown because there is limited published data about the wavelength, dose, and duration of UVC radiation required to inactivate the [virus],” and that “[m]any of the UVC lamps sold for home use are of low dose.',
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
                    <div className='btn primary-btn'>
                        <a href='#form' className='is-white'>
                            Continue to Free Case Review
                        </a>
                    </div>
                </div>
            </div>
            <div className='container-lg text-center'>
                <div className='content-wrap'>
                    <h2 className='heading-2'>{content.title}</h2>
                    <h3 className='heading-3'>
                        <em>{content.subTitle}</em>
                    </h3>
                    <h3 className='heading-3'>
                        <em>
                            At the same time, the FDA warns consumers that “UVC
                            lamps used for disinfection purposes may pose
                            potential health and safety risks depending on the
                            UVC wavelength, dose, and duration of radiation
                            exposure.” Specifically, “UVC radiation can cause
                            severe burns (of the skin) and eye injuries
                            (photokeratitis),” and consumers should “[a]void
                            direct skin exposure to UVC radiation and never look
                            directly into a UVC light source, even briefly.”
                        </em>
                    </h3>
                    <h3 className='heading-3'>
                        <b>{content.emphasis}</b>
                    </h3>
                </div>
                <div className='container-sm'>
                    <JotForm />
                </div>
            </div>
        </section>
    );
}
