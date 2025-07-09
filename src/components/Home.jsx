import html from "../assets/images/icon-html.svg";
import css from "../assets/images/icon-css.svg";
import javascript from "../assets/images/icon-js.svg";
import assess from "../assets/images/icon-accessibility.svg";
import { NavLink } from 'react-router-dom';


export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row gap-y-10 sm:gap-y-16">
      <header>
        <h1 className="title font-light">Welcome to the</h1>
        <h1 className="title font-medium">Frontend Quiz!</h1>
        <p className="text-sm italic text-light-secondary dark:text-dark-secondary mt-4 lg:mt-12 sm:text-xl">
          Pick a subject to get started.
        </p>
      </header>

      <div className="flex flex-col gap-4 sm:gap-6">
        <NavLink className="box hover:shadow-md" to="/html">
          <div className="sub-icon bg-orange-50">
            <img src={html} />
          </div>
          <p className="subjects uppercase">html</p>
        </NavLink>

        <NavLink className="box hover:shadow-md" to="/css">
          <div className="sub-icon bg-green-100">
            <img src={css} />
          </div>
          <p className="subjects uppercase">css</p>
        </NavLink>

        <NavLink className="box hover:shadow-md" to="/javascript">
          <div className="sub-icon bg-blue-50">
            <img src={javascript} />
          </div>
          <p className="subjects">JavaScript</p>
        </NavLink>

        <NavLink className="box hover:shadow-md" to="/assessibility">
          <div className="sub-icon bg-purple-100">
            <img src={assess} />
          </div>
          <p className="subjects">Accessibility</p>
        </NavLink>
      </div>
    </div>
  );
}
