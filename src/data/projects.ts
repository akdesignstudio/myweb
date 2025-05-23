export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Landingpage - SaaS product",
    category: "Website",
    description: "Complete redesign of a SaaS application focusing on simplifying complex data driven web app.",
    imageUrl: "https://cdn.dribbble.com/userupload/4528324/file/original-c03a1ced5e58876607390fa33082f61f.png?resize=1504x1128&vertical=center",
    tags: ["UX Design", "UI Design", "Web", "Saas"]
  },
  {
    id: 2,
    title: "Premium Property Booking App",
    category: "Mobile App",
    description: "End-to-end design for a luxury property platform with focus on high-end facility and accommodation in the UAE.",
    imageUrl: "https://cdn.dribbble.com/userupload/27728770/file/original-50fdd483eaa0178df75696c57b9e357e.png?resize=1504x1128&vertical=center",
    tags: ["App Design", "Property", "UI Design"]
  },
  {
    id: 3,
    title: "UAE Taxi Provider Branding",
    category: "Branding",
    description: "Redefining urban mobility in the UAE with trusted, timely, and comfortable rides.",
    imageUrl: "https://cdn.dribbble.com/userupload/40354754/file/original-94e8933e1034e28ac9b7006c79e8ead0.png?resize=2048x1536&vertical=center",
    tags: ["Branding", "Logo Design", "Graphics"]
  },
  {
    id: 4,
    title: "User Management App",
    category: "Mobile App",
    description: "User-centered design for a user management organisation.",
    imageUrl: "https://cdn.dribbble.com/userupload/27191875/file/original-04dcf951f5fd5d3033e4c5676fc4db88.png?resize=1504x1128&vertical=center",
    tags: ["UX Design", "Mobile Platform", "Todo", "Management System"]
  },
  {
    id: 5,
    title: "Product Launch Banner",
    category: "Marketing assets",
    description: "Conceptual and eye-catching advertisement banner for marketing.",
    imageUrl: "https://cdn.dribbble.com/userupload/23070298/file/original-1e4a02827a378ba2d3cb6cad4755b800.png?resize=752x564&vertical=center",
    tags: ["Graphic Design", "Advertisement", "Entertainment"]
  },
  {
    id: 6,
    title: "Talent Profile Website",
    category: "Website",
    description: "Connecting exceptional talent with forward-thinking employers — where skills meet opportunity.",
    imageUrl: "https://cdn.dribbble.com/userupload/6265366/file/original-4f644eb8322b386e66421beee1a3d252.png?resize=1504x1086&vertical=center",
    tags: ["Website", "Portfolio", "Talent", "Career"]
  }
];

export const categories = Array.from(new Set(projects.map(p => p.category)));

export const tags = Array.from(new Set(projects.flatMap(p => p.tags)));