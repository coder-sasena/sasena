import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  sunutrans,
  triples,
  star17,
  // carrent,
  kalkulator,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Staff Operasional",
    company_name: "PT. Sukma Nusantara Transport",
    icon: sunutrans,
    iconBg: "#383E56",
    date: "2016 - 2018",
    points: [
      "Melaksanakan tugas operasional sehari-hari sesuai dengan prosedur dan standar perusahaan.",
      "Memastikan seluruh kegiatan operasional dilaksanakan secara aman, efisien, dan sesuai dengan ketentuan yang berlaku.",
      "Menghasilkan laporan operasional secara berkala (harian, mingguan, bulanan).",
      "Mengelola dokumen dan data operasional, termasuk inventaris.",
      "Memastikan peralatan operasional, mesin, atau perangkat kerja berfungsi dengan baik dan dalam kondisi aman.",
    ],
    // points: [
    //   "Performing daily operational tasks in accordance with company procedures and standards.",
    //   "Ensuring that all operational activities are carried out safely, efficiently, and in compliance with applicable regulations.",
    //   "Generating regular operational reports (daily, weekly, monthly).",
    //   "Managing operational documents and data, including inventory.",
    //   "Ensuring that operational equipment, machinery, or work devices function properly and are in a safe condition.",
    // ],
  },
  {
    title: "Magang Administrasi",
    company_name: "PT. Sentra Support Service",
    icon: triples,
    iconBg: "#E6DEDD",
    date: "2019 - 2019",
    points: [
      "Melaksanakan tugas administrasi kantor untuk mendukung departemen atau divisi yang ditugaskan; menerima dan mengarahkan panggilan telepon dan pengunjung; memberikan informasi tentang layanan dan operasi departemen atau divisi.",
      "Memelihara berbagai file dan catatan di departemen yang ditugaskan; berkas sesuai dengan sistem pengarsipan yang telah ditetapkan.",
      "Mengoperasikan berbagai peralatan kantor termasuk mesin fotokopi, meteran perangko, mesin faksimili, dan komputer; memasukkan dan mengambil data dan teks; mengatur dan memelihara penyimpanan dan pengarsipan disk.",
      "Melakukan tugas dan tanggung jawab terkait sesuai kebutuhan.",
    ],
    // points: [
    //   "Performs office clerical duties in support of an assigned department or division; receives and directs telephone calls and visitors; provides information on department or division services and operations.",
    //   "Maintains a variety of files and records in assigned department; files in accordance with established filing system.",
    //   "Operates a variety of office equipment including copiers, postage meters, facsimile machines, and computers; input and retrieve data and text; organizes and maintains disk storage and filing.",
    //   "Performs related duties and responsibilities as required.",
    // ],
  },
  {
    title: "Admin Sales Onlineshop",
    company_name: "STAR17 Computer",
    icon: star17,
    iconBg: "#383E56",
    date: "2019 - 2021",
    points: [
      "Mengelola dan mengawasi penjualan di marketplace dan platform media sosial (Shopee, Tokopedia).",
      "Mencapai target penjualan sesuai yang ditetapkan.",
      "Update stok, harga, informasi produk, event promosi, ringkasan penjualan, dan administrasi penjualan online.",
      "Berperan aktif dalam kemajuan perusahaan, seperti berkontribusi dalam pembuatan konten bila diperlukan dan memberikan saran ide.",
    ],
    // points: [
    //   "Managing and overseeing sales on marketplaces and social media platforms (Shopee, Tokopedia).",
    //   "Achieving sales targets as set.",
    //   "Updating stock, prices, product information, promotional events, sales summaries, and online sales administration.",
    //   "Playing an active role in company improvement, such as contributing to content creation when needed and suggesting ideas.",
    // ],
  },
  {
    title: "Teknisi Perakitan Komputer",
    // title: "Computer Assembly Technician",
    company_name: "STAR17 Computer",
    icon: star17,
    iconBg: "#383E56",
    date: "2021 - 2024",
    points: [
      "Memilih dan memesan komponen komputer sesuai dengan kebutuhan dan anggaran pelanggan.",
      "Menerima dan memeriksa komponen komputer yang dipesan.",
      "Pasang dan sambungkan semua komponen komputer, termasuk motherboard, CPU, RAM, HDD/SSD, Power Supply, dan perangkat keras lainnya dengan benar.",
      "Instal dan konfigurasikan sistem operasi dan perangkat lunak lainnya.",
      "Lakukan pengujian dan pemecahan masalah untuk memastikan komputer berfungsi dengan baik.",
      "Memberikan dukungan teknis kepada pelanggan.",
    ],
    // points: [
    //   "Select and order computer components according to customer requirements and budget.",
    //   "Receive and inspect ordered computer components.",
    //   "Install and connect all computer components,including motherboards, CPUs, RAM, HDD / SSD, Power Supply, and other hardware correctly.",
    //   "Install and configure the operating system and other software.",
    //   "Perform testing and troubleshooting to ensure the computer is functioning properly.",
    //   "Provide technical support to customers.",
    // ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Kalkulator-Ilmiah Sederhana",
    description:
      "Using Html, CSS & JavaScript I learn how to build a Calculator Application - from start to finish.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: kalkulator,
    source_code_link: "https://github.com/coder-sasena/kalkulator-ilmiah",
  },
];

export { services, technologies, experiences, projects };
// export { services, technologies, experiences, testimonials, projects };
