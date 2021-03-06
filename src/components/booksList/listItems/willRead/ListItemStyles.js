import styled from 'styled-components'

const ListItemStyles = styled.li`
list-style-type: none;

.list-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.SECONDARY_BACKGROUND};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
}

.list-item button {
  position: absolute;
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

@media screen and (max-width: 767px) {
  .list-item button {
    top: 19px;
    right: 18px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  .list-item button {
    top: -1px;
    right: -27px;
  }
}

@media screen and (min-width: 1280px) {
.list-item button {
  width: 33px;
  height: 33px;
  top: -7px;
  right: -70px;
}
}

.item {
  display: inline-block;
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
}

.list-header {
  display: flex;
  list-style-type: none;
  margin-bottom: 14px;
} 

.header-item {
  color: var(--secondary-text);
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 14px;
}

.orangeIcon {
  fill: var(--accent-color);
}

.item-icon {
  display: flex;
  align-items: center;
  margin-right: 18px;
}

.item-pages {
  margin-left: auto;
}

.description-container {
  display: flex;
}

@media screen and (max-width: 767px) {
  .item, .header-item {
    font-size: 12px;
  }

  .header-item:not(:last-child),
  .item:not(:last-child),
  .list-item {
    margin-bottom: 15px;
  }

  .list-header {
    flex-direction: column;
    margin-right: 30px;
    margin-bottom: 0;
  }

  .list-item {
    position: relative;
    flex-wrap: wrap;
    margin-bottom: 15px;
    max-width: 270px;
    margin-left: auto;
    margin-right: auto;
    padding: 18px 5px 25px 55px;
  }

  .list-item li {
    margin-bottom: 0;
  }

  .header-name {
    display: none;
  }
  
  .item-icon {
    position: absolute;
    top: 21px;
    left: 20px;
    margin-right: 13px;
    margin-bottom: auto;
  }

  .description-container {
    flex-direction: column;
    margin-bottom: auto;
  }

  .item-book {
    width: 100%;
    padding-right: 20%;
    margin-bottom: 17px;
  }

  .item-pages {
    margin: 0;
  }
}

@media screen and (min-width: 768px) and (max-width: 1279px) {
  .list-item {
    padding: 14px 40px 14px 20px;
  }

  .header-name {
    width: 344px;
  }

  .header-author {
    width: 190px;
  }

  .header-year {
    width: 78px
  }

  .item-book {
    min-width: 285px;
    max-width: 285px;
  }

  .item-pages {

  }

  .item-author {
    width: 182px;
  }

  .dots {
    display: none;
  }

  .description-container {
    position: relative;
    width: 308px;
  }
}

@media screen and (min-width: 1280px) {
  .list-item {
    padding: 23px 85px 23px 20px;
  }

  .header-name {
    width: 625px;
  }

  .header-author {
    width: 360px;
  }

  .header-year {
    width: 96px;
  }

  .item-book {
    min-width: 566px;
    max-width: 566px;
  }

  .item-author {
    width: 347px;
  }

  .item-year {
    min-width: 90px;
  }

  .dots {
    display: none;
  }

  .description-container {
    position: relative;
    width: 492px;
  }
}
`

export default ListItemStyles