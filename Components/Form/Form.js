import { Button, Grid, TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Form = () => {
    return (
        <div className='form-wrap'>
            <form className='form' action='https://submit.jotform.com/submit/211414202682040/' method='post' name='form_211414202682040' id='211414202682040' accept-charset='utf-8'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField id='input_4' name='q4_name' label='Name' variant='filled' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField id='input_6' name='q6_email' label='Email' variant='filled' />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField id='input_7_full' name='q7_phoneNumber[full]' label='Telephone' variant='filled' />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <FormControl variant='filled'>
                            <InputLabel id='state-select'>State</InputLabel>
                            <Select
                                labelId='state-select'
                                id='input_8'
                                name='q8_state'
                            >
                                <MenuItem value={''}>None</MenuItem>
                                <MenuItem value={'U.S. Armed Forces AA'}> U.S. Armed Forces AA </MenuItem>
                                <MenuItem value={'U.S. Armed Forces AP'}> U.S. Armed Forces AP </MenuItem>
                                <MenuItem value={'Alabama'}> Alabama </MenuItem>
                                <MenuItem value={'Alaska'}> Alaska </MenuItem>
                                <MenuItem value={'American Samoa'}> American Samoa </MenuItem>
                                <MenuItem value={'Arizona'}> Arizona </MenuItem>
                                <MenuItem value={'Arkansas'}> Arkansas </MenuItem>
                                <MenuItem value={'California'}> California </MenuItem>
                                <MenuItem value={'Colorado'}> Colorado </MenuItem>
                                <MenuItem value={'Connecticut'}> Connecticut </MenuItem>
                                <MenuItem value={'Delaware'}> Delaware </MenuItem>
                                <MenuItem value={'District of Columbia'}> District of Columbia </MenuItem>
                                <MenuItem value={'Federated States of Micronesia'}> Federated States of Micronesia </MenuItem>
                                <MenuItem value={'Florida'}> Florida </MenuItem>
                                <MenuItem value={'Georgia'}> Georgia </MenuItem>
                                <MenuItem value={'Guam'}> Guam </MenuItem>
                                <MenuItem value={'Hawaii'}> Hawaii </MenuItem>
                                <MenuItem value={'Idaho'}> Idaho </MenuItem>
                                <MenuItem value={'Illinois'}> Illinois </MenuItem>
                                <MenuItem value={'Indiana'}> Indiana </MenuItem>
                                <MenuItem value={'Iowa'}> Iowa </MenuItem>
                                <MenuItem value={'Kansas'}> Kansas </MenuItem>
                                <MenuItem value={'Kentucky'}> Kentucky </MenuItem>
                                <MenuItem value={'Louisiana'}> Louisiana </MenuItem>
                                <MenuItem value={'Maine'}> Maine </MenuItem>
                                <MenuItem value={'Marshall Islands'}> Marshall Islands </MenuItem>
                                <MenuItem value={'Maryland'}> Maryland </MenuItem>
                                <MenuItem value={'Massachusetts'}> Massachusetts </MenuItem>
                                <MenuItem value={'Michigan'}> Michigan </MenuItem>
                                <MenuItem value={'Minnesota'}> Minnesota </MenuItem>
                                <MenuItem value={'Mississippi'}> Mississippi </MenuItem>
                                <MenuItem value={'Missouri'}> Missouri </MenuItem>
                                <MenuItem value={'Montana'}> Montana </MenuItem>
                                <MenuItem value={'Nebraska'}> Nebraska </MenuItem>
                                <MenuItem value={'Nevada'}> Nevada </MenuItem>
                                <MenuItem value={'New Hampshire'}> New Hampshire </MenuItem>
                                <MenuItem value={'New Jersey'}> New Jersey </MenuItem>
                                <MenuItem value={'New Mexico'}> New Mexico </MenuItem>
                                <MenuItem value={'New York'}> New York </MenuItem>
                                <MenuItem value={'North Carolina'}> North Carolina </MenuItem>
                                <MenuItem value={'North Dakota'}> North Dakota </MenuItem>
                                <MenuItem value={'Northern Mariana Islands'}> Northern Mariana Islands </MenuItem>
                                <MenuItem value={'Ohio'}> Ohio </MenuItem>
                                <MenuItem value={'Oklahoma'}> Oklahoma </MenuItem>
                                <MenuItem value={'Oregon'}> Oregon </MenuItem>
                                <MenuItem value={'Pennsylvania'}> Pennsylvania </MenuItem>
                                <MenuItem value={'Puerto Rico'}> Puerto Rico </MenuItem>
                                <MenuItem value={'Rhode Island'}> Rhode Island </MenuItem>
                                <MenuItem value={'South Carolina'}> South Carolina </MenuItem>
                                <MenuItem value={'South Dakota'}> South Dakota </MenuItem>
                                <MenuItem value={'Tennessee'}> Tennessee </MenuItem>
                                <MenuItem value={'Texas'}> Texas </MenuItem>
                                <MenuItem value={'U.S. Virgin Islands'}> U.S. Virgin Islands </MenuItem>
                                <MenuItem value={'Utah'}> Utah </MenuItem>
                                <MenuItem value={'Vermont'}> Vermont </MenuItem>
                                <MenuItem value={'Virginia'}> Virginia </MenuItem>
                                <MenuItem value={'Washington'}> Washington </MenuItem>
                                <MenuItem value={'West Virginia'}> West Virginia </MenuItem>
                                <MenuItem value={'Wisconsin'}> Wisconsin </MenuItem>
                                <MenuItem value={'Wyoming'}> Wyoming </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <TextField id='input_9' name='q9_zipCode' label='Zip Code' variant='filled' />
                    </Grid>
                    <Grid item xs={12}>
                        <Button id='input_2' type='submit' variant='contained'>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default Form;