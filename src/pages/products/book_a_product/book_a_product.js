import React from 'react';
import emailjs from '@emailjs/browser'
import { Helmet } from 'react-helmet';
import './book_a_product.css'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import Navbar from '../../../components/Navbar';

const book_a_product = () => {

  const form = React.createRef();
  const sendEmail = (e) => {

    e.preventDefault();
    emailjs
      .sendForm(
        'service_zosy3uj',  //service id
        'template_zjaqde4', //templat id
        form.current,
        'bqyJ6eZfK0EJfsbWU') //public key (dashboard kısmında account menüsünde yer almaktadır.)
      .then((result) => {
        console.log(result.text);

      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Guest Traction</title>
        <meta name='description' content='Welcome to Guest Traction Book a Product Page' />
        <link rel="canonical" href="http://guesttraction.com/book_a_product" />
      </Helmet>
      <Navbar />
      <Grid>
        <Card className="card" >
          <CardContent>
            <Typography gutterBottom variant="h5" className='title'>
              Please Contact Us
            </Typography>
            <form ref={form} onSubmit={sendEmail}>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Name" variant="outlined" name="user_name" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Surname" variant="outlined" name="user_surname" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Email" name="user_email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Phone Number" name="user_number" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField multiline rows={1} placeholder="Subject" variant="outlined" name="user_subject" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField multiline rows={4} placeholder="Message" variant="outlined" name="message" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default book_a_product