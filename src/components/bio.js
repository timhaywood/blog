/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import styled from 'styled-components';
import { padding } from '../theme';

const StyledBio = styled.div`
  display: flex;
  margin-bottom: ${padding.xlarge};
`;

const BioImage = styled(Image)`
  margin-right: ${padding.xlarge};
  margin-bottom: 0;
  min-width: 25%;
  border-radius: 100%;
`;

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/md-logo.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;
  return (
    <StyledBio>
      <BioImage
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
      />
      <p>
        Articles on Adobe After Effects, JavaScript, templates, and everything
        in between. Connect with us on{' '}
        <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
        {` `}and{` `}
        <a href={`https://github.com/${social.github}`}>Github.</a>
      </p>
    </StyledBio>
  );
};

export default Bio;
