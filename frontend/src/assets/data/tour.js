import tourImg01 from "../t1.jpg";
import tourImg02 from "../t2.jpg";
import tourImg03 from "../t3.jpg";
import tourImg04 from "../t4.jpg";
import tourImg05 from "../t5.jpg";
import tourImg06 from "../t6.jpg";
import tourImg07 from "../t7.jpg";

const tours = [
  {
    id: "01",
    title: "Westminster Bridge",
    city: "London",
    distance: 300,
    price: 10000,
    maxGroupSize: 10,
    desc: "tours.westminsterBridge.desc",
    availableDates: ["5-1-2025", "2-1-2025", "7-2-2025"],
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali, Indonesia",
    city: "Indonesia",
    distance: 400,
    price: 10000,
    maxGroupSize: 8,
    desc: "tours.bali.desc",
    availableDates: ["5-1-2025", "2-1-2025", "7-2-2025"],
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 10000,
    maxGroupSize: 8,
    desc: "tours.snowyMountains.desc",
    availableDates: ["5-1-2025", "2-1-2025", "7-2-2025"],
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Beautiful Sunrise, Thailand",
    city: "Thailand",
    distance: 500,
    price: 10000,
    maxGroupSize: 8,
    desc: "tours.beautifulSunrise.desc",
    availableDates: ["5-1-2025", "2-1-2025", "7-2-2025"],
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nusa Pendia Bali, Indonesia",
    city: "Indonesia",
    distance: 500,
    price: 10000,
    maxGroupSize: 8,
    desc: "tours.nusaPendia.desc",
    availableDates: ["5-1-2025", "2-1-2025", "7-2-2025"],
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms Spring",
    city: "Japan",
    distance: 500,
    price: 10000,
    maxGroupSize: 8,
    desc: "tours.cherryBlossoms.desc",
    availableDates: ["5-1-2025", "2-1-2025", "7-2-2025"],
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Holmen Lofoten",
    city: "France",
    distance: 500,
    price: 10000,
    maxGroupSize: 8,
    desc: "tours.holmenLofoten.desc",
    availableDates: ["5-1-2025", "2-1-2025", "7-2-2025"],
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains, Thailand",
    city: "Thailand",
    distance: 500,
    price: 10000,
    maxGroupSize: 8,
    desc: "tours.snowyMountains2.desc",
    availableDates: ["5-1-2025", "2-1-2025", "7-2-2025"],
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;
