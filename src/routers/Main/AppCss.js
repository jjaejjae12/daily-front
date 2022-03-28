import styled from 'styled-components';
import KyoboHandwiting from "../.././Font/KyoboHandwriting2020pdy.ttf"

const Joo = styled.div`
@font-face {
  font-family: 'Kyobo Handwriting 2020';
  src: url(${KyoboHandwiting}) format('truetype');
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Kyobo Handwriting 2020';
  cursor: default;
}

h2 {
  font-size: 28px;
  font-weight:500;
  color: black;
  cursor: default;
  margin: 10px 0;
}

h4 {
  font-size: 18px;
  font-weight:500;
  color: black;
  cursor: default;
}


/* Main */

#header {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 15px 15px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.245);
  position: sticky;
  top: 0;
  left: 0;
  background-color: white;

}

#Logo {
  cursor: pointer;
  position: absolute;
  left: 20px;
  text-decoration: none;
}

#nav {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

#nav > li {
  list-style: none;
  padding:  0 100px;
}

#nav > li > h4 {
  cursor: pointer;
}

/*Body*/

#MainSection {
  height:92.9vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  /* background-image: url(./MAIN-BK/autumn.png); */
  display: flex;
  flex-flow:column nowrap;
  justify-content: center;
  align-items: center;
}

#MainSectionLogo {
  position: relative;
  bottom: 4vh;
}

#Article {
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items:center;

}

#Article i {
  cursor: pointer;
  font-size: 50px;
  color: #ADADAD;
  /* padding: 10px    ; */
}

#CalendarBox {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

#DayOfTheWeek {
  width: 43vw;
  display: flex;
  flex-flow:row;
  justify-content: space-between;
  padding: 2px 2vw;
  border-radius: 14px;
  /* background-color: #FAE2C8; */
}

#DayOfTheWeek > li {
  list-style: none;
  font-size: 28px;
  font-weight: 500;
}


#Calendar {
  width: 45vw;
  border-spacing:0px 0px;
}

#Calendar td {
  width: 1vw;
  height: 9vh;
  cursor:default;
  font-size: 20px;
  text-align: center;
  margin: 0;
}

#ToDay {
  cursor: pointer;
  padding: 5px 9px;
  margin: -9px;
  background-color: #F2EADF;
  border-radius: 9px;
  box-shadow: 0px 1.5px 3px rgba(0, 0, 0, 0.483);
}

.iconAngle {
  width:2vw;
  cursor: pointer;
  /* size: 10px; */
}
`;

export default Joo;