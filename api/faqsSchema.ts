


export function getFaqsByCategory(category: any, cityName: any) {
    console.log(category, cityName, 'category and cityName in getFaqsByCategory');
  switch (category) {
    case 'infant daycares':
      return {
     "@context": "https://schema.org",
     "@type": "FAQPage",
     "mainEntity": [
       {
         "@type": "Question",
         "name": "What is the ideal age to enroll my baby in infant daycare?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Most daycares accept infants as early as 6 weeks. At ChildrenKare, we welcome babies starting from 6 weeks of age in a safe, nurturing environment."
         }
       },
       {
         "@type": "Question",
         "name": "How do you ensure safety in your infant daycare center?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "We follow strict safety protocols, including staff background checks, secure entry systems, and continuous room monitoring to ensure your baby’s well-being."
         }
       },
       {
         "@type": "Question",
         "name": "What’s the caregiver-to-child ratio at ChildrenKare?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Our infant room maintains a low caregiver-to-child ratio of 1:3, ensuring each baby receives personalized attention and care."
         }
       },
       {
         "@type": "Question",
         "name": "Do you provide diapers, formula, or baby food?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Parents typically supply diapers, wipes, and formula. However, we’re happy to work with your preferences and provide support where needed."
         }
       },
       {
         "@type": "Question",
         "name": "Can I visit my baby during the day?",
         "acceptedAnswer": {
           "@type": "Answer",
           "text": "Absolutely! We encourage parent visits. Our open-door policy lets you check in anytime during the day."
         }
       }
     ]
   }
;
    case 'toddler daycares':
      return  {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What age qualifies as a toddler for daycare enrollment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At ChildrenKare, toddlers are typically between 12 months and 36 months old. We offer age-appropriate care and activities for this developmental stage."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of activities do you offer for toddlers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our toddler program includes sensory play, music, language development, outdoor time, and structured routines that support social and emotional growth."
          }
        },
        {
          "@type": "Question",
          "name": "How do you handle toddler separation anxiety?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our caregivers are trained to comfort children through gentle transitions, personalized attention, and strong communication with parents."
          }
        },
        {
          "@type": "Question",
          "name": "What safety measures are in place for toddlers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain secure access, childproofed classrooms, and regular sanitization to ensure a safe and clean environment for all toddlers."
          }
        },
        {
          "@type": "Question",
          "name": `Do you offer part-time daycare for toddlers in ${cityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide both full-time and part-time toddler care options to suit the needs of working families and flexible schedules."
          }
        }
      ]
    };
    case 'preschools':
      return {
       "@context": "https://schema.org",
       "@type": "FAQPage",
       "mainEntity": [
         {
           "@type": "Question",
           "name": `What age can a child start preschool in ${cityName}?`,
           "acceptedAnswer": {
             "@type": "Answer",
             "text": "Most children start preschool between ages 3 and 5. At ChildrenKare, we welcome preschoolers as soon as they are potty-trained and developmentally ready for structured learning."
           }
         },
         {
           "@type": "Question",
           "name": "What curriculum do your preschools follow?",
           "acceptedAnswer": {
             "@type": "Answer",
             "text": "We feature a mix of early childhood education approaches such as Creative Curriculum, Montessori-inspired learning, and play-based activities designed to prepare children for kindergarten."
           }
         },
         {
           "@type": "Question",
           "name": "Are your preschool teachers certified?",
           "acceptedAnswer": {
             "@type": "Answer",
             "text": "Yes, all our preschool teachers meet state licensing requirements and receive ongoing training in early childhood development and classroom safety."
           }
         },
         {
           "@type": "Question",
           "name": "Do you offer full-day or half-day preschool programs?",
           "acceptedAnswer": {
             "@type": "Answer",
             "text": "ChildrenKare offers both half-day and full-day preschool options to accommodate different family schedules."
           }
         },
         {
           "@type": "Question",
           "name": "How do you support school readiness in preschoolers?",
           "acceptedAnswer": {
             "@type": "Answer",
             "text": "Our programs focus on building pre-literacy, basic math, social-emotional skills, independence, and curiosity through engaging, age-appropriate learning."
           }
         }
       ]
     };
    case 'childcare':
      return {
       "@context": "https://schema.org",
       "@type": "FAQPage",
       "mainEntity": [
         {
           "@type": "Question",
           "name": `What childcare options are available in ${cityName}?`,
           "acceptedAnswer": {
             "@type": "Answer",
             "text": `${cityName} offers various childcare options including full-time daycare centers, part-time preschools, in-home childcare, nanny services, and before- and after-school programs.`
           }
         },
         {
           "@type": "Question",
           "name": `How can I find licensed and trustworthy childcare providers in ${cityName}?`,
           "acceptedAnswer": {
             "@type": "Answer",
             "text": "ChildrenKare helps you discover verified, licensed providers in your area. You can explore reviews, pricing, and availability all in one place."
           }
         },
         {
           "@type": "Question",
           "name": `Is there affordable childcare in ${cityName} for low-income families?`,
           "acceptedAnswer": {
             "@type": "Answer",
             "text": "Yes! Many providers offer sliding scale fees or accept CCAP (Colorado Child Care Assistance Program). ChildrenKare highlights affordable care options for all income levels."
           }
         },
         {
           "@type": "Question",
           "name": `What is the average cost of childcare in ${cityName}?`,
           "acceptedAnswer": {
             "@type": "Answer",
             "text": "Childcare costs vary but typically range from $800 to $1,200 per month depending on the child’s age, care type, and provider location."
           }
         },
         {
           "@type": "Question",
           "name": "Do any childcare centers offer flexible hours or drop-in care?",
           "acceptedAnswer": {
             "@type": "Answer",
             "text": `Yes, some providers in ${cityName} offer early morning care, evening care, and drop-in options for parents with non-traditional work schedules.`
           }
         }
       ]
     };
    default:
      return null
  }
}