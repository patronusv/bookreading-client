import styled from 'styled-components'

const Wrapper = styled.div`
  .listItem {
    display: ${({tablet}) => tablet ? "flex" : "block"};

    align-items: center;
    padding: 22px 35px;
    border-top:${({tablet}) => tablet ? "none" : "1px solid #e0e5eb"}; 
    border-bottom: ${({tablet}) => tablet ? "none" : "1px solid #e0e5eb"};
    color: var(--main-text);
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    list-style: none;
    position: ${({tablet}) => tablet ? "static" : "relative"};
    & > svg {
      position: ${({tablet}) => tablet ? "static" : "absolute"};
      top: 20px;
      left: 0px;
    }
  }

  .deleteButton {
    position: ${({tablet}) => tablet ? "static" : "absolute"};
    top: 12px;
    right: 0px;
    width: 33px;
    height: 33px;
    border-radius: 50%;
    border: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: transparent;
    cursor: pointer;
    outline: none;

    & > svg {
      fill: var(--light-text);
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover > svg,
    &:focus > svg {
      fill: var(--accent-color);
      transform: scale(1.1);
    }
  }

  .label {
    font-weight: 500;
    font-size: 12px;
    line-height: 3.17;
    color: var(--secondary-text);
  }

  .listItem > .description:nth-of-type(2) .label {
    padding-right: 30px;
  }
  .listItem > .description:nth-of-type(3) .label {
    padding-right: 49px;
  }

  .listItem > .description:nth-of-type(4) .label {
    padding-right: 35px;
  }

  // css transition styles
  .bookListItem-enter {
    opacity: 0;
    transform: translateX(-100%);
  }
  .bookListItem-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 250ms linear;
  }
  .bookListItem-exit {
    opacity: 1;
    transform: translateX(0);
  }
  .bookListItem-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 250ms linear;
  }
`
export default Wrapper