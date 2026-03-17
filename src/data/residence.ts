import maltaImg from '../assets/images/iMtFT1bmSo4il2czlrumn4MO3Bc.png';
import maltaVisaFree from '../assets/images/ukPZpIBddH6L05QH1h99T8oH4.avif';
import maltaFamilyInclusion from '../assets/images/NX6ZFCxXXxOx4dTFMXDIxEJi4.jpg';
import maltaSecureResidency from '../assets/images/OvJ14SOvSfoc6VdjXwl64YIg.jpg';

import greeceImg from '../assets/images/fIK7bAQBgopiMZu4zeYkhktZBU.png';
import greeceVisaFree from '../assets/images/D5U6iIf7CIMTpURg2R6FdYuH97g.png';
import greeceFamilyFriendly from '../assets/images/p0uSmvftsgI6ntsO0jCic6aJ3u0.png';
import greeceFreedom from '../assets/images/gAxffIU3jJLUKs8EcqNYgzuB98.png';

import portugalImg from '../assets/images/wDLnXWorgKKUK21L4621HIJuMEo.png';
import portugalVisaFree from '../assets/images/LcmlNT9i6qyyXC5yZoMV85l0.png';
import portugalFamilyInclusion from '../assets/images/IcnbvlHEDHzkSYurceuOzwjDRZs.jpg';
import portugalSecure from '../assets/images/BMTlYJKrDJwbcsV2IKFxfAHnVK8.jpg';

import spainImg from '../assets/images/8ZFOL3uuqX5LyRep9nZx2Cs2M.png';
import spainVisaFree from '../assets/images/5Qgm1MykS1ConBvUD9fWutMJHfU.jpg';
import spainFamilyInclusion from '../assets/images/3E48OXrFY1Y2ENEhVDYVQXWZxFM.jpg';
import spainLivingSystem from '../assets/images/BYMbJKNcVPruOgfKZjDyVK0Ccc.png';

import usaImg from '../assets/images/Y3z9MJbqKjNZXvQLShzdOfqd43A.png';
import usaFavorableTax from '../assets/images/lkbtUEL1iAnaOkRmD1soCCNLxoM.png';
import usaCitizenship from '../assets/images/PDGBSPENY9Xjpm3yxKKK1ud6o.jpg';
import usaHealthCare from '../assets/images/7lT3wsT14XXydU6SrT8xasaRUyk.jpg';

export interface ResidenceData {
  id: string;
  type: 'citizenship' | 'residency';
  title: string;
  heroImage: string;
  heroHeadline: string;
  download: string;
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


export const residenceInfo: Record<string, ResidenceData> = 
{
  'malta': {
    title: 'Malta',
    id: 'malta',
    type: 'residency',
    heroImage: maltaImg, // A nice Caribbean/Antigua style image
    heroHeadline: "Malta's Residency by Investment Program provides a streamlined pathway to European residency in a strategically located, English-speaking nation. Renowned for its favorable tax system, world-class healthcare, and excellent education opportunities, Malta is a top choice among international investors.",
    download: 'https://drive.google.com/file/d/1dehcwnAqp2vtS7TeHnS9n9aWfyu5rghE/view?usp=sharing',
    stats: {
      countries: 29, // Over Schengen Visa
      investment: '€150,000',
      months: '6 - 8 Months'
    },
    about: {
      title: 'About Malta',
      content: [
        "Embrace the unique Mediterranean lifestyle and secure your Maltese residency making Malta your gateway to Europe.",
        "Malta's Residency by Investment Program provides a streamlined pathway to European residency in a strategically located, English-speaking nation. Renowned for its favorable tax system, world-class healthcare, and excellent education opportunities, Malta is a top choice among international investors. The program requires a minimum investment of €100,000 in government bonds and real estate, offering residency benefits for you and your family along with access to the Schengen Area.",

      ],
      bullets: [
        "The capital of the country is Valletta ",
        "The currency is Euro ",
        "The current population is Approximately 525,000",
      ]
    },
    benefits: [
      {
        title: "Visa Free Travel",
        description: "Enjoy hassle-free travel across the Schengen Zone for up to 90 days within any six-month period.",
        icon: "Flag",
        image: maltaVisaFree

      },
      {
        title: "Family Inclusion",
        description: "Extend residency benefits to your spouse, children under 18, adult dependents, and even dependent parents or grandparents.",
        icon: "Home",
        image: maltaFamilyInclusion
      },
      {
        title: "Secure Residency for Life",
        description: "Obtain permanent residency in Malta, allowing you and your family to live in the country indefinitely.",
        icon: "Flag",
        image: maltaSecureResidency
      },
      
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
      headline: 'The Malta Residency by Investment Program provides lucrative investment options with long-term benefits.',
      description: "Investing in Malta's Residency by Investment Program not only grants you access to European residency but also opens opportunities for financial security and personal growth. With its robust property market, pro-business environment, and strategic location, Malta offers a range of investment options tailored to your goals and preferences.",
      subTitle: 'Investment Options',
      bullets: [
        "Purchase or lease a property and retain it for at least five years.",
        "Maintain €500,000 in financial assets, including €150,000 in liquid capital."
      ]
    },
    process: {
      title: 'Our Process',
      steps: [
        {
          icon: 'CornerUpRight',
          title: 'Preparation',
          description: "We start with Form 1 for initial due diligence and prepare your Client Agreement (CA). Once signed, our team gathers required documents, liaises with real estate professionals, and initiates your application.",
          timeframe: 'Month 1'
        },
        {
          icon: 'CornerUpLeft',
          title: 'Application review and submission',
          description: "We review your documents for compliance and submit your application to the Residency Malta Agency. The agency conducts its due diligence, ensuring all requirements are met.",
          timeframe: 'Months 2 - 3'
        },
        {
          icon: 'CornerUpRight',
          title: 'Visa Issuance',
          description: "After approval in principle, you finalize your investment, submit health insurance proof, and make the required donations. Once completed, your Malta residency cards are issued.",
          timeframe: 'Months 6 - 12'
        }
      ]
    }
  },
  'greece': {
    title: 'Greece',
    id: 'greece',
    type: 'residency',
    heroImage: greeceImg, // A nice Caribbean/Antigua style image
    heroHeadline: "Greece’s Golden Visa program grants residency with an investment of €250,000  in real estate, one of the lowest entry points in Europe. Enjoy a Mediterranean  lifestyle, rich history, and visa-free Schengen access.",
    download: 'https://drive.google.com/file/d/1jT6dmUBv9I--sexyj9wb65V8nHhXANPp/view',
    stats: {
      countries: 29, // Over Schengen Visa
      investment: '€250,000',
      months: '6 - 12 Months'
    },
    about: {
      title: 'About Greece',
      content: [
        "This EU member state provides an unparalleled setting for those seeking both a high quality of life and a strategic foothold in Europe.",
        "The Greece Golden Visa program offers an affordable entry to European residency with a minimum real estate investment of €250,000. Known for its ancient history, breathtaking islands, and vibrant culture, Greece provides a blend of tradition and modern living. Residency grants you access to the Schengen Area and the flexibility to live, work, or study in Greece, all within an affordable and investor-friendly framework. Start your journey to Greek residency and immerse yourself in the timeless beauty and warm hospitality of Greece."

      ],
      bullets: [
        "The capital of the country is Athens ",
        "The currency is Euro ",
        "The current population is Approximately 10.72 million",
      ]
    },
    benefits: [
      {
        title: "Visa Free Travel",
        description: "Access the Schengen Zone for 90 days within any six-month period",
        icon: "Flag",
        image: greeceVisaFree

      },
      {
        title: "Family Friendly",
        description: "Greece's Golden Visa program stands out with its inclusive family policy. Main applicants can include their spouse or partner (including same-sex couples), children up to 21 years old (extendable to 24), and even parents and in-laws.",
        icon: "Home",
        image: greeceFamilyFriendly
      },
      {
        title: "Freedom Without Borders",
        description: "Live, work, study, or run a business in Greece without stringent stay requirements. Remarkably, there's no obligation to reside in the country, with just a single visit needed for biometrics submission.",
        icon: "Flag",
        image: greeceFreedom
      },
      
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
      headline: 'The Golden Visa program offers attractive real estate investment options with potential financial returns.',
      description: "Investing in Malta's Residency by Investment Program not only grants you access to European residency but also opens opportunities for financial security and personal growth. With its robust property market, pro-business environment, and strategic location, Malta offers a range of investment options tailored to your goals and preferences.",
      subTitle: 'Investment Options',
      bullets: [
        "Buy commercial or industrial real estate - €250,000",
        "Purchase a property with at least 120m² surface area - $800,000",
      ]
    },
    process: {
      title: 'Our Process',
      steps: [
        {
          icon: 'CornerUpRight',
          title: 'Preparation',
          description: "Submit application. Greek authorities issue a receipt of application, which may be used as a temporary permit prior to residency being granted.",
          timeframe: 'Month 1'
        },
        {
          icon: 'CornerUpLeft',
          title: 'Application review and submission',
          description: "We review your application for compliance and verify the investment threshold before submitting it to the Ministry, which conducts due diligence and issues a receipt serving as a temporary residence permit during processing.",
          timeframe: 'Months 3 - 6'
        },
        {
          icon: 'CornerUpRight',
          title: 'Visa Issuance',
          description: "Once the application is approved by the Secretary-General, you will receive a five-year residence permit for living in Greece and visa-free Schengen travel, after completing necessary contributions and government fees, followed by residency certificates for you and your family. Citizenship may be applied for after seven years of residency.",
          timeframe: 'Months 6 - 12'
        }
      ]
    }
  },
  'portugal': {
    title: 'Portugal',
    id: 'portugal',
    type: 'residency',
    heroImage: portugalImg, // A nice Caribbean/Antigua style image
    heroHeadline: "Portugal's Golden Visa program offers residency through investments starting at just €280,000. Enjoy a superior quality of life, world-class healthcare, and seamless visa-free travel across the Schengen Area.",
    download: 'https://drive.google.com/file/d/1jT6dmUBv9I--sexyj9wb65V8nHhXANPp/view',stats: {
      countries: 29, // Over Schengen Visa
      investment: '€280,000',
      months: '24 - 30 Months'
    },
    about: {
      title: 'About Portugal',
      content: [
        "Experience the charm of Iberian living and secure your Portuguese residency, making Portugal your gateway to Europe.",
        "Portugal's Golden Visa program is one of Europe's most sought-after residency options, offering a straightforward path to residency through a variety of investments starting at just €280,000. Known for its warm climate, welcoming locals, and dynamic cities like Lisbon and Porto, Portugal combines affordability with top-tier healthcare and a vibrant lifestyle.",
        "Residency also grants you visa-free access to the Schengen Zone, making Portugal an ideal hub for European travel. Secure your Portuguese residency and embrace life in one of the world's most desirable destinations.",
      ],
      bullets: [
        "The capital of the country is Lisbon",
        "The currency is Euro ",
        "The current population is Approximately 10.3 million",
        
      ]
    },
    benefits: [
      {
        title: "Visa Free Travel",
        description: "Enjoy Visa-free travel across the EU.",
        icon: "Flag",
        image: portugalVisaFree

      },
      {
        title: "Family Inclusion",
        description: "Extend residency benefits to your spouse, children under 18, adult dependents, and even dependent parents or grandparents.",
        icon: "Home",
        image: portugalFamilyInclusion
      },
      {
        title: "Secure Citizenship",
        description: "Forge a path to citizenship in Portugal, allowing you and your family to live in the country indefinitely after 5 years.",
        icon: "Flag",
        image: portugalSecure
      },
      
    ],
    requirements: {
      description: "Key eligibility criteria and investment options for Portugal's Residency by Investment Program",
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
      headline: "The Portugal Golden Visa Program offers flexible investment opportunities with access to Europe’s most captivating destinations.",
      description: "Investing in Portugal’s Golden Visa Program not only provides a pathway to European residency but also offers opportunities for economic stability and lifestyle enhancement. With its rich culture, vibrant cities like Lisbon and Porto, low cost of living, and excellent healthcare system, Portugal is an ideal destination for families and investors. The Golden Visa offers a variety of investment options designed to align with diverse financial goals while granting access to the Schengen Area for seamless European travel.",
      subTitle: 'Investment Options',
      bullets: [
        "Invest €500,000 into real estate or other qualifying property developments.",
        "Purchase property in Portugal with a minimum investment of €280,000"
      ]
    },
    process: {
      title: 'Our Process',
      steps: [
        {
          icon: 'CornerUpRight',
          title: 'Preparation',
          description: "The process begins with selecting an eligible investment option and securing the necessary funds. During this period, you submit your initial application and complete all required documentation.",
          timeframe: 'Month 1 - 4'
        },
        {
          icon: 'CornerUpLeft',
          title: 'Application review and submission',
          description: "Your completed application will be thoroughly reviewed to ensure it meets all the Golden Visa Programme's requirements. The Residency authorities will evaluate your investment, supporting documents, and eligibility to proceed.",
          timeframe: 'Year 0'
        },
        {
          icon: 'CornerUpRight',
          title: 'Visa Issuance',
          description: "After your initial permit is issued, you must renew your permit every two years by fulfilling the required minimum stay of 14 days per two-year period. You can then proceed toward Permanent Residency or EU Citizenship after five years.",
          timeframe: 'Year 2 - 5'
        }
      ]
    }
  },
  'spain': {
    title: 'Spain',
    id: 'spain',
    type: 'residency',
    heroImage: spainImg, // A nice Caribbean/Antigua style image
    heroHeadline: "Spain’s Golden Visa program offers residency through a minimum €500,000 real estate investment, granting you visa-free access to the Schengen Area. With its Mediterranean climate, vibrant culture, and exceptional quality of life, Spain stands out as an ideal destination for residency.",
    download: 'https://drive.google.com/file/d/1jT6dmUBv9I--sexyj9wb65V8nHhXANPp/view',
    stats: {
      countries: 29, // Over Schengen Visa
      investment: '€500,000',
      months: '5 - 7 Months'
    },
    about: {
      title: 'About Spain',
      content: [
        "Immerse yourself in the vibrant Iberian lifestyle and secure your Spanish residency, making Spain your gateway to Europe.",
        "Spain’s Golden Visa program offers a seamless pathway to residency in one of Europe’s most captivating and culturally diverse nations. Renowned for its stunning Mediterranean coastline, exceptional healthcare, and iconic cuisine, Spain blends modern living with timeless traditions.",
        "With a minimum real estate investment of €500,000, the program provides immediate residency benefits for you and your family, including visa-free travel across the Schengen Area. Make Spain your second home and embrace its vibrant, cosmopolitan lifestyle.",
      ],
      bullets: [
        "The capital of the country is Madrid",
        "The currency is Euro ",
        "The current population is Approximately 47.5 million",
        
      ]
    },
    benefits: [
      {
        title: "Visa Free Travel",
        description: "Increase your global mobility in EU.",
        icon: "Flag",
        image: spainVisaFree

      },
      {
        title: "Family Inclusion",
        description: "Extend residency benefits to all your family members.",
        icon: "Home",
        image: spainFamilyInclusion
      },
      {
        title: "Improved Living Standards",
        description: "Experience high standards of living for yourself and for your family in Spain.",
        icon: "Flag",
        image: spainLivingSystem
      },
      
    ],
    requirements: {
      description: "Key eligibility criteria and investment options for Spain's Residency by Investment Program",
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
      headline: "The Spain Residency by Investment Program offers attractive investment opportunities with enduring benefits.",
      description: "Investing in Spain's Residency by Investment Program not only secures your pathway to European residency but also provides opportunities for financial growth and lifestyle enhancement. With its dynamic real estate market, favorable business environment, and prime location in the heart of Europe, Spain offers diverse investment options designed to align with your aspirations and preferences.",
      subTitle: 'Investment Options',
      bullets: [
        "Purchase real estate in Spain valued at €500,000",
        "Invest €1,000,000 in Spanish bank deposits, shares, or financial assets.",

      ]
    },
    process: {
      title: 'Our Process',
      steps: [
        {
          icon: 'CornerUpRight',
          title: 'Preparation',
          description: "The applicant visits Spain, completes biometrics, and selects a real estate property for investment.",
          timeframe: 'Month 1 - 3'
        },
        {
          icon: 'CornerUpLeft',
          title: 'Application review and submission',
          description: "The residency application is submitted, reviewed, and the investment is finalized.",
          timeframe: 'Year 1'
        },
        {
          icon: 'CornerUpRight',
          title: 'Visa Issuance',
          description: "The Golden Visa Program permit is issued, granting residency benefits.",
          timeframe: 'Year 3 - 5'
        }
      ]
    }
  },
  'usa': {
    title: 'United States of America',
    id: 'usa',
    type: 'residency',
    heroImage: usaImg, // A nice Caribbean/Antigua style image
    heroHeadline: "The United States EB-5 Immigrant Investor Program offers a straightforward path to permanent residency with a minimum investment of $800,000 in a U.S.-based business. ",
    download: '',
    stats: {
      countries: 29, // Over Schengen Visa
      investment: '$800,000',
      months: '12 - 24 Months'
    },
    about: {
      title: 'About USA',
      content: [
        "Turn your American Dream into reality by securing residency through the EB-5 Immigrant Investor Program.",
        "The U.S. EB-5 Immigrant Investor Program offers an efficient and direct pathway to permanent residency (Green Card) for investors and their families. With a minimum investment of $800,000 in a U.S.-based business, applicants can enjoy the benefits of residing in one of the world's most dynamic economies. From world-class education and healthcare to endless business opportunities, the EB-5 Program provides families with a brighter future and financial growth",
      ],
      bullets: [
        "The capital of the country is Washington, DC",
        "The currency is Dollar ",
        "The current population is Approximately 331 million",
        
      ]
    },
    benefits: [
      {
        title: "Favorable Tax Opportunities",
        description: "Reside in U.S. states with no state-level income tax, including Alaska, Florida, Nevada, South Dakota, Tennessee, Texas, Washington, and Wyoming",
        icon: "Flag",
        image: usaFavorableTax

      },
      {
        title: "Path to U.S. Citizenship",
        description: "After five years of permanent residency, you can apply for full U.S. citizenship, securing your long-term future.",
        icon: "Home",
        image: usaCitizenship
      },
      {
        title: "Access World-Class Health Care",
        description: "The U.S. offers advanced medical facilities, top universities, and private schools, providing access to exceptional education and healthcare systems.",
        icon: "Flag",
        image: usaHealthCare
      },
      
    ],
    requirements: {
      description: "Key eligibility criteria and investment options for USA's U.S. EB-5 Immigrant Investor Program",
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
            { icon: 'Building', title: 'Real Estate', description: 'Invest in commercial real estate developments Contribute to large-scale real estate projects' },
            { icon: 'Wallet', title: 'Capital Transfer', description: 'Invest $800,000 into U.S.-based business Invest into a Regional Center program Investment directly into a U.S.-based business' }
          ]
        },
        {
          id: 'requirement',
          label: 'Requirement',
          items: [
            { icon: 'Receipt', title: 'Make a Purchase', description: 'Minimum of $800,000 investment in a qualifying U.S. business.' },
            { icon: 'CreditCard', title: 'Make a Transfer', description: 'Contribute funds into the designated U.S. Regional Center.' }
          ]
        },
        {
          id: 'renewal',
          label: 'Renewal Conditions',
          items: [
            { icon: 'Building2', title: 'Investment', description: 'Maintain the $800,000 investment' },
            { icon: 'MountainSun', title: 'Residency', description: 'Meet all the Green Card requirements' }
          ]
        }
      ]
    },
    investment: {
      headline: "Unlock Opportunities with the USA Residency by Investment Program",
      description: "The United States EB-5 Immigrant Investor Program offers lucrative investment pathways that pave the way for permanent residency while granting access to one of the world's most dynamic and opportunity-rich economies.",
      subTitle: 'Investment Options',
      bullets: [
        "Invest $800,000 into a qualifying U.S.-based business.",
        "Invest $800,000 into a qualifying U.S.-based business.",

      ]
    },
    process: {
      title: 'Our Process',
      steps: [
        {
          icon: 'CornerUpRight',
          title: 'Preparation',
          description: "Initial application steps are completed, with the investment established and financial commitments finalized.",
          timeframe: 'Month 1 - 6'
        },
        {
          icon: 'CornerUpLeft',
          title: 'Application review and submission',
          description: "The U.S. Citizenship and Immigration Services (USCIS) processes the application, and the investor undergoes the required due diligence.",
          timeframe: 'Months 2 - 24'
        },
        {
          icon: 'CornerUpRight',
          title: 'Visa Issuance',
          description: "The Green Card is issued upon successful approval of the investment and all application requirements",
          timeframe: 'Year 2 - 3'
        }
      ]
    }
  }
}