export interface RouteItem {
  id: string;
  from: string;
  to: string;
  duration: string;
  category: string;
  distanceKm: number;
  image: string;
}

export interface FleetItem {
  id: string;
  name: string;
  specs: string;
  seats: string;
  ac: boolean;
  feature: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  date: string;
  avatar: string;
  rating: number;
  comment: string;
}

export const siteConfig = {
  businessName: "DHASVIKA TRAVELS",
  brandName: "Dhasvika Travels",
  tagline: "Journeys Beyond Boundaries",
  fleetCount: "5+ Sedans",
  ratePerKm: 15,
  minimumTripKm: 130, // MANDATORY: Minimum Trip 130 km. Never ₹130 minimum fare.
  contact: {
    // DESIGN PLACEHOLDER DATA: Update when owner provides real production phone
    phone: "+91 98765 43210",
    phoneDisplay: "+91 98765 43210",
    phoneHref: "tel:+919876543210",
    whatsapp: "+919876543210",
    whatsappHref: "https://wa.me/919876543210",
    email: "contact@dhasvikatravels.com",
    address: "Coimbatore, Tamil Nadu, India",
  },
  agency: {
    name: "SaNeura Technologies",
    role: "Website Development, Digital Branding & Business Promotion",
    phone: "+91 93444 47693",
    phoneDisplay: "93444 47693",
    phoneHref: "tel:+919344447693",
    whatsappHref: "https://wa.me/919344447693?text=Hello%20SaNeura%20Technologies%2C%20I%20am%20interested%20in%20website%20and%20branding%20services.",
  },
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Our Fleet", href: "#fleet" },
    { label: "Routes", href: "#routes" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  routes: [
    {
      id: "ooty",
      from: "Coimbatore",
      to: "Ooty",
      duration: "3.5 hrs",
      category: "Hills & Nature",
      distanceKm: 86,
      image: "/assets/dhasvika/routes/route_ooty_hq.jpg",
    },
    {
      id: "chennai",
      from: "Coimbatore",
      to: "Chennai",
      duration: "8 hrs",
      category: "City & Heritage",
      distanceKm: 505,
      image: "/assets/dhasvika/routes/route_chennai_hq.jpg",
    },
    {
      id: "bangalore",
      from: "Coimbatore",
      to: "Bangalore",
      duration: "6.5 hrs",
      category: "IT Hub & Shopping",
      distanceKm: 365,
      image: "/assets/dhasvika/routes/route_bangalore_hq.jpg",
    },
    {
      id: "trichy",
      from: "Coimbatore",
      to: "Trichy",
      duration: "5 hrs",
      category: "Temples & Heritage",
      distanceKm: 215,
      image: "/assets/dhasvika/routes/route_trichy_hq.jpg",
    },
    {
      id: "madurai",
      from: "Coimbatore",
      to: "Madurai",
      duration: "8 hrs",
      category: "Temples & Culture",
      distanceKm: 215,
      image: "/assets/dhasvika/routes/route_madurai_hq.jpg",
    },
  ] as RouteItem[],
  fleetPreview: [
    {
      id: "etios",
      name: "Toyota Etios",
      specs: "4 Seater · AC · Spacious",
      seats: "4 Seater",
      ac: true,
      feature: "Spacious",
      image: "/assets/dhasvika/fleet/toyota_etios_hq.jpg",
    },
    {
      id: "amaze",
      name: "Honda Amaze",
      specs: "4 Seater · AC · Comfortable",
      seats: "4 Seater",
      ac: true,
      feature: "Comfortable",
      image: "/assets/dhasvika/fleet/honda_amaze_hq.jpg",
    },
    {
      id: "dzire",
      name: "Maruti Dzire",
      specs: "4 Seater · AC · Fuel Efficient",
      seats: "4 Seater",
      ac: true,
      feature: "Fuel Efficient",
      image: "/assets/dhasvika/fleet/maruti_dzire_hq.jpg",
    },
  ] as FleetItem[],
  reviews: [
    {
      id: "arun",
      name: "Arun Kumar",
      location: "Coimbatore",
      date: "12 Jan 2025",
      avatar: "/assets/dhasvika/reviews/arun_kumar_hq.jpg",
      rating: 5,
      comment:
        "Excellent service! The car was clean, the driver was very polite and we reached on time. Highly recommended!",
    },
    {
      id: "priya",
      name: "Priya Menon",
      location: "Chennai",
      date: "3 Feb 2025",
      avatar: "/assets/dhasvika/reviews/priya_menon_hq.jpg",
      rating: 5,
      comment:
        "Very transparent pricing and comfortable ride. DHASVIKA TRAVELS made our Ooty trip memorable!",
    },
    {
      id: "karthik",
      name: "Karthik Raj",
      location: "Bangalore",
      date: "18 Feb 2025",
      avatar: "/assets/dhasvika/reviews/karthik_raj_hq.jpg",
      rating: 5,
      comment:
        "Professional service, safe driving and great communication. Will definitely book again!",
    },
  ] as ReviewItem[],
};
