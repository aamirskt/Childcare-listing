import { Stack, Typography } from '@mui/material';

const SecTwo = () => {
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', pb: 15, pt: 10 }}>
      <Typography variant="bodytext">Effective Date: 11/03/2024</Typography>

      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Introduction:
      </Typography>

      <Typography variant="bodytext" sx={{ pt: 3 }}>
        At ChildrenKARE, we are committed to protecting the privacy and security of the personal information of our clients, their families,
        and especially the children in our care. This privacy policy outlines how we collect, use, store, and protect personal information.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Information We Collect:
      </Typography>
      <ul style={{}}>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Child’s name, age, and birth date
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Parent or legal guardian names, addresses, and contact details
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Health information about the child, including allergies and special needs
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Emergency contact information
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Photographs or video recordings for identification or promotional purposes, with consent
          </Typography>
        </li>
      </ul>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        How We Use the Information:
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        The information we collect is used to:
      </Typography>
      <ul style={{}}>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Provide and manage childcare services
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Communicate with parents or guardians about their child’s care and any relevant updates or events
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Ensure the health and safety of children in our care
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Meet legal or regulatory requirements
          </Typography>
        </li>
      </ul>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Sharing of Information:
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        We do not sell or rent personal information. We may disclose personal information if required by law, with regulatory authorities,
        or to protect the rights and safety of the children in our care. Any sharing of information will be done with utmost care and
        privacy protection.
      </Typography>

      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Data Storage and Security:
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        We take the security of personal information seriously and implement appropriate physical, technical, and administrative measures to
        protect it from unauthorized access, disclosure, alteration, or destruction.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Your Rights:
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        Parents and legal guardians have the right to:
      </Typography>
      <ul style={{}}>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Access the personal information we hold about their child
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Request correction of inaccurate information
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Withdraw consent for use of their child’s photographs or videos
          </Typography>
        </li>
        <li>
          <Typography variant="bodytext" sx={{ pt: 2 }}>
            Request deletion of their child’s personal information, subject to legal and operational requirements
          </Typography>
        </li>
      </ul>

      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Changes to Our Privacy Policy:
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        We may update this policy from time to time. We will notify you of any significant changes and indicate at the top of the policy
        when it was last updated.
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        Contact Us:
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        If you have questions or concerns about our privacy practices, please contact us.
      </Typography>
    </Stack>
  );
};

export default SecTwo;
