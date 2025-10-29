export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Minibet - Game Betting Platform",
    role: "UX/UI Design",
    company: "OpenXcell Pvt Ltd",
    quote: "A full-scale Game Betting Platform built from scratch, combining casino-style games and sports betting for both web and mobile users. I led the end-to-end product design — from conceptualization to final UI — including the admin dashboard, transaction flows, and responsive interface.",
    imageUrl: "https://images.minibet.live/games/99ed1137-2d15-41d3-b091-40f6d89d0daa/icon-flky3x.svg"
  },
  {
    id: 2,
    name: "CIN7 Core – Orders Inventory & Shipping Management System",
    role: "Product Designer",
    company: "CIN7 India Pvt Ltd",
    quote: "CIN7 Core is a cloud-based ERP platform designed for businesses that need centralized control over orders, inventory, purchasing, warehouses, and fulfillment. My involvement focused on automation workflows, improving the orders, inventory modules filters on the listing, and layout improvements.",
    imageUrl: "https://www.pencilpay.com/wp-content/uploads/2024/06/Cin7Core-1-1.png"
  },
  {
    id: 3,
    name: "Orderhive - Orders Inventory & Shipping Management System",
    role: "Senior Product Designer",
    company: "OpenXcell Pvt. Ltd.",
    quote: "Orderhive is a centralized order, inventory, warehouse, and shipping management system designed to automate workflows across eCommerce, wholesale, and retail channels. My involvement focused on designing optimized workflows, improving the order processing experience, and enabling fast dispatch operations through UI setup, automation, and layout improvements.",
    imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41xOUk0NIEL._UL1200_.jpg"
  }
];
