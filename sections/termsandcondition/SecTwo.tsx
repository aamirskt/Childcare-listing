import { Stack, Typography } from '@mui/material';

const SecTwo = () => {
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', pb: 15, pt: 10 }}>
      <Typography variant="bodytext">Effective Date: 11/03/2024</Typography>
      <Typography variant="bodytext" sx={{ pt: 3 }}>
        Welcome to ChildrenKARE("we", "us", "our"), your trusted partner in connecting parents and guardians ("Parents") with quality
        childcare providers ("Providers"). These Terms and Conditions ("Terms") govern your access to and use of our referral services,
        website, and any related services (collectively, the "Service").
      </Typography>

      <Typography variant="subheading3" sx={{ pt: 3 }}>
        1. Acceptance of Terms
      </Typography>

      <Typography variant="bodytext" sx={{ pt: 2 }}>
        By using our Service, you agree to be bound by these Terms, including our Privacy Policy and any other policies or agreements
        mentioned herein. If you do not agree to these Terms, do not use our Service.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        2. Service Description
      </Typography>

      <Typography variant="bodytext" sx={{ pt: 2 }}>
        We provide a referral platform that connects Parents seeking childcare services with Providers. We do not directly offer childcare
        services, and the actual contract for service is solely between the Parent and the Provider.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        3. User Obligations
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}> Parents:</span> Must provide accurate, current, and complete information
        during the referral process. You are responsible for conducting your own diligence on Providers.
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}> Providers:</span> Must maintain up-to-date credentials, certifications, and
        background checks as required by law and our policies. Must provide accurate and complete information about your services.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        4. Fees and Payments
      </Typography>
      
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Details about any fees for using our Service will be communicated to you at the point of registration or service use. Any
            applicable fees are due at the time of the transaction, as outlined in our payment policies.
          </Typography>
     
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        6. Limitation of Liability
      </Typography>

      <Typography variant="bodytext" sx={{ pt: 2 }}>
        We act as an intermediary between Parents and Providers. We are not responsible for the actions, omissions, or the quality of
        service provided by Providers. Our liability to you for any cause whatsoever, and regardless of the form of the action, will at all
        times be limited to the amount paid, if any, by you to us for the Service during the term of membership.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        7. Disputes Between Users
      </Typography>

      <Typography variant="bodytext" sx={{ pt: 2 }}>
        Disputes between Parents and Providers are to be resolved directly between the involved parties. We may offer mediation assistance
        at our discretion but are not obligated to resolve such disputes.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        8. Intellectual Property
      </Typography>

      <Typography variant="bodytext" sx={{ pt: 2 }}>
        The content, features, and functionality of our Service are and will remain the exclusive property of ChildrenKARE and its
        licensors.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        9. Amendments to Terms
      </Typography>

      <Typography variant="bodytext" sx={{ pt: 2 }}>
        We reserve the right to amend these Terms at any time. All amendments will be posted online. Your continued use of the Service after
        such changes constitutes your acceptance of the new Terms.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        10. Governing Law
      </Typography>

      <Typography variant="bodytext" sx={{ pt: 2 }}>
        These Terms shall be governed by and construed in accordance with the laws of USA, without giving effect to any principles of
        conflicts of law.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        11. Contact Information
      </Typography>

      <Typography variant="bodytext" sx={{ pt: 2 }}>
        For any questions or concerns regarding these Terms, please contact us.
      </Typography>
    </Stack>
  );
};

export default SecTwo;
