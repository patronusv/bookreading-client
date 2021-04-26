import styled from 'styled-components'

const WellDoneWrapper = styled.div`
  min-width: 240px;
  min-height: 221px;
  padding-top: 31px;
  padding-bottom: 35px;
  text-align: center;
  @media (min-width: 768px) {
    min-width: 360px;
    min-height: 260px;
    padding-top: 27px;
  }
  .textWrapper {
    margin-top: 7px;
    margin-bottom: 21px;
  }
  @media (min-width: 768px) {
  }
  .wellDoneText {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.375;
  }
  .mobileButton {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 97px;
    height: 40px;
    left: 96px;
    top: 492px;
    outline: none;
    border: none;
    color: var(--secondary-background);
    background: #d15807;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
  @media (min-width: 768px) {
    .textWrapper {
      margin-top: 21px;
      margin-bottom: 25px;
    }
    .mobileButton {
      min-width: 130px;
    }
  }
`

export default WellDoneWrapper
