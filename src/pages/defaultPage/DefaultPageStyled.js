import styled from 'styled-components';

const DefaultPageWrapper = styled.div`
  .textError {
    padding-top: 70px;
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.44;
    color: var(--main-text);
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
    @media screen and (min-width: 1280px) {
      padding-top: 150px;
      font-size: 30px;
    }
  }
  .linkError {
    color: var(--accent-color);
    text-decoration: none;
  }
  .imgError {
    margin: 0 auto;
    width: 100%;
  }
`;

export default DefaultPageWrapper;
