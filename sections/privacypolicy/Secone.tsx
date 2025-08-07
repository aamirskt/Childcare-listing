import { Stack, Typography } from '@mui/material';

const Secone = () => {
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', pb:15, pt:10 }}>
      <Typography variant="bodytext">Last updated: [Insert Date]</Typography>

      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Introduction:
      </Typography>

      <Typography variant="bodytext" sx={{ pt: 3 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}> EmployeeKARE</span> ("we", "us", or "our") is committed to protecting the
        privacy and security of your personal information. This privacy policy explains how we collect, use, disclose, and safeguard your
        information when you visit our website employeekare.com, use our mobile application, or engage in our services as a job seeker,
        childcare provider, or site visitor.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Information We Collect:
      </Typography>
      <ul style={{}}>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            <span style={{ fontSize: '18px', fontWeight: '600' }}> Register for our services -</span>This may include your name, address,
            email address, telephone number, resume, employment history, qualifications, and references.
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            <span style={{ fontSize: '18px', fontWeight: '600' }}> Use our website or mobile app -</span> We collect technical information
            such as your IP address, browser type, and usage details through cookies and similar tracking technologies.
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            <span style={{ fontSize: '18px', fontWeight: '600' }}> Interact with us directly -</span> Information you provide when you
            contact us with questions, feedback, or otherwise communicate with us.
          </Typography>
        </li>
      </ul>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Use of Your Information:
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        Your information may be used for the following purposes:
      </Typography>
      <ul style={{}}>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            To provide and manage our services, including matching job seekers with childcare providers.
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            To communicate with you about your account or transactions with us and send you information about features and enhancements.
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            To conduct research and analysis to improve our services.
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            To comply with legal obligations, such as responding to legal processes or governmental requests.
          </Typography>
        </li>
      </ul>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Sharing of Your Information:
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        We may share your information with:
      </Typography>
      <ul style={{}}>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Childcare providers, when you are a job seeker applying for a position.
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Service providers who perform services on our behalf, such as background check companies, but strictly for the purpose of
            carrying out their services.
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Law enforcement, government officials, or other third parties in response to a verified request relating to a criminal
            investigation or alleged illegal activity.
          </Typography>
        </li>
      </ul>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Your Data Protection Rights:
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        Depending on your location, you may have certain rights under data protection laws, including:
      </Typography>
      <ul style={{}}>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            The right to access and receive a copy of your personal information.
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            The right to request correction of your personal information if it is inaccurate.
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            The right to request deletion of your personal information in certain circumstances.
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            The right to object to processing or to request restriction of processing your personal information.
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            The right to data portability.
          </Typography>
        </li>
      </ul>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        To exercise any of these rights, please contact us at [insert contact information].
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Data Security:
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        We implement appropriate technical and organizational measures to protect the security of your personal information against
        accidental or unlawful destruction, loss, alteration, unauthorized disclosure or access.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Changes to Our Privacy Policy:
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last updated" date and the
        updated version will be effective as soon as it is accessible.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Contact Us:
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        If you have any questions or concerns about our privacy policy or the handling of your personal information, please contact us at
        [insert contact information].
      </Typography>
    </Stack>
  );
};

export default Secone;
