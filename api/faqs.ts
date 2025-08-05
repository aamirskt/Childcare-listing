
export function getFaqsByCategory(category: any, cityName: any) {
    console.log(category, cityName, 'category and cityName in getFaqsByCategory');
  switch (category) {
    case 'infant daycares':
      return [
        {
          question: 'What is the ideal age to enroll my baby in infant daycare?',
          answer: 'Most daycares accept infants as early as 6 weeks. At ChildrenKare, we welcome babies starting from 6 weeks of age in a safe, nurturing environment.'
        },
        {
          question: 'How do you ensure safety in your infant daycare center?',
          answer: 'We follow strict safety protocols, including staff background checks, secure entry systems, and continuous room monitoring to ensure your baby’s well-being.'
        },
        {
          question: 'What’s the caregiver-to-child ratio at ChildrenKare?',
          answer: 'Our infant room maintains a low caregiver-to-child ratio of 1:3, ensuring each baby receives personalized attention and care.'
        },
        {
          question: 'Do you provide diapers, formula, or baby food?',
          answer: 'Parents typically supply diapers, wipes, and formula. However, we’re happy to work with your preferences and provide support where needed.'
        },
        {
          question: 'Can I visit my baby during the day?',
          answer: 'Absolutely! We encourage parent visits. Our open-door policy lets you check in anytime during the day.'
        }
      ];
    case 'toddler daycares':
      return [
        {
          question: 'What age qualifies as a toddler for daycare enrollment?',
          answer: 'At ChildrenKare, toddlers are typically between 12 months and 36 months old. We offer age-appropriate care and activities for this developmental stage.'
        },
        {
          question: 'What kind of activities do you offer for toddlers?',
          answer: 'Our toddler program includes sensory play, music, language development, outdoor time, and structured routines that support social and emotional growth.'
        },
        {
          question: 'How do you handle toddler separation anxiety?',
          answer: 'Our caregivers are trained to comfort children through gentle transitions, personalized attention, and strong communication with parents.'
        },
        {
          question: 'What safety measures are in place for toddlers?',
          answer: 'We maintain secure access, childproofed classrooms, and regular sanitization to ensure a safe and clean environment for all toddlers.'
        },
        {
          question: `Do you offer part-time daycare for toddlers in ${cityName}?`,
          answer: 'Yes, we provide both full-time and part-time toddler care options to suit the needs of working families and flexible schedules.'
        }
      ];
    case 'preschools':
      return [
        {
          question: `What age can a child start preschool in ${cityName}?`,
          answer: 'Most children start preschool between ages 3 and 5. At ChildrenKare, we welcome preschoolers as soon as they are potty-trained and developmentally ready for structured learning.'
        },
        {
          question: 'What curriculum do your preschools follow?',
          answer: 'We feature a mix of early childhood education approaches such as Creative Curriculum, Montessori-inspired learning, and play-based activities designed to prepare children for kindergarten.'
        },
        {
          question: 'Are your preschool teachers certified?',
          answer: 'Yes, all our preschool teachers meet state licensing requirements and receive ongoing training in early childhood development and classroom safety.'
        },
        {
          question: 'Do you offer full-day or half-day preschool programs?',
          answer: 'ChildrenKare offers both half-day and full-day preschool options to accommodate different family schedules.'
        },
        {
          question: 'How do you support school readiness in preschoolers?',
          answer: 'Our programs focus on building pre-literacy, basic math, social-emotional skills, independence, and curiosity through engaging, age-appropriate learning.'
        }
      ];
    case 'childcare':
      return [
        {
          question: `What childcare options are available in ${cityName}?`,
          answer: `${cityName} offers various childcare options including full-time daycare centers, part-time preschools, in-home childcare, nanny services, and before- and after-school programs.`
        },
        {
          question: `How can I find licensed and trustworthy childcare providers in ${cityName}?`,
          answer: 'ChildrenKare helps you discover verified, licensed providers in your area. You can explore reviews, pricing, and availability all in one place.'
        },
        {
          question: `Is there affordable childcare in ${cityName} for low-income families?`,
          answer: 'Yes! Many providers offer sliding scale fees or accept CCAP (Colorado Child Care Assistance Program). ChildrenKare highlights affordable care options for all income levels.'
        },
        {
          question: `What is the average cost of childcare in ${cityName}?`,
          answer: 'Childcare costs vary but typically range from $800 to $1,200 per month depending on the child’s age, care type, and provider location.'
        },
        {
          question: 'Do any childcare centers offer flexible hours or drop-in care?',
          answer: `Yes, some providers in ${cityName} offer early morning care, evening care, and drop-in options for parents with non-traditional work schedules.`
        }
      ];
    default:
      return [
        {
          question: `What types of daycare services are available in ${cityName}?`,
          answer: `In ${cityName}, you’ll find a wide range of options including infant care, toddler programs, preschools, part-time and full-time daycare, drop-in care, and after-school care.`
        },
        {
          question: `How much does daycare typically cost in ${cityName}?`,
          answer: 'The average weekly cost ranges from $150 to $300 depending on age, program type, and provider. ChildrenKare also highlights affordable daycare options and providers with flexible pricing.'
        },
        {
          question: `Are there licensed home daycares near me in ${cityName}?`,
          answer: `Yes! Many families in ${cityName} choose licensed in-home daycares for smaller class sizes and a home-like environment. ChildrenKare connects you with trusted local providers.`
        },
        {
          question: 'What should I look for when choosing a daycare?',
          answer: 'Look for licensed providers with experienced staff, a clean and safe facility, small child-to-caregiver ratios, flexible hours, and strong parent reviews.'
        },
        {
          question: `Do any ${cityName} daycares offer extended hours or weekend care?`,
          answer: 'Yes, several local daycares offer extended hours including early drop-off, evening care, and weekend services to accommodate working parents.'
        }
      ]
  }
}