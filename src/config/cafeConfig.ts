/**
 * The only file you need to edit for a new café.
 *
 * Images belong in public/images/ and are referenced from the site root, for
 * example: '/images/cafe-logo.png'. Leave an image field empty to use the
 * tasteful built-in fallback. Keep links as complete https:// URLs.
 */

export type ReviewPreset = {
  /** Stable id used by React when the list is rendered. */
  id: string
  /** A genuine-experience prompt a customer may copy and personalize. */
  message: string
  /** Number of stars to display, from 1 through 5. */
  rating: 1 | 2 | 3 | 4 | 5
  /** Small category label shown above the suggestion. */
  label: string
}

export type CafeButtonLabels = {
  instagram: string
  whatsapp: string
  facebook: string
  copyAndPost: string
  writeOwnReview: string
  openGoogleReviews: string
}

export type CafeConfig = {
  cafeName: string
  logoImage: string
  bannerImage: string
  tagline: string
  welcomeMessage: string
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  textColor: string
  instagramUrl: string
  whatsappUrl: string
  facebookUrl?: string
  cafeWebsiteUrl?: string
  googleReviewUrl: string
  address?: string
  contactInfo?: string
  hours?: string
  reviewHeading: string
  reviewSubheading: string
  heroKicker: string
  heroStamp: string
  footerText: string
  buttonLabels: CafeButtonLabels
  reviewPresets: [ReviewPreset, ReviewPreset, ReviewPreset, ReviewPreset, ReviewPreset]
}

/**
 * Sample content is intentionally non-production. Replace the placeholders,
 * images, colors, and five review messages before deploying for a real café.
 */
export const cafeConfig: CafeConfig = {
  cafeName: 'The Good Stuff Café',
  logoImage: '',
  bannerImage: '',
  tagline: 'Good food. Great moments.',
  welcomeMessage: 'A warm little corner for slow sips, shared plates, and good company.',
  primaryColor: '#4e2a1d',
  secondaryColor: '#c98a55',
  backgroundColor: '#fbf5ec',
  textColor: '#30221d',
  // Example values only. Replace them with the café owner’s real URLs.
  instagramUrl: 'https://www.instagram.com/yourcafe/',
  whatsappUrl: 'https://wa.me/919978653521',
  facebookUrl: '',
  cafeWebsiteUrl: '',
  googleReviewUrl: 'https://www.google.com/maps/place/The+Good+Stuff+%7C+Citylight/@21.1724433,72.7938842,17z/data=!4m8!3m7!1s0x3be053d68e4c0227:0x1d6b6a1d73095ec4!8m2!3d21.1724433!4d72.7938842!9m1!1b1!16s%2Fg%2F11kq5swskm!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D',
  address: 'G-1, SNS Saigon, City Light Rd, near Jani Farsan, Shringar Society, Athwa, Surat, Gujarat 395007',
  contactInfo: '+919978653521',
  hours: '10:00 AM - 8:00 PM',
  reviewHeading: 'How was your experience?',
  reviewSubheading: 'Choose a genuine note that feels like you, or write your own.',
  heroKicker: 'A friendly place for everyday rituals',
  heroStamp: 'Slow mornings\n& warm cups',
  footerText: 'Good food · Good people · Great moments',
  buttonLabels: {
    instagram: 'Follow us on Instagram',
    whatsapp: 'Chat with us on WhatsApp',
    facebook: 'Follow us on Facebook',
    copyAndPost: 'Copy & Post',
    writeOwnReview: 'Write My Own Review',
    openGoogleReviews: 'Open Google Reviews',
  },
  reviewPresets: [
    {
      id: 'warm-welcome',
      message: 'I had a lovely visit with warm service, a welcoming atmosphere, and food I genuinely enjoyed.',
      rating: 5,
      label: 'Warm welcome',
    },
    {
      id: 'coffee-and-bites',
      message: 'The coffee was delicious and the small bites were fresh. A very easy place to recommend.',
      rating: 5,
      label: 'Coffee & bites',
    },
    {
      id: 'good-vibes',
      message: 'Loved the ambience. It is a comfortable spot to slow down, catch up, and enjoy a good cup.',
      rating: 4,
      label: 'Good vibes',
    },
    {
      id: 'friendly-team',
      message: 'Tasty food, friendly service, and a relaxed setting. I would happily visit again.',
      rating: 4,
      label: 'Friendly team',
    },
    {
      id: 'lovely-stop',
      message: 'A lovely place to stop for a drink and something to eat. The overall experience was good.',
      rating: 3,
      label: 'Lovely stop',
    },
  ],
}
