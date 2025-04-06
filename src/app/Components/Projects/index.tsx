import { Afacad } from "next/font/google";
import Image from 'next/image';

interface Project {
  name: string;
  img: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const afacad = Afacad({
  subsets: ["latin"],
  preload: false,
});

const projects = [
  {
    proj: [
      {
        img: "/images/themis-ai.png",
        name: "Themis AI",
        link: "https://drive.google.com/drive/folders/1Q15VpJT-iROo5zri-8GQLRwtxRtZsj4X",
      },
    ],
  },

  {
    proj: [
      {
        img: "/images/weather-forecast.png",
        name: "Panga Meteo",
        link: "https://weather-forecast-nu-rose.vercel.app/",
      }
    ],
  },

  {
    proj: [
      {
       img: "/images/mboga.png",
        name: "Mboga E-commerce Design",
        link: "https://www.figma.com/proto/c9hSedHearoNkEp0vPhtvR/Mboga?node-id=2049-13&t=avHqbOZ0BoogsIW3-1&scaling=scale-down&content-scaling=fixed&page-id=12%3A2",
      },
      
    ],
  },

  {
    proj: [
      {
        img: "/images/timezone.png",
        name: "World Timezone",
        link: "https://world-timezone.vercel.app/",
      },
    ],
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="aspect-w-4 aspect-h-3">
      <a href={project.link} target="_blank" className="text-blue-600 hover:underline">
        <Image
          src={project.img}
          alt={project.name}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </a>
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-black mb-2">{project.name}</h3>
      <div className="flex justify-between items-center"></div>
    </div>
  </div>
);

const Project = () => {
  return (
    <div
      id="projects"
      className={` ${afacad.className} py-24 max-w-6xl mx-auto p-4 font-sans`}
    >
      <h2 className="text-4xl font-bold mb-6 text-center py-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((projectGroup, index) =>
          projectGroup.proj.map((project, projIndex) => (
            <ProjectCard key={`${index}-${projIndex}`} project={project} />
          ))
        )}
      </div>
    </div>
  );
};

export default Project;
