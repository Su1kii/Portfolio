import React from "react";
import { FiExternalLink, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const projects = [
  {
    id: "carventory",
    title: "Carventory – Full-Stack Vehicle Platform",
    image: "/carventory.png",
    description:
      "An advanced car inventory system with admin access, secure logins, and real-time listing management.",
    href: "https://carventory.vercel.app",
    comingSoon: false,
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Prisma"],
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker – Personal Finance Tool",
    image: "expense.png",
    description:
      "A lightweight budgeting app for tracking daily income, expenses, and balances with ease.",
    href: "https://expense-tracker-hazel-seven-88.vercel.app/",
    comingSoon: false,
    tags: ["React", "TypeScript", "Tailwind", "Prisma", "Clerk"],
  },
  {
    id: "csis-1430",
    title: "CSIS 1430 Capstone – Personal Website",
    image: "school.png",
    description:
      "A polished personal portfolio showcasing skills, animations, and responsive design learned during this course.",
    href: "http://www.steven-e.ct.ws/?i=2",
    comingSoon: false,
    tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
  {
    id: "dealership-app",
    title: "Dealership App – Inventory System",
    image: "OD1.png",
    description:
      "A role-based car dealership platform for managing listings, invoices, and direct customer inquiries.",
    href: "https://orginal-design-dealership.vercel.app/",
    comingSoon: false,
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind",
      "Stripe",
      "Clerk",
    ],
  },
  {
    id: "ecommerce-app",
    title: "E-commerce Platform – Full-Stack Build",
    image: "e-commerce.png",
    description:
      "A complete online shopping experience with payment integration, product filtering, and admin controls.",
    href: "#",
    comingSoon: true,
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind",
      "Stripe",
      "Clerk",
    ],
  },
  {
    id: "first-portfolio",
    title: "First Ever Portfolio – Personal",
    image: "por12.png",
    description:
      "A simple yet elegant portfolio built using HTML, CSS, and JavaScript to showcase my initial web development skills.",
    href: "https://su1kii.github.io/portfollio-First-project/index.html",
    comingSoon: false,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "ecommerce-frontend",
    title: "Frontend E-Commerce – Retail",
    image: "ecom12.png",
    description:
      "A frontend e-commerce platform built with Next.js, TypeScript, and Tailwind CSS, showcasing responsive design and smooth user interaction.",
    href: "https://next-typescript-practice-nine.vercel.app/",
    comingSoon: false,
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "todo-list-fullstack",
    title: "Full-Stack To-Do List – Personal Tracker Tool",
    image: "todo12.png",
    description:
      "A full-stack To-Do list application built with Next.js (App Router), TypeScript, Prisma, PostgreSQL, and Clerk.dev for authentication.",
    href: "https://to-do-list-two-mu-63.vercel.app/",
    comingSoon: false,
    tags: [
      "Next.js (App Router)",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Clerk.dev",
    ],
  },
  {
    id: "portfolio1231",
    title: "Next.js Portfolio – Personal Site",
    image: "Portfolio1231.png",
    description:
      "A modern developer portfolio built with Next.js, TypeScript, and Tailwind CSS to showcase my skills, projects, and contact info.",
    href: "https://portfolio-git-master-su1kiis-projects.vercel.app/",
    comingSoon: false,
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "product-store",
    title: "Product Store – MERN Stack Inventory App",
    image: "ProductStore.png",
    description:
      "A full-stack CRUD app using the MERN stack, Zustand, and Chakra UI. Allows users to create, update, delete, and view products with live UI feedback.",
    href: "https://product-store-qfn5.onrender.com/",
    comingSoon: false,
    tags: ["MongoDB", "Express", "React", "Node.js", "Zustand", "Chakra UI", "Vite"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#000005] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with back button */}
        <header className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-medium rounded-lg transition-all duration-300 group/button"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-white text-center">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Projects
            </span>
          </h1>
          <p className="mt-4 text-gray-400 text-center max-w-2xl mx-auto">
            A collection of my work showcasing full-stack development skills and
            creative solutions.
          </p>
        </header>

        {/* Projects grid */}
        <div className="grid gap-8 md:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10"
            >
              {project.comingSoon && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold rounded-full shadow-md">
                  Coming Soon
                </div>
              )}

              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000005]/80 via-[#000005]/20 to-transparent md:bg-gradient-to-r md:from-[#000005]/80 md:via-[#000005]/20 md:to-transparent" />
                </div>

                {/* Content */}
                <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {project.title.split(" ").map((word, i) =>
                      i === 1 ? (
                        <span
                          key={i}
                          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                        >
                          {word}{" "}
                        </span>
                      ) : (
                        word + " "
                      )
                    )}
                  </h2>

                  <p className="text-gray-300 mb-4">{project.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800/50 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-xs font-medium rounded-full border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {!project.comingSoon && (
                    <div className="mt-auto">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-300 group/button"
                      >
                        <span>View Project</span>
                        <FiExternalLink className="group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Home Button at the bottom */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-medium rounded-lg transition-all duration-300 group/button"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
