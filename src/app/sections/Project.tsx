import React from "react";
import { FiExternalLink } from "react-icons/fi";
import styles from "./ProjectsSection.module.css";

const projects = [
  {
    id: "carventory",
    title: "Carventory – Full-Stack Vehicle Platform",
    image: "carventory.png",
    description:
      "An advanced car inventory system with admin access, secure logins, and real-time listing management.",
    href: "https://carventory.vercel.app",
    comingSoon: false,
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker – Personal Finance Tool",
    image: "expense.png",
    description:
      "A lightweight budgeting app for tracking daily income, expenses, and balances with ease.",
    href: "https://expense-tracker-hazel-seven-88.vercel.app/",
    comingSoon: false,
  },
  {
    id: "csis-1430",
    title: "CSIS 1430 Capstone – Personal Website",
    image: "school.png",
    description:
      "A polished personal portfolio showcasing skills, animations, and responsive design learned during this course.",
    href: "http://www.steven-e.ct.ws/?i=2",
    comingSoon: false,
  },
  {
    id: "ecommerce-app",
    title: "E-commerce Platform – Full-Stack Build",
    image: "e-commerce.png",
    description:
      "A complete online shopping experience with payment integration, product filtering, and admin controls.",
    href: "#",
    comingSoon: true,
  },
  {
    id: "dealership-app",
    title: "Dealership App – Inventory System",
    image: "car.png",
    description:
      "A role-based car dealership platform for managing listings, invoices, and direct customer inquiries.",
    href: "#",
    comingSoon: true,
  },
];

export default function ProjectsSection() {
  return (
    <section className="my-project" id="projects">
      <h1 className="section-title autoDisplay text-heading">My Projects</h1>
      {projects.map(({ id, title, image, description, href, comingSoon }) => (
        <div key={id} className="project-card group">
          <div className="project-vidbox autoBlur relative overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-[1.02] group-hover:shadow-2xl">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full rounded-lg transition duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-110"
            />
            {comingSoon && (
              <div className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold bg-yellow-400 text-black rounded">
                Coming Soon
              </div>
            )}
          </div>
          <div className="project-info fadein-left">
            <h1 className="mt-4">
              {title.split(" ").map((word, i) =>
                i === 1 ? (
                  <span key={i} className="gradient">
                    {word}{" "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h1>
            <p className="mt-2">{description}</p>
            <p className="text-yellow-400 font-semibold mt-2 mb-3">
              Tech Stack:{" "}
              <span className="text-yellow-300 font-medium">
                {title.includes("Carventory")
                  ? "Next.js, TypeScript, Tailwind CSS, PostgreSQL, Prisma, StackAuth"
                  : title.includes("Expense")
                  ? "React, TypeScript, Tailwind CSS, Prisma, Clerk"
                  : title.includes("CSIS")
                  ? "HTML5, CSS3, JavaScript"
                  : title.includes("E-commerce")
                  ? "Next.js, TypeScript, Prisma, PostgreSQL, Tailwind CSS, Stripe, Clerk"
                  : "Next.js, TypeScript, PostgreSQL, Prisma, Tailwind CSS, Clerk"}
              </span>
            </p>
            {!comingSoon && (
              <a href={href} target="_blank" rel="noopener noreferrer">
                <button className="mt-1">
                  <FiExternalLink className="inline-block mr-2" />
                  Website
                </button>
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
