import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const CodeSnippet = (props) => {
  return (
    <div>
      <Helmet>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
      </Helmet>
      <p className="codepen h-96 border-box flex items-center justify-items-center border-2 m-1 p-1" data-height="300" data-default-tab="html,result" data-slug-hash={props.code} data-user="sincilite">
        <span>See the Pen <a href={`https://codepen.io/sincilite/pen/${props.code}`}>
        Animated menu active state</a> by Mike van Rooyen (<a href="https://codepen.io/sincilite">@sincilite</a>)
        on <a href="https://codepen.io">CodePen</a>.</span>
      </p>
    </div>
  );
}

CodeSnippet.propTypes = {
  code: PropTypes.string,
}

export default CodeSnippet;
