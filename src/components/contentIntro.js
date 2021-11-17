import React from "react";
import PropTypes from "prop-types";

const ContentIntro = (props) => {
  return (
    <article className="w-3/4 m-auto mb-6 sm:m-0 sm:w-full">
      <h3>
        <a
          href={props.link}
          className="inline-block mt-3 bg-gradient-to-r from-yellow-200 to-yellow-200"
        >
          {props.title}
        </a>
      </h3>
      <p>{props.intro}</p>
      <a
        href={props.link}
        className="inline-block mt-2 sm:mt-3 bg-gradient-to-r from-yellow-200 to-yellow-200"
      >Read more</a>
    </article>
  );
}

ContentIntro.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  link: PropTypes.string,
}

export default ContentIntro;