import type { Payload } from 'payload'

type CategoryMap = Record<string, string> // slug → id

export const buildServicesSeedData = (categoryMap: CategoryMap) => [
  {
    title: 'Medical Weight Loss Program',
    slug: 'medical-weight-loss',
    excerpt:
      'A personalized, physician-supervised weight loss program combining medication, nutrition counseling, and lifestyle coaching to deliver lasting results.',
    category: categoryMap['weight-loss'],
    transformationPhase: 'treatment',
    _status: 'published',
    layout: [
      {
        blockType: 'serviceHero',
        heading: 'Finally, Weight Loss That Works',
        subheading:
          'Our physician-supervised program is tailored to your metabolism, goals, and lifestyle — not a one-size-fits-all plan.',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Book a Consultation',
              url: '/contact',
              appearance: 'default',
            },
          },
        ],
      },
      {
        blockType: 'stats',
        heading: 'Real Results for Real People',
        items: [
          { value: '500+', label: 'Patients Served', description: 'and growing' },
          { value: '94%', label: 'Success Rate', description: 'reaching their goal weight' },
          { value: '12+', label: 'Years Experience', description: 'in metabolic medicine' },
        ],
      },
      {
        blockType: 'benefitsList',
        heading: 'Why Choose Our Program',
        benefits: [
          {
            title: 'Personalized Treatment Plan',
            description: 'Every protocol is designed around your unique metabolic profile and health history.',
            icon: 'check',
          },
          {
            title: 'FDA-Approved Medications',
            description: 'Access to the latest evidence-based weight loss medications when appropriate.',
            icon: 'shield',
          },
          {
            title: 'Ongoing Medical Supervision',
            description: 'Regular check-ins with your care team to adjust your plan as you progress.',
            icon: 'heart',
          },
          {
            title: 'Nutrition & Lifestyle Coaching',
            description: 'Practical guidance you can actually follow — no crash diets.',
            icon: 'star',
          },
        ],
      },
      {
        blockType: 'faq',
        heading: 'Common Questions',
        items: [
          {
            question: 'How quickly will I see results?',
            answer: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'Most patients begin seeing measurable weight loss within the first 2–4 weeks. Results vary based on your starting point, adherence to the program, and individual metabolism. Your care team will monitor your progress and make adjustments to optimize outcomes.',
                      },
                    ],
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
          },
          {
            question: 'Are medications required?',
            answer: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      {
                        type: 'text',
                        text: 'No. Medications are one tool in our toolkit, not a requirement for everyone. After your initial assessment, your physician will recommend whether medication is appropriate for your situation. Many patients achieve their goals through our nutrition and lifestyle program alone.',
                      },
                    ],
                    version: 1,
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
          },
        ],
      },
      {
        blockType: 'cta',
        richText: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                tag: 'h2',
                children: [{ type: 'text', text: 'Ready to Start Your Journey?' }],
                version: 1,
                direction: 'ltr',
                format: '',
                indent: 0,
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', text: 'Book your free consultation and take the first step toward lasting transformation.' }],
                version: 1,
                direction: 'ltr',
                format: '',
                indent: 0,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        links: [
          {
            link: {
              type: 'custom',
              label: 'Book Free Consultation',
              url: '/contact',
              appearance: 'default',
            },
          },
        ],
      },
    ],
    meta: {
      title: 'Medical Weight Loss Program | WellForm MD',
      description:
        'Physician-supervised weight loss programs tailored to your metabolism. FDA-approved medications, nutrition coaching, and ongoing support.',
    },
  },
  {
    title: 'Botox & Dermal Fillers',
    slug: 'botox-dermal-fillers',
    excerpt:
      'Natural-looking injectable treatments to soften lines, restore volume, and refresh your appearance — administered by experienced medical professionals.',
    category: categoryMap['medical-spa'],
    transformationPhase: 'treatment',
    _status: 'published',
    layout: [
      {
        blockType: 'serviceHero',
        heading: 'Look Refreshed. Feel Confident.',
        subheading:
          'Subtle, natural-looking results from Botox and dermal fillers — no downtime, no surgery.',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Book a Treatment',
              url: '/contact',
              appearance: 'default',
            },
          },
        ],
      },
      {
        blockType: 'benefitsList',
        heading: 'What We Offer',
        benefits: [
          {
            title: 'Botox & Dysport',
            description: 'Smooth forehead lines, crow\'s feet, and frown lines in as little as 10 minutes.',
            icon: 'zap',
          },
          {
            title: 'Lip Fillers',
            description: 'Add natural-looking volume and definition to your lips.',
            icon: 'heart',
          },
          {
            title: 'Cheek & Facial Contouring',
            description: 'Restore youthful volume and lift with precision filler placement.',
            icon: 'star',
          },
          {
            title: 'Under-Eye Treatment',
            description: 'Reduce hollowness and dark circles for a more rested appearance.',
            icon: 'check',
          },
        ],
      },
      {
        blockType: 'faq',
        heading: 'FAQs',
        items: [
          {
            question: 'How long do results last?',
            answer: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'paragraph',
                    children: [
                      { type: 'text', text: 'Botox typically lasts 3–4 months. Dermal fillers last 6–18 months depending on the area treated and the product used. We\'ll discuss what to expect during your consultation.' },
                    ],
                    version: 1,
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
          },
        ],
      },
    ],
    meta: {
      title: 'Botox & Dermal Fillers | WellForm MD Medical Spa',
      description:
        'Natural-looking Botox and dermal filler treatments by experienced medical professionals. Refresh your look with minimal downtime.',
    },
  },
  {
    title: 'Hormone Optimization',
    slug: 'hormone-optimization',
    excerpt:
      'Comprehensive hormone testing and personalized replacement therapy to restore energy, mood, sleep, and vitality.',
    category: categoryMap['wellness'],
    transformationPhase: 'assessment',
    _status: 'published',
    layout: [
      {
        blockType: 'serviceHero',
        heading: 'Restore Your Energy. Reclaim Your Life.',
        subheading:
          'Balanced hormones are the foundation of health. Our comprehensive program identifies and corrects imbalances that affect your energy, sleep, mood, and metabolism.',
        links: [
          {
            link: {
              type: 'custom',
              label: 'Start With Testing',
              url: '/contact',
              appearance: 'default',
            },
          },
        ],
      },
      {
        blockType: 'stats',
        items: [
          { value: '80%', label: 'Report More Energy', description: 'within 60 days' },
          { value: '3-Step', label: 'Process', description: 'test, evaluate, treat' },
          { value: '100%', label: 'Personalized', description: 'to your lab results' },
        ],
      },
      {
        blockType: 'benefitsList',
        heading: 'Signs You May Benefit',
        benefits: [
          { title: 'Chronic Fatigue', description: 'Constant tiredness despite adequate sleep.', icon: 'clock' },
          { title: 'Weight Gain', description: 'Unexplained weight gain, especially around the midsection.', icon: 'check' },
          { title: 'Mood Changes', description: 'Increased irritability, anxiety, or depression.', icon: 'heart' },
          { title: 'Brain Fog', description: 'Difficulty concentrating or remembering things.', icon: 'zap' },
          { title: 'Low Libido', description: 'Decreased interest in intimacy or sexual function.', icon: 'star' },
          { title: 'Poor Sleep', description: 'Trouble falling or staying asleep.', icon: 'shield' },
        ],
      },
    ],
    meta: {
      title: 'Hormone Optimization Therapy | WellForm MD',
      description:
        'Personalized hormone testing and replacement therapy to restore energy, mood, sleep, and metabolic health. Start with comprehensive lab work.',
    },
  },
]
