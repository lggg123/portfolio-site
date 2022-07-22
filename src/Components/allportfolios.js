import port1 from '../img/portImages/clean_coil_cable.jpeg';
import port2 from '../img/portImages/gono2.png';
import port3 from '../img/portImages/prolon.png';
import port4 from '../img/portImages/tailopez.png';
import port5 from '../img/portImages/equitysmith.png';
import port8 from '../img/portImages/fedes.jpeg';
import port6 from '../img/portImages/port5.jpg';
import port7 from '../img/portImages/port6.jpg';

const portfolios = [
  // {
  //     id: 1,
  //     category: 'E-Commerce',
  //     link1: 'www.cleancoilcable.com',
  //     link2: 'www.github.com',
  //     icon1: 'WS',
  //     icon2: 'G',
  //     image: port1,
  //     title: 'Clean Coil Cable',
  //     description: 'E-commerce website built on the shopify platform using Vuejs, HTML, SCSS, and Liquid'
  // },
  {
    id: 1,
    category: 'Business',
    link1: 'www.equitysmith.com',
    // link2: 'www.github.com',
    icon1: 'WS',
    // icon2: 'G',
    image: port5,
    title: 'Equitysmith',
    description:
      'Currently building a replacement for the Wordpress website with a MongoDB, Express.js, React.js, Node.js website using AWS Lambda in docker containers.',
  },
  {
    id: 2,
    category: 'E-Commerce',
    link1: 'www.gono2.com',
    link2: 'www.github.com',
    icon1: 'WS',
    icon2: 'G',
    image: port2,
    title: 'No.2',
    description:
      'E-Commerce website built on shopify redesigned with ReactJS and GraphQl',
  },
  {
    id: 3,
    category: 'E-Commerce',
    link1: 'www.prolonfmd.com',
    // link2: 'www.github.com',
    icon1: 'WS',
    // icon2: 'G',
    image: port3,
    title: 'Prolon',
    description:
      'Started with Brooklyn theme with customization, and ended with Next.js ReactJS and GraphQl ecommerce site with a Ruby on Rails/React subscription app',
  },
  // {
  //     id: 4,
  //     category: 'Education',
  //     link1: 'www.tailopez.com',
  //     link2: 'www.github.com',
  //     icon1: 'WS',
  //     icon2: 'G',
  //     image: port4,
  //     title: 'Tai Lopez',
  //     description: 'Refactored a custom PHP framework built from a Dolphin dating website fixing up SQL queries and running a front-end audit for bugs'
  // },
  {
    id: 4,
    category: 'Business',
    link1: 'www.ajla.com',
    // link2: 'www.github.com',
    icon1: 'WS',
    // icon2: 'G',
    image: port8,
    title: 'FEDES / AJLA State of Kansas',
    description:
      'Built and fixed the job board and unemployment site for the state of Kansas. Utilized React for the front-end and Ruby on Rails for backend using sidekiq and redis for boackground jobs and a PostgresQL Database.',
  },
];

export default portfolios;
