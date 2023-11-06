// next
import localFont from 'next/font/local';
import { Montserrat } from 'next/font/google';

export const PFDinTextPro = localFont({
  src: [
    {
      path: '../font/PFDinTextPro-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../font/PFDinTextPro-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../font/PFDinTextPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/PFDinTextPro-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../font/PFDinTextPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../font/PFDinTextPro-ThinItalic.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../font/PFDinTextPro-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../font/PFDinTextPro-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../font/PFDinTextPro-MedItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../font/PFDinTextPro-BoldItal.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
});

export const MontserratFont = Montserrat({ subsets: ['latin'] });
