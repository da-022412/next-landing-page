import { Box, Container } from '@material-ui/core';

const content = {
    intro: 'Submit Your Complaint',
    subTitle:
        'Do you have a complaint against a company or organization and need legal support? Submit your complaint below and be connected with a class action attorney in our network.',
};

export default function Content() {
    return (
        <Box component='section' className='content-section' py={12}>
            <Container className='text-center' maxWidth='lg'>
                <Container maxWidth='sm'>
                    <h2 className='heading-2'>{content.intro}</h2>
                </Container>
                <Box className='content-wrap'>
                    <h3 className='heading-3'>
                        <em>{content.subTitle}</em>
                    </h3>
                </Box>
            </Container>
        </Box>
    );
}
