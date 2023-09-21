const usageTerms = ['', ''];

const paymentMethods = [
  {
    id: 1,
    name: 'Visa',
  },
  {
    id: 2,
    name: 'O Pay',
  },
  {
    id: 3,
    name: 'PayPay',
  },
  {
    id: 4,
    name: 'MasterCard',
  },
  {
    id: 5,
    name: 'Google Pay',
  },
  {
    id: 6,
    name: 'Apple Pay',
  },
  {
    id: 7,
    name: 'American Express',
  },
];

const countriesAvail = [
  {
    id: 1,
    name: 'United States of America'
  },
  {
    id: 593,
    name: 'Ecuador'
  }
];

const specialOffers = [
  {
    id: 1,
    minProductsInCart: 1,
    additionalProducts: 6,
    value: 14,
    type: 1, // 'fixedPrice'
    oneTime: true,
    satisfactionGuarantee: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis feugiat est eu malesuada. Curabitur bibendum eu justo sit amet convallis.',
    freeShipping: true, // optional
    displayBrandInDisclaimer: true // optional
  }
];

const customerTestimonials = [
  {
    id: 1,
    ranking: 5,
    author: {
      name: 'Ken T.',
      thumbnail: 'https://picsum.photos/id/65/50'
    },
    verifiedCustomer: true,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere mollis mauris, id tristique neque hendrerit sed. Fusce vel nunc posuere, dignissim velit nec, auctor eros.',
  }
];

const productsAvail = [
  {
    id: 1,
    uri: 'air-ionizer',
    name: 'Air Ionizer',
    brandPrefixed: true,
    ranking: 5,
    stock: 12,
    price: 30,
    description: {
      short: 'Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers.',
      large: 'Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple device controllable from your smart phone; feel the fresh in your environments up 40ft per device. Because everyone deserves to breathe fresh-air.'
    },
    advantages: [
      'Negative Ion Technology may **help with alergens**',
      'Designed for **air reguvenation**',
      '**Perfect for every room** in all types of spaces'
    ],
    images: {
      large: '/img/products/clarifion-air-ionizer-large.png',
      medium: '/img/products/clarifion-air-ionizer-medium.png',
      small: 'https://picsum.photos/id/48/60/80',
    },
    testimonials: [1], // optional
    specialOffer: 1 // optional
  }
];

const cart = [
  { id: 1, product: 1, qty: 2 }
];

const payment = { // i.e. the checkout step
  name: '',
  surname: '',
  email: '',
  country: '',
  state: '',
  postalCode: '',
  paymentMethod: '',
  cardNumber: '',
  cardExpMonth: 12,
  cardExpYear: 24,
  cardCode: 123
};

const purchaseSteps = [
  {
    id: 1,
    name: 'cartReview',
    label: 'Cart Review',
    ready: true,
  },
  {
    id: 2,
    name: 'checkout',
    label: 'Checkout',
    ready: true,
  },
  {
    id: 3,
    name: 'specialOffers',
    label: 'Special Offer',
    ready: false,
  },
  {
    id: 4,
    name: 'confirmation',
    label: 'Confirmation',
    ready: false
  }
];

const uiState = {
  currentStep: 3,
  brandPrefix: 'Clarifion',
  displayStepPrefix: true,
  maxSpecialOffers: 1,
  contactEmails: {
    webSupport: 'clarifionsupport@clarifion.com',
    productSupport: 'product.support@clarifion.com',
    contact: 'hello@clarifion.com'
  },
  topLinks: [
    { label: '30-DAY SATISFACTION GUARANTEE', url: '#', icon: 'bi bi-patch-check' },
    { label: 'FREE DELIVERY IN ORDERS OVER $40', url: '#', icon: 'bi bi-truck' },
    { label: '50.000+ HAPPY CUSTOMERS', url: '#', icon: 'bi bi-heart' },
    { label: '100% MONEY BACK GUARANTEE', url: '#', icon: 'bi bi-check2-circle' },
  ]
};

const initialState = {
  paymentMethods,
  countriesAvail,
  specialOffers,
  customerTestimonials,
  productsAvail,
  cart,
  payment,
  purchaseSteps,
  uiState
};

export default initialState;
