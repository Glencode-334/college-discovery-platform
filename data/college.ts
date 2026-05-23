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
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f",

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
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",

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
];