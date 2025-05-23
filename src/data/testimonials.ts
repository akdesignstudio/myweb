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
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechInnovate",
    quote: "Working with this designer transformed our product. They have an incredible ability to understand user needs and translate them into beautiful, functional designs. Our user engagement increased by 45% after the redesign.",
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "CEO",
    company: "Startup Vision",
    quote: "The attention to detail and strategic thinking in their design process is outstanding. They didn't just make our app look better—they made it work better. Users immediately noticed the difference.",
    imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Emma Chen",
    role: "Marketing Director",
    company: "Global Brands",
    quote: "Their ability to balance aesthetics with functionality is remarkable. The redesign not only looked stunning but also significantly improved our conversion rates. It was a pleasure collaborating with such a talented designer.",
    imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];