import { ReactComponent as LinkedInLogo } from '../assets/linkedin.svg';
import { ReactComponent as GithubLogo } from '../assets/github.svg';

function Footer() {
  return (
    <div className="py-5 text-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="https://www.linkedin.com/in/miguel-camilo/"
              className="bg-sky-600 hover:bg-sky-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-lg drop-shadow-xl"
              target="_blank"
            >
              <LinkedInLogo />
            </a>

            {/* animate ping radius */}
            <div className="absolute flex w-3 h-3 mr-3 -mt-1 rounded-full  bg-red-600 dark:bg-red-500 animate-ping" />
            {/* animate ping */}
            <div className="absolute flex h-3 w-3 mr-3 -mt-1 bg-red-600 dark:bg-red-600 rounded-full" />

            <a
              href="https://github.com/MiguelCamilo"
              className="bg-zinc-900 hover:bg-zinc-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-lg drop-shadow-xl dark:bg-stone-500 dark:hover:bg-stone-400"
              target="_blank"
            >
              <GithubLogo />
            </a>
            
          </div>
        </div>
      </div>
      <p className="text-sm mt-2  opacity-50">
        &copy; {new Date().getFullYear()} Miguel Camilo. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
