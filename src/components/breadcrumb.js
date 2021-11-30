import React from 'react';
import { Link } from 'gatsby';
import propTypes from 'prop-types';

const Breadcrumb = (props) => {

  const { links } = props;
  return (
    <ul className="flex justify-items-start text-sm">
      {links.map((link, index) => {
        return (
          <li
            key={index}
            className="inline-block mr-2"
          >
            {link.url ? (
              <Link
                to={link.url}
                className="hover:underline"
              >
                {link.name}
              </Link>
            ) : (<span>{link.name}</span>)}
          </li>
        );
      })}
    </ul>
  );
};

Breadcrumb.propTypes = {
  links: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      url: propTypes.string,
    }),
  ),
};

export default Breadcrumb;