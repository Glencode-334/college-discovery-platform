import { College } from "@/types/college";

export const colleges: College[] = [
  {
    id: "1",
    name: "IIT Delhi",
    location: "Delhi",
    fees: 250000,
    rating: 4.8,
    placementRate: "95%",
    description:
      "One of India's premier engineering institutes known for excellent placements and research opportunities.",

    image:
      "https://images.unsplash.com/photo-1562774053-701939374585",

    courses: [
      {
        name: "B.Tech Computer Science",
        duration: "4 Years",
        fees: 250000,
      },
      {
        name: "Electrical Engineering",
        duration: "4 Years",
        fees: 220000,
      },
    ],

    reviews: [
      {
        user: "Rahul",
        rating: 5,
        comment: "Amazing placements and campus life.",
      },
      {
        user: "Sneha",
        rating: 4,
        comment: "Excellent faculty and opportunities.",
      },
    ],
  },

  {
    id: "2",
    name: "NIT Trichy",
    location: "Tamil Nadu",
    fees: 180000,
    rating: 4.5,
    placementRate: "90%",
    description:
      "Top-ranked NIT with strong academics and placement records.",

    image:
      "https://image-static.collegedunia.com/public/college_data/images/appImage/1575529948nitt.jpeg",
    courses: [
      {
        name: "Mechanical Engineering",
        duration: "4 Years",
        fees: 180000,
      },
      {
        name: "Civil Engineering",
        duration: "4 Years",
        fees: 170000,
      },
    ],

    reviews: [
      {
        user: "Priya",
        rating: 4,
        comment: "Great academics and exposure.",
      },
    ],
  },

  {
    id: "3",
    name: "BITS Pilani",
    location: "Rajasthan",
    fees: 350000,
    rating: 4.7,
    placementRate: "93%",
    description:
      "Renowned private institute with flexible academic structure.",

    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",

    courses: [
      {
        name: "Computer Science",
        duration: "4 Years",
        fees: 350000,
      },
    ],

    reviews: [
      {
        user: "Aman",
        rating: 5,
        comment: "Fantastic coding culture.",
      },
    ],
  },

  {
    id: "4",

    name: "IIT Bombay",

    location: "Mumbai, Maharashtra",

    fees: 280000,

    rating: 4.9,

    placementRate: "96%",

    image:
      "https://wallpaperaccess.com/full/8637655.jpg",

     description:
      "IIT Bombay is one of India's premier engineering institutes known for innovation, research, and excellent placements.",

    courses: [
      {
        name: "Computer Science",
        duration: "4 Years",
        fees: 350000,
      },
    ],

    placements:
      "Top recruiters include Google, Microsoft, Amazon, and Goldman Sachs with excellent average packages.",

    reviews: [
      {
        user: "Aman",
        rating: 5,
        comment: "Fantastic coding culture.",
      },
    ],
  },
];