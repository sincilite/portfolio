import React from "react";
import propTypes from "prop-types";
import { marked } from "marked";

const HtmlContent = (props) => {

  const createHTML = (html) => {
    return { __html: html };
  }

  return (
    <div dangerouslySetInnerHTML={createHTML(marked.parse(props.markDown))} />
  );

};

HtmlContent.propTypes = {
  markDown: propTypes.string,
};


export default HtmlContent;