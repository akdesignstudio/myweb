export interface Testimonial {
  id: number;
  project_name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    project_name: "Minibet.games",
    role: "UX/UI Design",
    company: "OpenXcell Pvt. Ltd.",
    quote: "A full-scale Game Betting Platform built from scratch, combining casino-style games and sports betting for both web and mobile users. I led the end-to-end product design — from conceptualization to final UI — including the admin dashboard, transaction flows, and responsive interface.",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    project_name: "CIN7 Core – Orders, Inventory & Shipping Management System",
    role: "Product Designer",
    company: "CIN7 India Pvt. Ltd.",
    quote: "CIN7 Core is a cloud-based ERP platform designed for businesses that need centralized control over orders, inventory, purchasing, warehouses, and fulfillment.",
    imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    project_name: "Orderhive - Orders, Inventory & Shipping Management System",
    role: "Senior Product Designer",
    company: "OpenXcell Pvt. Ltd.",
    quote: "Orderhive is a centralized order, inventory, warehouse, and shipping management system designed to automate workflows across eCommerce, wholesale, and retail channels.",
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];
