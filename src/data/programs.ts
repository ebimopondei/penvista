import antiguaBarbudaImg from '../assets/images/Q8ur6Q6zClAnjOLKQnYmoV9F8.png'
import visaFreeTravel from '../assets/images/PqmKeuNCL0rmNI7fUkdK8waAIU.png'
import familyFriendly from '../assets/images/yfVJJACIBr1cHlvUE8ekecbGUo.png'
import taxBenefits from '../assets/images/x6BaWLugKPczv96ILRlNYggwJk.png'

import dominicaImg from '../assets/images/8ZFOL3uuqX5LyRep9nZx2Cs2M.png'
import dominicaVisaFreeTravel from '../assets/images/kvi2hcZDszfVBB3HRZmwe3RM.jpg'
import dominicaEconomicDiversification from '../assets/images/h5L3XUJutZqT0NDvdMN0UeoeuRI.jpg'
import dominicaFreedomToLiveAndWork from '../assets/images/7OBRngQAfUcFvQCT1HEiIgqXfwc.jpg'

import grenadaImg from '../assets/images/FLfLDOVHoSO7MyTMaURjMEBlI.png'
import grenadaVisaFreeTravel from '../assets/images/aCzJ3mzBRIjtgqvqgMczdny1hXw.png'
import grenadaFamilyFriendlyFramework from '../assets/images/YjN7yN8KW4WvuxZvGuF9O2zsM.jpg'
import grenadaE2VisaEligibility from '../assets/images/dANbbSiblgjLqkVPAuiEJshk8I.jpg'

import stLuciaImg from '../assets/images/Rn2T8ofvBh2PnJrnIixEgAS0pk0.png'
import stLuciaGlobalMobility from '../assets/images/UuPnWHkqdJMEyOujSBq0vESrFpw.png'
import stLuciaSecurePlan from '../assets/images/T9fSylr7SnFgrhPCMHkZ4d3yOmk.jpg'
import stLuciaVisitorVisa from '../assets/images/WoGNs0E9mrOu6WeISTKYgWXMySk.jpg'

import stKittsImg from '../assets/images/4Ef0ooQryUudFCEEyuPYeAUrCs.png'
import stKittsVisaFreeTravel from '../assets/images/WVLV5uwGKwUMoje0kRJc7cOOna8.png'
import stKittsLegacy from '../assets/images/mO2jHqoYFMKByCxqqcShfJ4c370.jpg'
import stKittsSwiftProcessing from '../assets/images/uyqVGV6Ixy6rnibwz4Nvusk17dI.jpg'

export interface ProgramData {
  id: string;
  type: 'citizenship' | 'residency';
  title: string;
  heroImage: string;
  heroHeadline: string;
  download: string,
  stats: {
    countries?: number;
    investment?: string;
    months?: string;
  };
  about: {
    title: string;
    content: string[];
    bullets?: string[];
  };
  benefits: {
    icon: string; // we'll map this to a Lucide icon component in the UI
    title: string;
    description: string;
    image?: string;
  }[];
  requirements: {
    description: string;
    tabs: {
      id: string;
      label: string;
      items: {
        icon: string;
        title: string;
        description: string;
      }[];
    }[];
  };
  investment: {
    headline: string;
    description: string;
    subTitle: string;
    bullets?: string[]
  };
  process: {
    title: string;
    steps: {
      icon: string;
      title: string;
      description: string;
      timeframe: string;
    }[];
  };
}


export const programsInfo: Record<string, ProgramData> = 
{
  'antigua-barbuda': {
    id: 'antigua-barbuda',
    type: 'citizenship',
    title: 'Antigua & Barbuda',
    heroImage: antiguaBarbudaImg, // A nice Caribbean/Antigua style image
    heroHeadline: 'Antigua & Barbuda passport holders enjoy visa-free travel to 162 countries, including the European Schengen area, the UK, South Africa, Hong Kong, and China.',
    download: 'https://drive.google.com/file/d/1dehcwnAqp2vtS7TeHnS9n9aWfyu5rghE/view',
    stats: {
      countries: 162,
      investment: '$230,000',
      months: '6 - 12 Months'
    },
    about: {
      title: 'About Antigua & Barbuda',
      content: [
        'Antigua and Barbuda citizenship program by investment is one of the newest in the Caribbean & was launched in 2013',
        'Antigua & Barbuda, a British Commonwealth member boasts a thriving economy driven by tourism, financial services, and international banking. The country\'s dedication to eco-tourism and renewable energy reflects its commitment to sustainability while its stunning beaches and welcoming locals make it an ideal destination for both investment and lifestyle.'
      ],
      bullets: [
        'The capital of the country is St. John',
        'The currency is Eastern Caribbean Dollar',
        'The current population as of 2021 is 97,928 million'
      ]
    },
    benefits: [
      {
        icon: 'Passport',
        title: 'Visa-Free Travel',
        description: 'Enjoy visa free travel to 162 countries, including the European Schengen area, the UK, South Africa, Hong Kong, and Singapore.',
        image: visaFreeTravel // Approximate flag image or scenic view
      },
      {
        icon: 'Home',
        title: 'Family Friendly',
        description: 'Antiguan citizenship program stands out with its inclusive family policy. Live, work and study in Antigua and other CARICOM nations while diversifying your assets beyond your current region.',
        image: familyFriendly // Family image
      },
      {
        icon: 'Flag',
        title: 'Low Tax Rates',
        description: 'The nation provides comprehensive tax benefits, including zero taxation on worldwide income, capital gains, inheritance, wealth, and gift transfers.',
        image: taxBenefits // Tax/finance document image
      }
    ],
    requirements: {
      description: 'Key eligibility criteria and investment options for the Antigua & Barbuda Citizenship program.',
      tabs: [
        {
          id: 'eligibility',
          label: 'Application Eligibility',
          items: [
            { icon: 'Calendar', title: 'Age', description: '18 years or older' },
            { icon: 'Award', title: 'License', description: 'Valid proof of financial commitment' },
            { icon: 'Cloud', title: 'Records', description: 'Clean criminal record' },
            { icon: 'IdCard', title: 'Identification', description: 'Valid passport' }
          ]
        },
        {
          id: 'investment',
          label: 'Investment Options',
          items: [
            { icon: 'Building', title: 'Real Estate', description: 'Purchase approved real estate valued at USD 300,000 or more\n\nNon-refundable donation to NDF worth $230,000' },
            { icon: 'Wallet', title: 'Capital Transfer', description: 'Donate fund from $260,000 to the University of the West Indies (UWI)' }
          ]
        },
        {
          id: 'requirement',
          label: 'Requirement',
          items: [
            { icon: 'Receipt', title: 'Make a Purchase', description: 'Complete property purchase or investment' },
            { icon: 'CreditCard', title: 'Make a Transfer', description: 'Conclude payments for Government processing fees' }
          ]
        },
        {
          id: 'renewal',
          label: 'Renewal Conditions',
          items: [
            { icon: 'Building2', title: 'Investment', description: 'Maintain the qualifying investment' },
            { icon: 'MountainSun', title: 'Residency', description: 'Citizenship By Investment' }
          ]
        }
      ]
    },
    investment: {
      headline: 'The Antigua & Barbuda citizenship program grants passports through qualified economic contributions.',
      description: 'Since its inception in 2013, the Antigua & Barbuda Citizenship by Investment Program has offered a streamlined pathway to citizenship in a stable and politically secure environment. With a starting investment of $230,000, you can obtain citizenship for a family of up to four, granting access to a powerful passport and a dependable Plan B.',
      subTitle: 'Investment Options',
      bullets: [
        'National Development Fund - $230,000 & Real Estate - $300,000',
        'Donate to the University of the West Indies (UWI) Fund - $260,000',
      ]
    },
    process: {
      title: 'Our Process',
      steps: [
        {
          icon: 'CornerUpRight',
          title: 'Preparation',
          description: "Ready to begin your Caribbean journey? Our team makes it simple. We'll review your eligibility, handle the paperwork, and guide you through property selection in Antigua and Barbuda. From initial chat to final approval, we're with you every step. Let's turn your Caribbean citizenship dreams into reality.",
          timeframe: 'Month 1'
        },
        {
          icon: 'CornerUpLeft',
          title: 'Application review and submission',
          description: "Achieve peace of mind and tranquility with us. We double-check every detail before submission, making sure your application shines. Our team works closely with Antigua's Citizenship Unit throughout the process, keeping things smooth and on track. Just relax, we've got the details covered.",
          timeframe: 'Months 2 - 4'
        },
        {
          icon: 'CornerUpRight',
          title: 'Final approval and Visa Issuance',
          description: "Almost there! Once approved, you'll make the final investment and government payments. Then comes the exciting part, receiving your certificates and brand new Antigua and Barbuda passports.",
          timeframe: 'Months 6 - 12'
        }
      ]
    }
  },
  'dominica': {
    id: 'dominica',
    type: 'citizenship',
    title: 'Dominica',
    heroImage: dominicaImg, // A nice Caribbean/Antigua style image
    heroHeadline: 'Dominica Citizenship by Investment Program offers visa-free travel to 156 destinations, including the EU, UK, and Hong Kong, with one of the Caribbean’s most affordable entry points.',
    download: 'https://drive.google.com/file/d/1jT6dmUBv9I--sexyj9wb65V8nHhXANPp/view',
    stats: {
      countries: 156,
      investment: '$200,000',
      months: '6 - 12 Months'
    },
    about: {
      title: 'About Dominica',
      content: [
        'Dominica’s Citizenship by Investment Program is one of the longest-running and most trusted programs globally.',
        'Dominica, often referred to as the “Nature Isle,” emphasizes environmental sustainability and is an ideal choice for investors seeking both travel convenience and a peaceful lifestyle. With a starting investment of $200,000 to the Economic Diversification Fund, applicants gain visa-free access to 156 destinations, offering unparalleled global mobility and security. Start your journey to a second citizenship in a country celebrated for its natural beauty and commitment to sustainable living.'
      ],
      bullets: [
        'The capital of the country is Roseau',
        'The currency is Eastern Caribbean Dollar (XCD)',
        'The current population as of 2021 is 73,000'
      ]
    },
    benefits: [
      {
        icon: 'Passport',
        title: 'Visa-Free Travel',
        description: 'Access to 156 countries, including the EU, UK, and Hong Kong.',
        image: dominicaVisaFreeTravel // Approximate flag image or scenic view
      },
      {
        icon: 'Home',
        title: 'Economic Diversification',
        description: 'Secure a Plan B citizenship and diversify your assets globally.',
        image: dominicaEconomicDiversification // Family image
      },
      {
        icon: 'Flag',
        title: 'Freedom To Live and Work',
        description: 'Enjoy the right to reside, work, and study in Dominica and other CARICOM nations.',
        image: dominicaFreedomToLiveAndWork // Tax/finance document image
      }
    ],
    requirements: {
      description: 'Key eligibility criteria and investment options for the Antigua & Barbuda Citizenship program.',
      tabs: [
        {
          id: 'eligibility',
          label: 'Application Eligibility',
          items: [
            { icon: 'Calendar', title: 'Age', description: '18 years or older' },
            { icon: 'Award', title: 'License', description: 'Valid proof of financial commitment' },
            { icon: 'Cloud', title: 'Records', description: 'Clean criminal record' },
            { icon: 'IdCard', title: 'Identification', description: 'Valid passport' }
          ]
        },
        {
          id: 'investment',
          label: 'Investment Options',
          items: [
            { icon: 'Building', title: 'Real Estate', description: 'Purchase approved real estate valued at USD 300,000 or more\n\nNon-refundable donation to NDF worth $230,000' },
            { icon: 'Wallet', title: 'Capital Transfer', description: 'Donate fund from $260,000 to the University of the West Indies (UWI)' }
          ]
        },
        {
          id: 'requirement',
          label: 'Requirement',
          items: [
            { icon: 'Receipt', title: 'Make a Purchase', description: 'Complete property purchase or investment' },
            { icon: 'CreditCard', title: 'Make a Transfer', description: 'Conclude payments for Government processing fees' }
          ]
        },
        {
          id: 'renewal',
          label: 'Renewal Conditions',
          items: [
            { icon: 'Building2', title: 'Investment', description: 'Maintain the qualifying investment' },
            { icon: 'MountainSun', title: 'Residency', description: 'Citizenship By Investment' }
          ]
        }
      ]
    },
    investment: {
      headline: 'Turn the Nature Isle into your gateway to global mobility and security through Dominica’s Citizenship by Investment Program.',
      description: 'Dominica’s Citizenship by Investment Program offers a seamless pathway to a second passport and global mobility. With a starting investment of $200,000, investors gain access to 156 visa-free destinations and the opportunity to secure citizenship in a nation celebrated for its natural beauty and commitment to sustainability. Unlock a world of possibilities for you and your family with Dominica’s trusted and efficient program.',
      subTitle: 'Investment Options',
      bullets: [
        'Contribute $200,000 or more to the Economic Diversification Fund',
        'Invest in government-approved properties worth $200,000',
      ]
    },
    process: {
      title: 'Our Process',
      steps: [
        {
          icon: 'CornerUpRight',
          title: 'Preparation',
          description: "Begin your application by gathering required documentation and completing initial due diligence checks. Select your preferred investment option and make the required payment to initiate the process.",
          timeframe: 'Month 1'
        },
        {
          icon: 'CornerUpLeft',
          title: 'Application review and submission',
          description: "Submit your completed application along with supporting documents. The government will review your file, conduct thorough due diligence, and verify your investment.",
          timeframe: 'Months 2 - 4'
        },
        {
          icon: 'CornerUpRight',
          title: 'Final approval and Visa Issuance',
          description: "Upon approval, finalize your investment and complete the necessary legal steps to receive your Dominican citizenship certificate and passport",
          timeframe: 'Months 6 - 12'
        }
      ]
    }
  },
  'grenada': {
    id: 'grenada',
    type: 'citizenship',
    title: 'Grenada',
    heroImage: grenadaImg, // A nice Caribbean/Antigua style image
    heroHeadline: 'Grenada’s Citizenship by Investment Program offers visa-free travel to 160 destinations, including China, Russia, and the EU. This program uniquely provides eligibility for the United States E-2 Investor Visa, unlocking unparalleled global access.',
    download: 'https://drive.google.com/file/d/1WLhsM0VozQs92DU_NGupSgBNqZsVRpty/view',
    stats: {
      countries: 160,
      investment: '$235,000',
      months: '6 - 12 Months'
    },
    about: {
      title: 'About Antigua & Barbuda',
      content: [
        'Start your journey to Grenadian citizenship and unlock a brighter future with unmatched global accessibility',
        'Grenada’s Citizenship by Investment Program stands out for its access to the U.S. E-2 Investor Visa, offering investors a gateway to U.S. residency. With a minimum contribution of $235,000 to the National Transformation Fund, applicants gain a globally respected passport and the opportunity to invest in one of the Caribbean’s most vibrant and stable economies.',
        'Known as the “Spice Island,” Grenada is renowned for its pristine beaches, strong education system, and growing economy. Whether seeking a tranquil lifestyle or strategic investment opportunities, Grenada offers a seamless pathway to citizenship and enhanced global mobility.'
      ],
      bullets: [
        "The capital of the country is St. George's",
        'The currency is Eastern Caribbean Dollar',
        'The current population as of 2021 is 113,000'
      ]
    },
    benefits: [
      {
        icon: 'Passport',
        title: 'Visa-Free Travel',
        description: 'Access to 160 countries, including the EU, China, and Russia.',
        image: grenadaVisaFreeTravel // Approximate flag image or scenic view
      },
      {
        icon: 'Home',
        title: 'Family Friendly',
        description: 'Include dependents such as children, parents, and unmarried siblings. And enjoy the right to live, work, and study in Grenada and other CARICOM nations.',
        image: grenadaFamilyFriendlyFramework // Family image
      },
      {
        icon: 'Flag',
        title: 'Low Tax Rates',
        description: 'A direct pathway to U.S. residency through the E-2 Investor Visa.',
        image: grenadaE2VisaEligibility // Tax/finance document image
      }
    ],
    requirements: {
      description: "Key eligibility criteria and investment options for Grenada's Citizenship by Investment Program",
      tabs: [
        {
          id: 'eligibility',
          label: 'Application Eligibility',
          items: [
            { icon: 'Calendar', title: 'Age', description: '18 years or older' },
            { icon: 'Award', title: 'License', description: 'Valid proof of financial commitment' },
            { icon: 'Cloud', title: 'Records', description: 'Clean criminal record' },
            { icon: 'IdCard', title: 'Identification', description: 'Valid passport' }
          ]
        },
        {
          id: 'investment',
          label: 'Investment Options',
          items: [
            { icon: 'Building', title: 'Real Estate', description: 'Purchase approved real estate valued at USD 300,000 or more\n\nNon-refundable donation to NDF worth $230,000' },
            { icon: 'Wallet', title: 'Capital Transfer', description: 'Donate fund from $260,000 to the University of the West Indies (UWI)' }
          ]
        },
        {
          id: 'requirement',
          label: 'Requirement',
          items: [
            { icon: 'Receipt', title: 'Make a Purchase', description: 'Complete property purchase or investment' },
            { icon: 'CreditCard', title: 'Make a Transfer', description: 'Conclude payments for Government processing fees' }
          ]
        },
        {
          id: 'renewal',
          label: 'Renewal Conditions',
          items: [
            { icon: 'Building2', title: 'Investment', description: 'Maintain the qualifying investment' },
            { icon: 'MountainSun', title: 'Residency', description: 'Citizenship By Investment' }
          ]
        }
      ]
    },
    investment: {
      headline: 'Turn Grenada’s “Spice Island” into your gateway to global mobility and U.S. residency with the Citizenship by Investment Program.',
      description: 'Grenada’s Citizenship by Investment Program offers a seamless pathway to global access and financial security. With a starting investment of $235,000, investors gain a respected second passport and the unique opportunity to apply for the U.S. E-2 Investor Visa. Experience the perfect blend of strategic opportunities and Caribbean charm with Grenada’s efficient and family-friendly program.',
      subTitle: 'Investment Options',
      bullets: [
        'Invest $235,000 or more into the National Transformation Fund.',
        'Invest $270,000 or more in government-approved real estate projects.',
      ]
    },
    process: {
      title: 'Our Process',
      steps: [
        {
          icon: 'CornerUpRight',
          title: 'Preparation',
          description: "Collect required documentation, complete initial due diligence, and select your investment pathway.",
          timeframe: 'Month 1'
        },
        {
          icon: 'CornerUpLeft',
          title: 'Application review and submission',
          description: 'Submit the application with supporting documents. The government conducts due diligence checks and verifies investments.',
          timeframe: 'Months 2 - 4'
        },
        {
          icon: 'CornerUpRight',
          title: 'Visa Issuance',
          description: "Upon approval, citizenship is granted, and the Grenadian passport is issued.",
          timeframe: 'Months 6 - 12'
        }
      ]
    }
  },
  'st-lucia': {
    id: 'st-lucia',
    type: 'citizenship',
    title: 'St. Lucia',
    heroImage: stLuciaImg, // A nice Caribbean/Antigua style image
    heroHeadline: 'Saint Lucia’s Citizenship by Investment Program offers visa-free or visa-on-arrival access to 159 countries, including the EU, the UK, and Singapore. This cost-effective program provides a quick pathway to global mobility.',
    download: 'https://drive.google.com/file/d/1ao2kthsS_MYHQoLjC6i3od0kGSnlCdxo/view',
    stats: {
      countries: 159,
      investment: '$240,000',
      months: '3 - 4 Months'
    },
    about: {
      title: 'About St. Lucia',
      content: [
        'Turn Saint Lucia’s “Nature Isle” into your gateway to global mobility with the Citizenship by Investment Program.',
        'The Saint Lucia Citizenship by Investment Program provides a swift and affordable route to a second passport, granting access to 159 visa-free destinations. With a minimum investment of $240,000, applicants secure citizenship in a nation known for its breathtaking landscapes and strategic opportunities.',
      ],
      bullets: [
        "The capital of the country is Castries",
        'The currency is Eastern Caribbean Dollar',
        'The current population as of 2021 is 184,000'
      ]
    },
    benefits: [
      {
        icon: 'Passport',
        title: 'Global Mobility',
        description: 'Access to 159 visa-free or visa-on-arrival destinations, including the EU, UK, and Singapore.',
        image: stLuciaGlobalMobility // Approximate flag image or scenic view
      },
      {
        icon: 'Home',
        title: '10-Year US Visitor Visa',
        description: 'Enjoy extended visits to the United States.',
        image: stLuciaVisitorVisa // Tax/finance document image
      },
      {
        icon: 'Flag',
        title: 'Secure Plan B Security',
        description: "Establish a safe haven for your family and enjoy St lucia's tax-free incentives.",
        image: stLuciaSecurePlan // Family image
      },
    ],
    requirements: {
      description: "Key eligibility criteria and investment options for Grenada's Citizenship by Investment Program",
      tabs: [
        {
          id: 'eligibility',
          label: 'Application Eligibility',
          items: [
            { icon: 'Calendar', title: 'Age', description: '18 years or older' },
            { icon: 'Award', title: 'License', description: 'Valid proof of financial commitment' },
            { icon: 'Cloud', title: 'Records', description: 'Clean criminal record' },
            { icon: 'IdCard', title: 'Identification', description: 'Valid passport' }
          ]
        },
        {
          id: 'investment',
          label: 'Investment Options',
          items: [
            { icon: 'Building', title: 'Real Estate', description: 'Purchase approved real estate valued at USD 300,000 or more\n\nNon-refundable donation to NDF worth $230,000' },
            { icon: 'Wallet', title: 'Capital Transfer', description: 'Donate fund from $260,000 to the University of the West Indies (UWI)' }
          ]
        },
        {
          id: 'requirement',
          label: 'Requirement',
          items: [
            { icon: 'Receipt', title: 'Make a Purchase', description: 'Complete property purchase or investment' },
            { icon: 'CreditCard', title: 'Make a Transfer', description: 'Conclude payments for Government processing fees' }
          ]
        },
        {
          id: 'renewal',
          label: 'Renewal Conditions',
          items: [
            { icon: 'Building2', title: 'Investment', description: 'Maintain the qualifying investment' },
            { icon: 'MountainSun', title: 'Residency', description: 'Citizenship By Investment' }
          ]
        }
      ]
    },
    investment: {
      headline: "St. Lucia's Citizenship by Investment Program provides lucrative investment options with long-term benefits.",
      description: 'Saint Lucia’s Citizenship by Investment Program offers a seamless pathway to enhanced global access and financial security. Starting with a $240,000 investment, investors gain a respected second passport and exclusive benefits like visa-free travel to 159 destinations. Experience the perfect blend of opportunity and serenity with Saint Lucia’s efficient and family-friendly program.',
      subTitle: 'Investment Options',
      bullets: [
        'Contribute $240,000 or more to Saint Lucia’s development initiatives.',
        'Purchase approved real estate property or Government bonds worth $300,000',

      ]
    },
    process: {
      title: 'Our Process',
      steps: [
        {
          icon: 'CornerUpRight',
          title: 'Preparation',
          description: "In the initial stages of engagement, clients must first sign the Client Agreement (CA) and complete the retainer payment to formalize their commitment. Subsequently, they are required to select their preferred investment pathway, which will guide the subsequent steps of their investment strategy and determine the specific approach tailored to their financial goals and risk tolerance.",
          timeframe: 'Month 1'
        },
        {
          icon: 'CornerUpLeft',
          title: 'Application review and submission',
          description: 'This involves comprehensively completing and submitting all required government forms along with their supporting documentation. Additionally, clients will need to carefully execute any requisite agreements, such as real estate purchase agreements, which are critical to formalizing the transaction and ensuring legal compliance.',
          timeframe: 'Months 2 - 4'
        },
        {
          icon: 'CornerUpRight',
          title: 'Visa Issuance',
          description: "As part of the citizenship application, applicants will be interviewed by the Citizenship by Investment Unit. The government then conducts due diligence, and upon approval, the applicant makes required contributions and fees. Finally, the applicant receives their citizenship certificate and passport.",
          timeframe: 'Months 6 - 12'
        }
      ]
    }
  },
  'st-kitts': {
    id: 'st-kitts',
    type: 'citizenship',
    title: 'St. Kitts & Nevis',
    heroImage: stKittsImg, // A nice Caribbean/Antigua style image
    heroHeadline: 'St. Kitts & Nevis citizenship offers visa-free access to over 166 countries, including the EU, UK, and Singapore. As the Caribbean’s oldest and most established citizenship by investment program.',
    download: 'https://drive.google.com/file/d/16CbEZratc8t4O9TpWHbzt2r_sonFHSZc/view',
    stats: {
      countries: 166,
      investment: '$250,000',
      months: '6 - 12 Months'
    },
    about: {
      title: 'About St. Kitts & Nevis',
      content: [
        "St. Kitts & Nevis pioneered the Caribbean's Citizenship by Investment programs in 1984, offering applicants unmatched stability, security, and opportunities.",
        'St. Kitts & Nevis Known for its breathtaking beaches, luxury lifestyle, and strategic business opportunities, offers the ideal blend of natural beauty and security. For a minimum $250,000 contribution to the Sustainable Growth Fund, applicants can gain citizenship in a globally respected jurisdiction. This access unlocks the opportunity to live, work, and explore across 166 visa-free destinations worldwide.'
      ],
      bullets: [
        "The capital of the country is Basseterre",
        'The currency is Eastern Caribbean Dollar',
        'The current population as of 2021 is 53,000'
      ]
    },
    benefits: [
      {
        icon: 'Passport',
        title: 'Visa-Free Passport',
        description: 'Visit 166 countries visa-free access with St. Kitts and Nevis citizenship.',
        image: stKittsVisaFreeTravel // Approximate flag image or scenic view
      },
      {
        icon: 'Home',
        title: 'A Legacy of Trust',
        description: "As the Caribbean's oldest citizenship by investment program, it boasts a proven history of reliability and security.",
        image: stKittsLegacy // Tax/finance document image
      },
      {
        icon: 'Flag',
        title: 'Swift Processing',
        description: "The program offers efficient processing times, ensuring a seamless journey to citizenship.",
        image: stKittsSwiftProcessing // Family image
      },
    ],
    requirements: {
      description: "Key eligibility criteria and investment options for St. Kitts & Nevis Citizenship Program.",
      tabs: [
        {
          id: 'eligibility',
          label: 'Application Eligibility',
          items: [
            { icon: 'Calendar', title: 'Age', description: '18 years or older' },
            { icon: 'Award', title: 'License', description: 'Valid proof of financial commitment' },
            { icon: 'Cloud', title: 'Records', description: 'Clean criminal record' },
            { icon: 'IdCard', title: 'Identification', description: 'Valid passport' }
          ]
        },
        {
          id: 'investment',
          label: 'Investment Options',
          items: [
            { icon: 'Building', title: 'Real Estate', description: 'Purchase approved real estate valued at USD 300,000 or more\n\nNon-refundable donation to NDF worth $230,000' },
            { icon: 'Wallet', title: 'Capital Transfer', description: 'Donate fund from $260,000 to the University of the West Indies (UWI)' }
          ]
        },
        {
          id: 'requirement',
          label: 'Requirement',
          items: [
            { icon: 'Receipt', title: 'Make a Purchase', description: 'Complete property purchase or investment' },
            { icon: 'CreditCard', title: 'Make a Transfer', description: 'Conclude payments for Government processing fees' }
          ]
        },
        {
          id: 'renewal',
          label: 'Renewal Conditions',
          items: [
            { icon: 'Building2', title: 'Investment', description: 'Maintain the qualifying investment' },
            { icon: 'MountainSun', title: 'Residency', description: 'Citizenship By Investment' }
          ]
        }
      ]
    },
    investment: {
      headline: "Explore the investment options and requirements for securing St. Kitts & Nevis citizenship through its well-established program.",
      description: 'With options ranging from luxury resort developments to exclusive government-approved real estate projects, investors can enjoy both the charm of island living and the opportunity for rental income. Retaining ownership for a minimum of seven years ensures compliance with the program while offering an asset that appreciates in value within one of the Caribbean’s most desirable markets.',
      subTitle: 'Investment Options',
      bullets: [
        'Non-refundable contribution of $250,000+',
        'Purchase a real estate property worth $400,000+',
        
      ]
    },
    process: {
      title: 'Our Process',
      steps: [
        {
          icon: 'CornerUpRight',
          title: 'Preparation',
          description: "Once client agreement is signed and the retainer payment is received, the legal team completes all government forms and supporting documents. If a property investment is chosen, a sales and purchase agreement will be executed with the developer.",
          timeframe: 'Month 2-3'
        },
        {
          icon: 'CornerUpLeft',
          title: 'Application review and submission',
          description: 'The application undergoes a final review to ensure it meets all CIU requirements. The legal team conducts last checks before submission. We maintain close communication with the CIU to ensure the application is processed efficiently.',
          timeframe: 'Months 8 - 9 '
        },
        {
          icon: 'CornerUpRight',
          title: 'Visa Issuance',
          description: "After CIU review and approval, the investor must make all required contributions and government fee payments. The Certificate of Registration can be collected in St. Kitts and Nevis or at an approved consulate or embassy, completing the citizenship process.",
          timeframe: 'Months 9 - 12'
        }
      ]
    }
  },

}
