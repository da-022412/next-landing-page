import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box,
    Container,
    Typography,
} from '@material-ui/core';

const content = {
    q1: 'Do I have a claim?',
    a1: 'If you have purchased any of the sunscreens listed above, you may have a claim whether or not you have developed cancer. See if you are owed compensation at no cost today.',
    q2: 'Does this cost me anything?',
    a2: 'No.  We bring consumer lawsuits on a contingency basis, meaning that you don’t have to pay anything, and we only get paid if you win.',
};

const Faq = () => {
    return (
        <Container maxWidth='md'>
            <Box>
                <h3 className='heading-3'>Frequently Asked Questions</h3>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                    >
                        <Typography>{content.q1}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='answer'>
                        <Typography>{content.a1}</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel2a-content'
                        id='panel2a-header'
                    >
                        <Typography>{content.q2}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='answer'>
                        <Typography>{content.a2}</Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>
    );
};

export default Faq;
