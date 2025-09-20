import Image from "next/image";
import { Fragment } from "react";

const word = [
  "Backend Developer",
  "Node.js & FastAPI",
  "Java & Spring Boot",
  "TypeScript",
  "Prisma & PostgreSQL",
  "REST & GraphQL APIs",
  "Authentication & RBAC",
  "Database Design & Optimization",
  "Server-Side Logic",
  "Performance Optimization",
  "CI/CD & Deployment",
  "Docker & AWS",
  "Secure File Uploads",
  "Automated Workflows",
  "Scalable Backend Systems",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="w-full overflow-hidden -rotate-3 bg-gradient-to-r from-teal-300 to-orange-500">
        <div className="relative w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-6 py-3 animate-move-left [animation-duration:30s] whitespace-nowrap">
            {[...new Array(10)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {word.map((word) => (
                  <div
                    key={word + idx}
                    className="inline-flex gap-2 items-center"
                  >
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <Image
                      src="/star.svg"
                      alt="star"
                      width={24}
                      height={24}
                      className="-rotate-12"
                    />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
