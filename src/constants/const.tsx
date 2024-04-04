
interface Iexplore {
  id: string,
  imgUrl: string,
  title: string
}

export const ExploreWorlds: Iexplore[] = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: 'Hawkins Labs',
  },
];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
      'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
      'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
      'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
    link: "https://www.theinformation.com/articles/elon-musk-s-metaverse-skepticism-niantic-s-key-ar-metric"
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
      'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
    link: "https://texti.app/phrase/7-tips-to-easily-master-the-madness-of-the-metaverse"
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
      'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
    link: "https://www.lonelyplanet.com/articles/virtual-tours-travel-destinations"
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];

export const navConst=[
{
  name:"Home",
  link:"/",
},
{
  name:"Meta Store",
  link:"/metastore",
},
{
  name:"Meta worlds",
  link:"/metaworlds",
},
]
export const storeNavConst=[
{
  name:"Vr devices",
  link:"/metastore/vr",
},
{
  name:"Smart watches",
  link:"/metastore/watch",
},
{
  name:"Headphones",
  link:"/metastore/headphones",
},
{
  name:"Consoles",
  link:"/metastore/consoles",
},
{
  name:"All",
  link:"/metastore/all",
}
]

interface Iproducts {
  name:string,
  id:string,
  category:string,
  img:string,
  desc:string;
  price:string;
  check?:string;
}
export const Products:Iproducts[]=[
  {
  name:"Apple vision pro",
  id:"1",
  category:"vr" ,
  img:"/products/vr devices/Apple-Vision-Pro.webp",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"1500$"
},
  {
  name:"Meta headset",
  id:"2",
  category:"vr",
  img:"/products/vr devices/14416.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"900$"
},
{
  name:"Samsung gear 2",
  id:"3",
  category:"vr",
  img:"/products/vr devices/h4.jpeg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"1000$"
},
  {
  name:"Samsung gear 1",
  id:"4",
  category:"vr",
  img:"/products/vr devices/vinicius-amnx-amano-MvJezf8FT4o-unsplash.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"800$"
},
  {
  name:"Sony headset",
  id:"5",
  category:"vr",
  img:"/products/vr devices/vr-technology-innovation-illustration-isolated/DJV JUL 2373-06.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"700$"
},
{
  name:"Samsung gear 2",
  id:"3",
  category:"vr",
  img:"/products/vr devices/h4.jpeg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"1000$"
},
  {
  name:"Samsung gear 1",
  id:"4",
  category:"vr",
  img:"/products/vr devices/vinicius-amnx-amano-MvJezf8FT4o-unsplash.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"800$"
},
{
  name:"Sony headset",
  id:"5",
  category:"vr",
  img:"/products/vr devices/vr-technology-innovation-illustration-isolated/DJV JUL 2373-06.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"700$"
},
{
  name:"Sony headset",
  id:"5",
  category:"vr",
  img:"/products/vr devices/vr-technology-innovation-illustration-isolated/DJV JUL 2373-06.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"700$"
},
{
  name:"Apple watch series 2",
  id:"6",
  category:"watch",
  img:"/products/smart-watches/w1.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"100$"
},
{
  name:"Apple watch series 3",
  id:"7",
  category:"watch",
  img:"/products/smart-watches/w2.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"180$"
},
{
  name:"TW s5",
  id:"8",
  category:"watch",
  img:"/products/smart-watches/w3.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"80$"
},
{
  name:"Apple watch series 1",
  id:"9",
  category:"watch",
  img:"/products/smart-watches/w4.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"90$"
},
{
  name:"Smart band",
  id:"10",
  category:"watch",
  img:"/products/smart-watches/w5.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"100$"
},
{
  name:"Apple watch series 2",
  id:"6",
  category:"watch",
  img:"/products/smart-watches/w1.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"100$"
},
{
  name:"Apple watch series 3",
  id:"7",
  category:"watch",
  img:"/products/smart-watches/w2.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"180$"
},
{
  name:"TW s5",
  id:"8",
  category:"watch",
  img:"/products/smart-watches/w3.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"80$"
},
{
  name:"Apple watch series 1",
  id:"9",
  category:"watch",
  img:"/products/smart-watches/w4.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"90$"
},
{
  name:"Sony H-series",
  id:"11",
  category:"headphones",
  img:"/products/headphone/e1.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"100$"
},
{
  name:"Philips magic",
  id:"12",
  category:"headphones",
  img:"/products/headphone/e3.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"90$"
},
{
  name:"Boss alpha",
  id:"13",
  category:"headphones",
  img:"/products/headphone/e5.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"300$"
},
{
  name:"Samsung headphones",
  id:"14",
  category:"headphones",
  img:"/products/headphone/e6.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"120$"
},
{
  name:"Boss X",
  id:"15",
  category:"headphones",
  img:"/products/headphone/e2.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"150$"
},
{
  name:"Sony H-series",
  id:"11",
  category:"headphones",
  img:"/products/headphone/e1.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"100$"
},
{
  name:"Philips magic",
  id:"12",
  category:"headphones",
  img:"/products/headphone/e3.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"90$"
},
{
  name:"Boss alpha",
  id:"13",
  category:"headphones",
  img:"/products/headphone/e5.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"300$"
},
{
  name:"Samsung headphones",
  id:"14",
  category:"headphones",
  img:"/products/headphone/e6.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"120$"
},
{
  name:"Advanced controller PS5",
  id:"16",
  category:"consoles",
  img:"/products/gaming/e2.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"70$"
},
{
  name:"PS5 500gb",
  id:"17",
  category:"consoles",
  img:"/products/gaming/g1.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"500$"
},
{
  name:"Vr racket",
  id:"18",
  category:"consoles",
  img:"/products/gaming/e3.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"100$"
},
{
  name:"Neon ps4 controller",
  id:"19",
  category:"consoles",
  img:"/products/gaming/e4.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"60$"
},
{
  name:"PS4 1Tb",
  id:"20",
  category:"consoles",
  img:"/products/gaming/e5.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"400$"
},
{
  name:"Xbox 1Tb",
  id:"20",
  category:"consoles",
  img:"/products/gaming/e6.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"500$",
  check:"all"
},
{
  name:"Advanced controller PS5",
  id:"16",
  category:"consoles",
  img:"/products/gaming/e2.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"70$"
},
{
  name:"PS5 500gb",
  id:"17",
  category:"consoles",
  img:"/products/gaming/g1.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"500$"
},
{
  name:"Vr racket",
  id:"18",
  category:"consoles",
  img:"/products/gaming/e3.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"100$"
},
{
  name:"Neon ps4 controller",
  id:"19",
  category:"consoles",
  img:"/products/gaming/e4.jpg",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  price:"60$"
},
]

export const slides = [
  {
    name: 'hologram',
    url: '/slider/icons8-hologram-48.png',
  },
  {
    name: 'icons8-meta',
    url: '/slider/icons8-meta-24.png',
  },
  {
    name: 'multiverse',
    url: '/slider/icons8-multiverse-64.png',
  },
  {
    name: 'oculus',
    url: '/slider/icons8-oculus-100.png',
  },
  {
    name: 'planets',
    url: '/slider/icons8-planets-24.png'
  },
  {
    name: 'meta-1',
    url: '/slider/meta-1.png'
  },
  {
    name: 'meta-2',
    url: '/slider/meta.png'
  },
  {
    name: 'virtual',
    url: '/slider/virtual.png'
  },
  {
    name: 'vr-goggles',
    url: '/slider/vr-goggles.png'
  },
  {
    name: 'vr-pano',
    url: '/vrpano.svg'
  },
  {
    name: 'headset',
    url: '/headset.svg'
  },
];

