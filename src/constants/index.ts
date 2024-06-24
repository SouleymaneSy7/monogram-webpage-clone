import {
  packAudioImg,
  packPhotoImg,
  packVideoImg,
  dialModuleImg,
  dialModuleHoverImg,
  essentialKeyImg,
  essentialKeyHoverImg,
  hero1Img,
  hero2Img,
  miniConsoleImg,
  miniConsoleHoverImg,
  monogramCareImg,
  monogramCareHoverImg,
  monogramCaryingImg,
  monogramCaryingHoverImg,
  monogramCoreImg,
  monogramCoreHoverImg,
  monogramKeyboardImg,
  monogramKeyboardHoverImg,
  monogramKeyboardMultipadImg,
  monogramKeyboardMultipadHoverImg,
  monogramMultipadImg,
  monogramMultipadHoverImg,
  orbiterModuleImg,
  orbiterModuleHoverImg,
  sliderModuleImg,
  sliderModuleHoverImg,
  photoConsoleImg,
  photoConsoleHoverImg,
  audioConsoleImg,
  audioConsoleHoverImg,
  videoConsoleImg,
  videoConsoleHoverImg,
  // chevronDownIcon,
  // facebookIcon,
  // instagramIcon,
  // twitterIcon,
  // youtubeIcon,
  // shopIcon,
  ShopIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
} from "@/utils";

// Header Navigation
export const MobileDropDown = [
  {
    id: 20,
    dropDownTitle: "USD ($)",
  },
  {
    id: 21,
    dropDownTitle: "CAD ($)",
  },
  {
    id: 22,
    dropDownTitle: "EUR (€)",
  },
  {
    id: 23,
    dropDownTitle: "AUD ($)",
  },
  {
    id: 24,
    dropDownTitle: "GBP (£)",
  },
  {
    id: 25,
    dropDownTitle: "KRW (₩)",
  },
  {
    id: 26,
    dropDownTitle: "JPY (¥)",
  },
];

export const headerDesktopNavlist = [
  {
    id: 1,
    title: "How It Works",
  },
  {
    id: 2,
    title: "Workflows",
    dropDownMenu: [
      {
        id: 10,
        dropDownTitle: "Audio console",
      },
      {
        id: 11,
        dropDownTitle: "Photo Console",
      },
      {
        id: 12,
        dropDownTitle: "Video Console",
      },
      {
        id: 13,
        dropDownTitle: "Mini Console",
      },
    ],
  },
  {
    id: 3,
    title: "Download",
  },
  {
    id: 4,
    title: "Blog",
  },
  {
    id: 5,
    title: "Support",
  },
  {
    id: 6,
    title: "Shop",
  },
  {
    id: 7,
    icon: ShopIcon,
  },
  {
    id: 8,
    title: "USD",
    dropDownMenu: [
      {
        id: 20,
        dropDownTitle: "USD ($)",
      },
      {
        id: 21,
        dropDownTitle: "CAD ($)",
      },
      {
        id: 22,
        dropDownTitle: "EUR (€)",
      },
      {
        id: 23,
        dropDownTitle: "AUD ($)",
      },
      {
        id: 24,
        dropDownTitle: "GBP (£)",
      },
      {
        id: 25,
        dropDownTitle: "KRW (₩)",
      },
      {
        id: 26,
        dropDownTitle: "JPY (¥)",
      },
    ],
  },
];

export const headerMobileNavlist = [
  {
    id: 1,
    title: "How It Works",
  },
  {
    id: 2,
    title: "Workflows",
  },
  {
    id: 3,
    title: "Audio console",
  },
  {
    id: 4,
    title: "Photo Console",
  },
  {
    id: 5,
    title: "Video Console",
  },
  {
    id: 6,
    title: "Mini Console",
  },
  {
    id: 7,
    title: "Download",
  },
  {
    id: 8,
    title: "Blog",
  },
  {
    id: 9,
    title: "Support",
  },
  {
    id: 10,
    title: "Shop",
  },
];

// Hero
export const mainHero = {
  title: "A CONSOLE FOR EVERY WORKFLOW",
  description: "Discover the perfect console for yours.",
  heroImg: hero1Img,
};

export const sectionHero = {
  title: "CREATE YOUR OWN CONSOLE",
  description: "Add-on to make it perfect.",
  sectionHeroImg: hero2Img,
};

// Top Cards
export const topCards = [
  {
    id: 1,
    cardImg: miniConsoleImg,
    cardImgHover: miniConsoleHoverImg,
    cardTitle: "MINI CONSOLE",
    cardDescription: "Ideal for everyday shortcuts. Adaptable to any workflow.",
    cardPrice: "386 $AU",
  },
  {
    id: 2,
    cardImg: audioConsoleImg,
    cardImgHover: audioConsoleHoverImg,
    cardTitle: "AUDIO CONSOLE",
    cardDescription: "Ideal for music & audio. Adaptable to any workflow.",
    cardPrice: "774 $AU",
  },
  {
    id: 3,
    cardImg: photoConsoleImg,
    cardImgHover: photoConsoleHoverImg,
    cardTitle: "PHOTO CONSOLE",
    cardDescription: "Ideal for photo & video. Adaptable to any workflow.",
    cardPrice: "929 $AU",
  },
  {
    id: 4,
    cardImg: videoConsoleImg,
    cardImgHover: videoConsoleHoverImg,
    cardTitle: "VIDEO CONSOLE",
    cardDescription: "Ideal for Video & Film. Adaptable to any workflow.",
    cardPrice: "1393 $AU",
  },
  {
    id: 5,
    cardImg: monogramKeyboardMultipadImg,
    cardImgHover: monogramKeyboardMultipadHoverImg,
    cardTitle: "Monogram Keyboard + Multipad",
    cardDescription: "Adaptable to any workflow.",
    cardPrice: "851 $AU",
  },
];

// Bottom Cards
export const bottomCards = [
  {
    id: 1,
    cardImg: monogramKeyboardImg,
    cardImgHover: monogramKeyboardHoverImg,
    cardTitle: "Monogram Keyboard",
    cardPrice: "619 $AU",
  },
  {
    id: 2,
    cardImg: monogramMultipadImg,
    cardImgHover: monogramMultipadHoverImg,
    cardTitle: "Monogram Multipad",
    cardPrice: "309 $AU",
  },
  {
    id: 3,
    cardImg: monogramCoreImg,
    cardImgHover: monogramCoreHoverImg,
    cardTitle: "Monogram Core",
    cardPrice: "247 $AU",
  },
  {
    id: 4,
    cardImg: sliderModuleImg,
    cardImgHover: sliderModuleHoverImg,
    cardTitle: "Slider Module",
    cardPrice: "247 $AU",
  },
  {
    id: 5,
    cardImg: orbiterModuleImg,
    cardImgHover: orbiterModuleHoverImg,
    cardTitle: "Orbiter Module",
    cardPrice: "247 $AU",
  },
  {
    id: 6,
    cardImg: essentialKeyImg,
    cardImgHover: essentialKeyHoverImg,
    cardTitle: "Essential Keys Module",
    cardPrice: "200 $AU",
  },
  {
    id: 7,
    cardImg: dialModuleImg,
    cardImgHover: dialModuleHoverImg,
    cardTitle: "Dial Module",
    cardPrice: "200 $AU",
  },
  {
    id: 8,
    cardImg: monogramCaryingImg,
    cardImgHover: monogramCaryingHoverImg,
    cardTitle: "Monogram Carrying Case",
    cardPrice: "92 $AU",
  },
  {
    id: 9,
    cardImg: packVideoImg,
    cardTitle: "Console Pack: Video",
    cardPrice: "107 $AU",
  },
  {
    id: 10,
    cardImg: packPhotoImg,
    cardTitle: "Console Pack: Photo",
    cardPrice: "61 $AU",
  },
  {
    id: 11,
    cardImg: packAudioImg,
    cardTitle: "Console Pack: Audio",
    cardPrice: "45 $AU",
  },
  {
    id: 12,
    cardImg: monogramCareImg,
    cardImgHover: monogramCareHoverImg,
    cardTitle: "Monogram Care",
    cardPrice: "30 $AU - 200 $AU",
  },
];

// Footer
export const footerSubscribe = {
  title: "SUBSCRIBE TO MONOGRAM",
  description:
    "Master productivity with Creative Console and get all the latest Monogram news.",
  inputPlaceholder: "Email Address",
  buttonText: "SUBMIT",
  socialIcons: [InstagramIcon, TwitterIcon, FacebookIcon, YoutubeIcon],
};

export const footerAddress = {
  title: "MONOGRAM",
  addressList: ["305 King St. W.", "Suite 502", "Kitchener, ON", "Canada"],
};

export const footerLinks = [
  {
    id: 1,
    title: "QUICK LINKS",
    linkList: ["Home", "How it Works", "Shop", "Download"],
  },
  {
    id: 2,
    title: "HELP",
    linkList: ["FAQs", "Support Center", "Shipping and Sales"],
  },
  {
    id: 3,
    title: "INFORMATION",
    linkList: [
      "About Us",
      "Work with us",
      "Privacy Policy",
      "Terms of Use",
      "Terms of Sale",
      "Press Kit",
    ],
  },
];

export const footerCopyright = "© Monogram 2024";
