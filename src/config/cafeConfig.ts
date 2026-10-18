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
  cafeName: 'BrewBite Café',
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
  whatsappUrl: 'https://wa.me/91XXXXXXXXXX',
  facebookUrl: '',
  cafeWebsiteUrl: '',
  googleReviewUrl: 'YOUR_CAFE_GOOGLE_REVIEW_URL',
  address: 'Add the café address here',
  contactInfo: 'Add a phone number or contact detail here',
  hours: 'Add opening hours here',
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
