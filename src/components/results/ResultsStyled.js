import styled from 'styled-components'

const ResultsWrapper = styled.div`
  min-width: 270px;
  height: 340px;
  padding: 10px 17px;
  background-color: ${(props) => props.theme.SECONDARY_BACKGROUND};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 678px;
    padding: 20px 84px;
  }

  @media (min-width: 1280px) {
    width: 275px;
  }

  .resultsTitle {
    font-weight: 600;
    font-size: 12px;
    line-height: 2.17;
    text-align: center;
    text-transform: uppercase;
  }

  .resultsForm {
    margin-bottom: 20px;
    @media (min-width: 768px) and (max-width: 1279px) {
      display: flex;
      align-items: center;
    }
    @media (min-width: 1280px) {
      width: 240px;
    }
  }

  .formGroup {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    @media (min-width: 768px) and (max-width: 1279px) {
      margin-bottom: 0;
    }
  }

  .inputGroup {
    width: 110px;
    height: 72px;
    position: relative;
  }

  .inputGroup:not(:last-child) {
    margin-right: 20px;
  }

  .formInputDate,
  .pagesInput {
    color: ${(props) => props.theme.MAIN_TEXT};
  }

  .formInputDate,
  .pagesInput {
    width: 100%;
    height: 42px;
    padding: 5px 13px;
    font-size: 14px;
    border: 1px solid #a6abb9;
    background-color: ${(props) => props.theme.MAIN_BACKGROUND};
    outline: none;

    &:focus {
      background-color: ${(props) => props.theme.SECONDARY_BACKGROUND};
      box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);
    }
  }

  .label {
    font-weight: 500;
    font-size: 11px;
    line-height: 2.45;
    color: ${(props) => props.theme.SECONDARY_TEXT};
  }

  .formButton {
    width: 171px;
    height: 42px;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.71;
    text-align: center;
    color: var(--secondary-background);
    outline: none;
    cursor: pointer;
    background-color: ${(props) => props.theme.ACCENT_COLOR};
    border: 1px solid ${(props) => props.theme.ACCENT_COLOR};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    @media (min-width: 768px) and (max-width: 1279px) {
      width: 240px;
      height: 40px;
      margin: 0;
      margin-left: 30px;
      margin-top: 22px;
    }

    @media (min-width: 1280px) {
      width: 100%;
      height: 40px;
    }

    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      border-color: #d15807;
      background: #d15807;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    &:disabled {
      border: none;
      background-color: #ff6b08a8;
    }
  }

  .error {
    position: absolute;
    top: 70px;
    left: 3px;
    font-size: 9px;
    font-weight: 400;
    color: rgb(225, 22, 22);
    @media (min-width: 768px) {
      font-size: 10px;
      line-height: 1.2;
    }
  }
  .pagesError {
    width: 130px;
    @media (min-width: 768px) and (max-width: 1279px) {
      width: 145px;
    }
  }
`
export default ResultsWrapper
