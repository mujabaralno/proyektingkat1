import { title } from "process";

export const nevLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Contact",
    route: "/contact",
  },
];

export const navLinks = [
  {
    label: "Product",
    route: "/product",
    icon: "/assets/svg/chat.svg",
  },
  {
    label: "ChatGPT",
    route: "/product/chatgpt",
    icon: "/assets/svg/chat.svg",

  },
  {
    label: "Summary Text",
    route: "/product/summarytext",
    icon: "/assets/svg/chatsquare.svg",
  },
  {
    label: "Summary Article",
    route: "/product/summaryarticle",
    icon: "/assets/svg/article.svg",
  },
  {
    label: "Text to Image",
    route: "/product/text-to-image",
    icon: "/assets/svg/image.svg",
  
  },
  {
    label: "Text to Speech",
    route: "/product/text-to-speech",
    icon: "/assets/svg/texttoimage.svg",
  },

  {
    label: "Profile",
    route: "/product/profile",
    icon: "/assets/svg/profile.svg",
  },
];

export const features = [
  {
      imgUrl: '/assets/svg/chat.svg',
      title: 'ChatGPT',
      desc: 'When using variants, children animations will start after this duration (in seconds). You can add the transition property to both the Frame and the variant directly. ',
  },
  {
      imgUrl: '/assets/svg/chat.svg',
      title: 'ChatGPT',
      desc: 'When using variants, children animations will start after this duration (in seconds). You can add the transition property to both the Frame and the variant directly. ',
  },
  {
      imgUrl: '/assets/svg/chat.svg',
      title: 'ChatGPT',
      desc: 'When using variants, children animations will start after this duration (in seconds). You can add the transition property to both the Frame and the variant directly. ',
  },
  
]

export const productList = [
  {
    imgUrl: './assets/svg/chat.svg',
    title: 'ChatGPT',
    desc: 'Answer your questions with the power of ChatGPT and get the best expansion of your text.',
    route: '/product/chatgpt'
  },
  {
    imgUrl: './assets/svg/chatsquare.svg',
    title: 'Summary Text',
    desc: 'Summarize your text with the power of ChatGPT and get the best expansion of your text.',
    route: '/product/summarytext'
  },
  {
    imgUrl: './assets/svg/article.svg',
    title: 'Summary Article',
    desc: 'Summarize your link article with the power of ChatGPT and get the best expansion of your text.',
    route: '/product/summaryarticle'
  },
  {
    imgUrl: './assets/svg/image.svg',
    title: 'Text to Image',
    desc: 'Generate an image from text with the power of ChatGPT and get the best expansion of your text.',
    route: '/product/text-to-image'
  },
  {
    imgUrl: './assets/svg/texttoimage.svg',
    title: 'Text to Speech',
    desc: 'Generate a speech from text with the power of ChatGPT and get the best expansion of your text.',
    route: '/product/text-to-speech'
  },
]