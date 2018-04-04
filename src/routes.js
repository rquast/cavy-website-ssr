import {PLATFORM} from 'aurelia-pal';

export default [
  { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./home'), nav: true, title: 'Home', variables: {
    page: {
      description: 'Helpdesk And Support Platform - Fast, Cheap, Easy',
      keywords: 'support platform, helpdesk, help desk, live chat, CRM, customer management'
    },
    opengraph: {
      'og:type': 'article',
      'og:image': 'https://getcavy.com/static/opengraph/default.jpg',
      'og:image:height': 422,
      'og:image:width': 806,
      'og:title': 'Cavy Online Support Platform',
      'og:site_name': 'Cavy',
      'og:description': 'Helpdesk And Support Platform - Fast, Cheap, Easy',
      'og:url': 'https://getcavy.com'
    }
  } },
  { route: 'features', name: 'features', moduleId: PLATFORM.moduleName('./features'), nav: true, title: 'Features', variables: {
    page: {
      description: 'What are the features of Cavy and what makes it unique?',
      keywords: 'support platform, helpdesk, help desk, live chat, CRM, customer management'
    },
    opengraph: {
      'og:type': 'article',
      'og:image': 'https://getcavy.com/static/opengraph/default.jpg',
      'og:image:height': 422,
      'og:image:width': 806,
      'og:title': 'Cavy Features',
      'og:site_name': 'Cavy',
      'og:description': 'What are the features of Cavy and what makes it unique?',
      'og:url': 'https://getcavy.com/features'
    }
  } },
  { route: 'pricing', name: 'pricing', moduleId: PLATFORM.moduleName('./pricing'), nav: true, title: 'Pricing', variables: {
    page: {
      description: 'Subscription fee information for Cavy.',
      keywords: 'support platform, helpdesk, help desk, live chat, CRM, customer management'
    },
    opengraph: {
      'og:type': 'article',
      'og:image': 'https://getcavy.com/static/opengraph/default.jpg',
      'og:image:height': 422,
      'og:image:width': 806,
      'og:title': 'Cavy Pricing',
      'og:site_name': 'Cavy',
      'og:description': 'Subscription fee information for Cavy.',
      'og:url': 'https://getcavy.com/pricing'
    }
  } },
  { route: 'integration', name: 'integration', moduleId: PLATFORM.moduleName('./integration'), nav: true, title: 'Integration', variables: {
    page: {
      description: 'How to integrate cavy with your website or application.',
      keywords: 'javascript, live chat, support platform, helpdesk, help desk'
    },
    opengraph: {
      'og:type': 'article',
      'og:image': 'https://getcavy.com/static/opengraph/default.jpg',
      'og:image:height': 422,
      'og:image:width': 806,
      'og:title': 'Integrating Cavy',
      'og:site_name': 'Cavy',
      'og:description': 'How to integrate cavy with your website or application.',
      'og:url': 'https://getcavy.com/integration'
    }
  } },
  { route: 'support', name: 'support', moduleId: PLATFORM.moduleName('./support'), nav: true, title: 'Support', variables: {
    page: {
      description: 'Support options available for Cavy.',
      keywords: 'support platform, helpdesk, help desk, live chat, CRM, customer management'
    },
    opengraph: {
      'og:type': 'article',
      'og:image': 'https://getcavy.com/static/opengraph/default.jpg',
      'og:image:height': 422,
      'og:image:width': 806,
      'og:title': 'Cavy Support',
      'og:site_name': 'Cavy',
      'og:description': 'Support options available for Cavy.',
      'og:url': 'https://getcavy.com/support'
    }
  } },
  { route: 'claim', name: 'claim', moduleId: PLATFORM.moduleName('./claim'), nav: false, title: 'Claim', variables: {
    page: {
      description: 'Subscribe to Cavy and create a Cavy subdomain.',
      keywords: 'support platform, helpdesk, help desk, live chat, CRM, customer management'
    },
    opengraph: {
      'og:type': 'article',
      'og:image': 'https://getcavy.com/static/opengraph/default.jpg',
      'og:image:height': 422,
      'og:image:width': 806,
      'og:title': 'Subscribe To Cavy',
      'og:site_name': 'Cavy',
      'og:description': 'Subscribe to Cavy and create a Cavy subdomain.',
      'og:url': 'https://getcavy.com/claim'
    }
  } },
  { route: 'saas', name: 'saas', moduleId: PLATFORM.moduleName('./uses/saas'), nav: false, uses: true, title: 'Software and SaaS', variables: {
    page: {
      description: 'Support that minimizes interruptions and improves agility. Try Cavy Now.',
      keywords: 'saas, support platform, helpdesk, help desk, live chat, software'
    },
    opengraph: {
      'og:type': 'article',
      'og:image': 'https://getcavy.com/static/opengraph/saas.jpg',
      'og:image:height': 422,
      'og:image:width': 806,
      'og:title': 'Agile Support For Your Software',
      'og:site_name': 'Cavy',
      'og:description': 'Support that minimizes interruptions and improves agility. Try Cavy Now.',
      'og:url': 'https://getcavy.com/saas'
    }
  } },
  { route: 'product', name: 'product', moduleId: PLATFORM.moduleName('./uses/product'), nav: false, uses: true, title: 'Product Management', variables: {
    page: {
      description: 'Build products customers want by leveraging support. Try Cavy Now.',
      keywords: 'product management, product manager, customer success, helpdesk, help desk, live chat'
    },
    opengraph: {
      'og:type': 'article',
      'og:image': 'https://getcavy.com/static/opengraph/product.jpg',
      'og:image:height': 422,
      'og:image:width': 806,
      'og:title': 'Support Customer Success',
      'og:site_name': 'Cavy',
      'og:description': 'Build products customers want by leveraging support. Try Cavy Now.',
      'og:url': 'https://getcavy.com/product'
    }
  } },
  { route: 'academic', name: 'academic', moduleId: PLATFORM.moduleName('./uses/academic'), nav: false, uses: true, title: 'Academic', variables: {
    page: {
      description: 'Publish resources for your students and privately communicate with them using Cavy.',
      keywords: 'student support, support platform, helpdesk, help desk, live chat'
    },
    opengraph: {
      'og:type': 'article',
      'og:image': 'https://getcavy.com/static/opengraph/academic.jpg',
      'og:image:height': 422,
      'og:image:width': 806,
      'og:title': 'Talk Privately With Students',
      'og:site_name': 'Cavy',
      'og:description': 'Publish resources for your students and privately communicate with them using Cavy.',
      'og:url': 'https://getcavy.com/academic'
    }
  } }
];
