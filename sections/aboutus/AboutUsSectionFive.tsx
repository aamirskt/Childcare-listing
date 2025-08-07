import { Stack, Typography, Grid } from '@mui/material';
import sectionfiveImage1 from 'assets/images/icons/sectionfiveImage1.png';
// import FB from 'assets/images/icons/sectionfivefacebook.png';
// import Twitter from 'assets/images/icons/sectionfivetwitter.png';
// import LinkedIn from 'assets/images/icons/sectionfivelinkedin.png';
// import ALL from 'assets/images/icons/sectionfiveallIcons.png';

function AboutUsSectionFive() {
  const divStyle = {
    backgroundImage: `url(${sectionfiveImage1})`, // Replace with the path to your image
    backgroundSize: 'cover', // Adjust as needed
    backgroundRepeat: 'no-repeat',
    height: '100%'
    // maxWidth: '100%
  };
  return (
    <Stack style={divStyle} sx={{ px: { xs: 2, md: 15 }, py: 5 }}>
      <Stack sx={{ py: 3 }}>
        <Typography variant="h1" sx={{ color: '#fff' }}>
          Our Teams
        </Typography>
        <Typography variant="body1" component="p" sx={{ color: '#fff', py: 2, maxWidth: '570px' }}>
          Building an enterprise level site doesn't need nightmare or cost your thousands. Felix is purpose built for{' '}
        </Typography>
      </Stack>
      <Grid container spacing={2} display="flex" alignItems="center" sx={{ justifyContent: 'center' }}>
        <Grid item xs={0} sm={0} md={2}></Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Stack sx={{ background: '#fff', borderRadius: 2, py: 6, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ color: '#219EBC' }}>
              Waqar Khan
            </Typography>
            <Typography variant="h6" sx={{ color: '#219EBC' }}>
              Co-Founder of COMPANY
            </Typography>
            <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', pt: 2 }}>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.5348 11.6335L11.0817 8.03979H7.60512V5.69604C7.60512 4.68042 8.07387 3.74292 9.63637 3.74292H11.2379V0.656982C11.2379 0.656982 9.79262 0.383545 8.42543 0.383545C5.57387 0.383545 3.69887 2.14136 3.69887 5.26636V8.03979H0.495745V11.6335H3.69887V20.3835H7.60512V11.6335H10.5348Z"
                    fill="#219EBC"
                  />
                </svg>
              </a>
              <a href="https://twitter.com/children_kare" target="_blank" rel="noreferrer" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.5428 4.32104C19.324 3.73511 20.0271 3.03198 20.574 2.21167C19.8709 2.52417 19.0506 2.75854 18.2303 2.83667C19.0896 2.32886 19.7146 1.54761 20.0271 0.571045C19.2459 1.03979 18.3474 1.39136 17.449 1.58667C16.6678 0.766357 15.6131 0.297607 14.4412 0.297607C12.1756 0.297607 10.3396 2.13354 10.3396 4.39917C10.3396 4.71167 10.3787 5.02417 10.4568 5.33667C7.05838 5.14136 4.0115 3.50073 1.98025 1.03979C1.62869 1.62573 1.43338 2.32886 1.43338 3.11011C1.43338 4.51636 2.1365 5.76636 3.26931 6.50854C2.60525 6.46948 1.94119 6.31323 1.39431 6.00073V6.03979C1.39431 8.03198 2.80056 9.67261 4.67556 10.0632C4.36306 10.1414 3.97244 10.2195 3.62088 10.2195C3.34744 10.2195 3.11306 10.1804 2.83963 10.1414C3.34744 11.782 4.87088 12.9539 6.66775 12.9929C5.2615 14.0867 3.50369 14.7507 1.58963 14.7507C1.23806 14.7507 0.925564 14.7117 0.613064 14.6726C2.40994 15.8445 4.55838 16.5085 6.90213 16.5085C14.4412 16.5085 18.5428 10.2976 18.5428 4.86792C18.5428 4.67261 18.5428 4.51636 18.5428 4.32104Z"
                    fill="#219EBC"
                  />
                </svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4.48489 17.8835V6.20386H0.852076V17.8835H4.48489ZM2.64895 4.64136C3.82083 4.64136 4.75833 3.66479 4.75833 2.49292C4.75833 1.36011 3.82083 0.422607 2.64895 0.422607C1.51614 0.422607 0.578638 1.36011 0.578638 2.49292C0.578638 3.66479 1.51614 4.64136 2.64895 4.64136ZM18.0396 17.8835H18.0786V11.4773C18.0786 8.35229 17.3755 5.93042 13.7036 5.93042C11.9458 5.93042 10.774 6.90698 10.2661 7.80542H10.2271V6.20386H6.75051V17.8835H10.3833V12.1023C10.3833 10.5789 10.6568 9.13354 12.5318 9.13354C14.4068 9.13354 14.4458 10.8523 14.4458 12.2195V17.8835H18.0396Z"
                    fill="#219EBC"
                  />
                </svg>
              </a>

              {/* <img src={ALL} /> */}
              {/* <img src={Twitter}style={{width: "23.911px",height: "26.63px"}} />
            <img src={LinkedIn} style={{width: "21.52px",height: "26.63px",paddingLeft:2}}/> */}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Stack sx={{ background: '#fff', borderRadius: 2, py: 6, textAlign: 'center' }}>
            <Typography variant="h4" sx={{ color: '#219EBC' }}>
              Aamer Masood
            </Typography>
            <Typography variant="h6" sx={{ color: '#219EBC' }}>
              Co-Founder of COMPANY
            </Typography>
            <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Stack sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', pt: 2 }}>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.5348 11.6335L11.0817 8.03979H7.60512V5.69604C7.60512 4.68042 8.07387 3.74292 9.63637 3.74292H11.2379V0.656982C11.2379 0.656982 9.79262 0.383545 8.42543 0.383545C5.57387 0.383545 3.69887 2.14136 3.69887 5.26636V8.03979H0.495745V11.6335H3.69887V20.3835H7.60512V11.6335H10.5348Z"
                      fill="#219EBC"
                    />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/?lang=en"
                  target="_blank"
                  rel="noreferrer"
                  style={{ paddingLeft: '20px', paddingRight: '20px' }}
                >
                  <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18.5428 4.32104C19.324 3.73511 20.0271 3.03198 20.574 2.21167C19.8709 2.52417 19.0506 2.75854 18.2303 2.83667C19.0896 2.32886 19.7146 1.54761 20.0271 0.571045C19.2459 1.03979 18.3474 1.39136 17.449 1.58667C16.6678 0.766357 15.6131 0.297607 14.4412 0.297607C12.1756 0.297607 10.3396 2.13354 10.3396 4.39917C10.3396 4.71167 10.3787 5.02417 10.4568 5.33667C7.05838 5.14136 4.0115 3.50073 1.98025 1.03979C1.62869 1.62573 1.43338 2.32886 1.43338 3.11011C1.43338 4.51636 2.1365 5.76636 3.26931 6.50854C2.60525 6.46948 1.94119 6.31323 1.39431 6.00073V6.03979C1.39431 8.03198 2.80056 9.67261 4.67556 10.0632C4.36306 10.1414 3.97244 10.2195 3.62088 10.2195C3.34744 10.2195 3.11306 10.1804 2.83963 10.1414C3.34744 11.782 4.87088 12.9539 6.66775 12.9929C5.2615 14.0867 3.50369 14.7507 1.58963 14.7507C1.23806 14.7507 0.925564 14.7117 0.613064 14.6726C2.40994 15.8445 4.55838 16.5085 6.90213 16.5085C14.4412 16.5085 18.5428 10.2976 18.5428 4.86792C18.5428 4.67261 18.5428 4.51636 18.5428 4.32104Z"
                      fill="#219EBC"
                    />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4.48489 17.8835V6.20386H0.852076V17.8835H4.48489ZM2.64895 4.64136C3.82083 4.64136 4.75833 3.66479 4.75833 2.49292C4.75833 1.36011 3.82083 0.422607 2.64895 0.422607C1.51614 0.422607 0.578638 1.36011 0.578638 2.49292C0.578638 3.66479 1.51614 4.64136 2.64895 4.64136ZM18.0396 17.8835H18.0786V11.4773C18.0786 8.35229 17.3755 5.93042 13.7036 5.93042C11.9458 5.93042 10.774 6.90698 10.2661 7.80542H10.2271V6.20386H6.75051V17.8835H10.3833V12.1023C10.3833 10.5789 10.6568 9.13354 12.5318 9.13354C14.4068 9.13354 14.4458 10.8523 14.4458 12.2195V17.8835H18.0396Z"
                      fill="#219EBC"
                    />
                  </svg>
                </a>

                {/* <img src={ALL} /> */}
                {/* <img src={Twitter}style={{width: "23.911px",height: "26.63px"}} />
            <img src={LinkedIn} style={{width: "21.52px",height: "26.63px",paddingLeft:2}}/> */}
              </Stack>
              {/* <img src={ALL} /> */}
              {/* <img src={Twitter}style={{width: "23.911px",height: "26.63px"}} />
            <img src={LinkedIn} style={{width: "21.52px",height: "26.63px",paddingLeft:2}}/> */}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={0} sm={0} md={2}></Grid>
      </Grid>
    </Stack>
  );
}

export default AboutUsSectionFive;
