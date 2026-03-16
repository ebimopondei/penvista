import antiguaBarbudaImg from '../assets/images/Q8ur6Q6zClAnjOLKQnYmoV9F8.png'
export interface ProgramData {
  id: string;
  type: 'citizenship' | 'residency';
  title: string;
  heroImage: string;
  heroHeadline: string;
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


export const programsInfo: Record<string, ProgramData> = {
  'antigua-barbuda': {
    id: 'antigua-barbuda',
    type: 'citizenship',
    title: 'Antigua & Barbuda',
    heroImage: antiguaBarbudaImg, // A nice Caribbean/Antigua style image
    heroHeadline: 'Antigua & Barbuda passport holders enjoy visa-free travel to 162 countries, including the European Schengen area, the UK, South Africa, Hong Kong, and China.',
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
        image: 'https://images.unsplash.com/photo-1510103503253-ab27cd01c34a?q=80&w=1000&auto=format&fit=crop' // Approximate flag image or scenic view
      },
      {
        icon: 'Home',
        title: 'Family Friendly',
        description: 'Antiguan citizenship program stands out with its inclusive family policy. Live, work and study in Antigua and other CARICOM nations while diversifying your assets beyond your current region.',
        image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1000&auto=format&fit=crop' // Family image
      },
      {
        icon: 'Flag',
        title: 'Low Tax Rates',
        description: 'The nation provides comprehensive tax benefits, including zero taxation on worldwide income, capital gains, inheritance, wealth, and gift transfers.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?q=80&w=1000&auto=format&fit=crop' // Tax/finance document image
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
        'Purchase approved real estate valued at USD 300,000 or more',
        'Non-refundable donation to NDF worth $230,000',
        'Donate fund from $260,000 to the University of the West Indies (UWI)'
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
  }
}
