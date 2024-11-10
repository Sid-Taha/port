import { Caveat } from 'next/font/google'



export const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify weights you need
  variable: '--font-caveat', // Optional: use a CSS variable for easier reference
  display: 'swap', // Fallback option for better performance
});