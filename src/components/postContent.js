import styled from 'styled-components';
import { colors, padding, text } from '../theme';

const PostContent = styled.div`
  p {
    color: ${colors.white};
    font-size: ${text.sizes.base};
  }

  .gatsby-resp-image-wrapper {
    margin-bottom: ${padding.large};
    margin-top: ${padding.large};
    max-width: 100% !important;
  }

  h2 {
    color: ${colors.yellow};
    font-size: ${text.sizes.headingSmall};
    font-weight: ${text.weights.bold};
    margin-top: ${padding.xlarge};
    margin-bottom: ${padding.large};
  }

  h3 {
    margin-top: ${padding.large};
  }

  blockquote {
    p {
      color: ${colors.white};
    }
    margin-top: ${padding.large};
    margin-bottom: ${padding.large};
    margin-left: 0;
    margin-right: 0;
    width: ${`calc(100% - ${padding.large * 2})`};
    border: 2px solid ${colors.green};
    border-radius: ${padding.small};
    padding-top: ${padding.small};
    padding-bottom: ${padding.small};
    padding-left: ${padding.large};
    padding-right: ${padding.large};
  }

  ol,
  ul {
    margin-bottom: ${padding.large};
  }

  li {
    margin-bottom: ${padding.small};
  }

  kbd {
    color: ${colors.lightGrey} !important;
    text-transform: uppercase;
    border-radius: 0.3em;
    background: ${colors.black};
    padding: 0.1em 0.3em 0.1em;
    white-space: normal;
    border: 1px solid black;
    box-shadow: 0px 2px 0px 0px black;
  }
`;
export default PostContent;
