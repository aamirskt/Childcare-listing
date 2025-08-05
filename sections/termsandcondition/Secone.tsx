import { Stack, Typography } from '@mui/material';

const Secone = () => {
  return (
    <Stack sx={{ display: 'flex', flexDirection: 'column', pb:15, pt:10 }}>
      <Typography variant="bodytext" >
        The terms and conditions of a childcare employee recruitment company form the legal foundation of the agreement between the company,
        childcare providers (clients), and job seekers (candidates). While the specific terms can vary widely depending on the company,
        jurisdiction, and services offered, here are some typical clauses that might be included:
      </Typography>

      <Typography variant="subheading3" sx={{pt:3}}>For Childcare Providers (Clients)</Typography>

      <Typography variant="bodytext" sx={{ pt: 3 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}> Service Agreement:</span> Detailed description of the recruitment services to
        be provided, including, but not limited to, job postings, candidate screenings, interviews, background checks, and placement
        services .
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}> Service Agreement:</span> Detailed description of the recruitment services to
        be provided, including, but not limited to, job postings, candidate screenings, interviews, background checks, and placement
        services .
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}>Fees and Payment Terms:</span>Clear explanation of the fee structure,
        including any upfront fees, success-based fees (e.g., a percentage of the candidate's annual salary), and terms of payment. This
        section may also cover expenses related to candidate screening and background checks
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}> Candidate Replacement Policy:</span> Conditions under which the recruitment
        company will provide a replacement candidate at no additional cost if the initially placed candidate leaves or is terminated within
        a specified period
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}> Confidentiality:</span> Obligations to protect confidential information
        shared during the recruitment process, including business practices and candidate details
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}> Liability and Indemnification:</span> Limits of the recruitment company's
        liability in case of disputes or issues arising from a candidate's conduct post-placement and conditions under which either party
        may be required to indemnify the other
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        For Job Seekers (Candidates)
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}> Registration and Representation:</span> Terms governing the registration of
        candidates, the accuracy of the information provided, and the company's right to represent the candidate to potential employers
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}>Background Checks and References:</span> Consent to conduct background checks
        and contact references as part of the vetting process
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}>Data Privacy:</span> How personal information will be collected, used, stored,
        and shared, in compliance with applicable data protection laws
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}> Employment Terms:</span> Clarification that the recruitment company is not
        the direct employer but facilitates placements with clients, and any employment terms and conditions will be directly negotiated
        with the employing childcare provider
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}> No Guarantee of Employment:</span> Acknowledgment that, while the recruitment
        company will make efforts to find suitable employment opportunities, there is no guarantee of placement
      </Typography>
      <Typography variant="subheading3" sx={{ pt: 3 }}>
        General Terms
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}> Governing Law and Jurisdiction:</span> The laws governing the agreement and
        the jurisdiction for resolving disputes.
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}> Dispute Resolution:</span> Procedures for handling disputes, which may
        include mediation or arbitration prior to litigation.
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}>Amendments and Waiver:</span> Conditions under which the agreement can be
        amended and the implications of waiving any terms.
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}>Termination:</span> Conditions under which either party can terminate the
        agreement and the obligations upon termination, such as final payments or return of materials.
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 2 }}>
        <span style={{ fontSize: '18px', fontWeight: '600' }}>Entire Agreement:</span> Statement that the agreement constitutes the entire
        understanding between the parties regarding its subject matter.
      </Typography>
      <Typography variant="bodytext" sx={{ pt: 4 }}>
        It's important for both childcare providers and candidates to thoroughly review and understand the terms and conditions before
        entering into an agreement with a recruitment company. Legal advice may also be sought to clarify rights and obligations under the
        agreement.
      </Typography>
    </Stack>
  );
};

export default Secone;
