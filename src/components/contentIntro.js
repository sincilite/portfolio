import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const ContentIntro = (props) => {
  return (
    <article className="w-3/4 m-auto mb-6 sm:m-0 sm:w-full">
      <h3>
        <Link
          to={props.link}
          className="inline-block mt-3 bg-gradient-to-r from-yellow-400 to-yellow-400"
        >
          {props.title}
        </Link>
      </h3>
      <p>{props.intro}</p>
      <Link
        to={props.link}
        className="inline-block mt-2 sm:mt-3 bg-gradient-to-r from-yellow-400 to-yellow-400"
      >Read more</Link>
    </article>
  );
}

ContentIntro.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  link: PropTypes.string,
}

export default ContentIntro;