import styled from 'styled-components'

const ChartStyled = styled.div`
  background-color: ${(props) => props.theme.SECONDARY_BACKGROUND};
  width: 270px;
  height: 290px;
  padding: 14px 22px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);
  tspan {
    color: ${(props) => props.theme.MAIN_TEXT};
  }

  @media (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
  }
  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 40px;
  }

  .pagesAverage {
    font-weight: 500;
    font-size: 12px;
    line-height: 3.17;
    text-transform: uppercase;
    color: ${(props) => props.theme.MAIN_TEXT};
  }
  .pagesAverage-amount {
    width: 25px;
    height: 25px;
    padding: 4px;
    font-weight: 600;
    font-size: 12px;
    line-height: 3.17;
    text-align: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.MAIN_TEXT};
    background: ${(props) => props.theme.MAIN_BACKGROUND};
  }
  ul.recharts-default-legend {
    display: flex;
    flex-direction: column;
    /* right: -60px;
    bottom: 50%;
    position: absolute; */
  }
  .recharts-legend-item-text{
  padding: 5px;
  font-weight: 600;
  font-size: 12px;
  line-height: 3.17;
  text-transform: uppercase;
  background: ${(props) => props.theme.MAIN_BACKGROUND};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  }

  @media screen and (min-width: 768px) {
    width: 678px;
    height: 340px;
    padding: 25px 35px;
  }
  @media screen and (min-width: 1280px) {
    width: 886px;
    padding: 30px 40px;
  }
`

export default ChartStyled
