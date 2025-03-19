import { Afacad } from "next/font/google";
import Image from "next/image";

const afacad = Afacad({
  subsets: ["latin"],
  preload: false,
});

const Homepage = () => {
  return (
    <div
      id="home"
      className={`${afacad.className} py-24 max-w-6xl mx-auto p-4`}
    >
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-3/5 lg:pr-12">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 sm:py-6 lg:py-8">
            Hello, <span className="text-[#db8607]">My name is</span>
          </p>
          <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl pb-4 sm:pb-6 lg:pb-8">
            Latifa Umunyana
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl pb-4 sm:pb-6 lg:pb-8">
            I am a{" "}
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[#db8607]">
              Software Developer
            </span>
          </p>
          <p className="text-sm sm:text-base lg:text-lg max-w-2xl mb-8">
            With the internet booming across Africa over the last decade, the
            gaming sector has grown into a multi-billion dollar sector with many
            career paths and innovations popping up at every corner. Women make
            up 65% of the total number of mobile game consumers in the world.
            However, only 5% of game developers are women. Latifa believes that
            women should be involved in the making of games for a more inclusive
            outcome. Using her technical skills and game enthusiasm, she
            believes leveraging generative AI for inclusion can reduce bias in
            the game industry as well as improve user experience.
          </p>

          <div className="flex justify-start space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/latifaumunyana/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/LinkedIn.svg"
                alt="LinkedIn"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://x.com/Latifa_Umunyana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/Twitter.svg"
                alt="Twitter"
                width={30}
                height={30}
              />
            </a>
            <a
              href="https://github.com/Latifah-Umunyana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/github.svg"
                alt="Github"
                width={30}
                height={30}
              />
            </a>
          </div>

          <a
            href="/images/Latifa_Umunyana_CV.pdf"
            download="Latifa_Umunyana_CV.pdf"
            className="inline-block"
          >
            <button className="bg-[#db8607] hover:bg-white text-black font-semibold text-lg sm:text-xl lg:text-2xl px-8 sm:px-12 py-2 sm:py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg">
              View CV
            </button>
          </a>
        </div>

        <div className="lg:w-2/5 mt-12 lg:mt-0 relative">
          <div className="relative z-10">
            <Image
              src="/images/Profile.jpg"
              alt="Latifa Umunyana"
              width={400}
              height={500}
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="absolute top-4 -left-4 w-full h-full bg-[#db8607] rounded-lg -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
