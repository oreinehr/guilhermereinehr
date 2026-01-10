import Image from "next/image";

type Project = {
  id: number;
  src: string;
  type: "image" | "video";
  className: string;
};

const projects: Project[] = [
  {
    id: 1,
    src: "/projects/conceito.mp4",
    type: "video",
    className: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "/projects/2.jpg",
    type: "image",
    className: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/projects/3.jpg",
    type: "image",
    className: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "/projects/4.jpg",
    type: "image",
    className: "col-span-1 row-span-2",
  },
  {
    id: 5,
    src: "/projects/5.jpg",
    type: "image",
    className: "col-span-1 row-span-1",
  },
];

export default function BentoProjects() {
  return (
    <section className="relative w-full bg-black px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[240px] md:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-3xl bg-neutral-900 ${project.className}`}
            >
              {/* IMAGE */}
              {project.type === "image" && (
                <Image
                  src={project.src}
                  alt="Project"
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />
              )}

              {/* VIDEO */}
              {project.type === "video" && (
                <video
                  src={project.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />
              )}

              {/* Overlay */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0
                  bg-black/10
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
