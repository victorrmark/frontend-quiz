import html from "../assets/images/icon-html.svg";
import css from "../assets/images/icon-css.svg";
import javascript from "../assets/images/icon-js.svg";
import assess from "../assets/images/icon-accessibility.svg";
import { NavLink } from 'react-router-dom';


export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-y-10 sm:gap-y-16 gap-x-8">
      <header className="md:w-50%] grow">
        <h1 className="title font-light">Welcome to the</h1>
        <h1 className="title font-medium">Frontend Quiz!</h1>
        <p className="text-sm italic text-light-secondary dark:text-dark-secondary mt-4 lg:mt-6 sm:text-xl">
          Pick a subject to get started.
        </p>
      </header>

      <div className="flex flex-col gap-3.5 sm:gap-4 grow">
        <NavLink className="box hover:shadow-md h-16" to="/html">
          <div className="sub-icon bg-orange-50">
            <img src={html} />
          </div>
          <p className="subjects uppercase">html</p>
        </NavLink>

        <NavLink className="box hover:shadow-md  h-16" to="/css">
          <div className="sub-icon bg-green-100">
            <img src={css} />
          </div>
          <p className="subjects uppercase">css</p>
        </NavLink>

        <NavLink className="box hover:shadow-md  h-16" to="/javascript">
          <div className="sub-icon bg-blue-50">
            <img src={javascript} />
          </div>
          <p className="subjects">JavaScript</p>
        </NavLink>

        <NavLink className="box hover:shadow-md h-16" to="/assessibility">
          <div className="sub-icon bg-purple-100">
            <img src={assess} />
          </div>
          <p className="subjects">Accessibility</p>
        </NavLink>
      </div>
    </div>
  );
}
