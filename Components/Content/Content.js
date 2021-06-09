import { Container } from '@material-ui/core';

const content = {
    intro: 'Submit Your Complaint',
    subTitle:
        'Do you have a complaint against a company or organization and need legal support? Submit your complaint below and be connected with a class action attorney in our network.',
};

export default function Content() {
    return (
        <section className='section content-section'>
            <Container className='text-center' maxWidth='lg'>
                <Container maxWidth='sm'>
                    <h2 className='heading-2'>{content.intro}</h2>
                </Container>
                <div className='content-wrap'>
                    <h3 className='heading-3'>
                        <em>{content.subTitle}</em>
                    </h3>
                </div>
            </Container>
        </section>
    );
}
