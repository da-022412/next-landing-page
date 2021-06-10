import { Box, Container } from '@material-ui/core';

import Form from '../Form/Form';

const content = {
    intro: 'Why Would I Be Owed Money?',
    subTitle:
        'California state law requires businesses to clearly disclose the terms of any automatically renewing subscription offer and obtain customers’ affirmative consent to those terms before they subscribe.   The Atlantic may not comply with these requirements.',
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
                    <h3 className='heading-3'>
                        <b>
                            If you have been charged a renewal fee for The
                            Atlantic, we would like to hear from you.
                        </b>
                    </h3>
                </Box>
                <Container maxWidth='sm'>
                    <Form />
                </Container>
            </Container>
        </Box>
    );
}
