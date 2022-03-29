import Joo from'./HomeCss.js';
import React from 'react'
import BackGroundImgAutumn from "../../IMG/MAIN-BK/autumn.png"
import BackGroundImgSpring from "../../IMG/MAIN-BK/spring.png"
import BackGroundImgSummer from "../../IMG/MAIN-BK/summer.png"
import BackGroundImgWinter from "../../IMG/MAIN-BK/winter.png"

import IconRightAngle from "../../IMG/MAIN-IC/rightAngle.png"
import IconLeftAngle from "../../IMG/MAIN-IC/leftAngle.png"

import Snowfall from 'react-snowfall'
import { Link } from 'react-router-dom';

import { useState, useEffect } from "react";


function Calender(date) {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(null);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(null)
  }

  const dates = prevDates.concat(thisDates, nextDates);

  const dayArray = dates.map((dd) => {
    const dayKeySet = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: Number,
    }
    dayKeySet.day = dd
    return dayKeySet
  });
  return dayArray;
}

function division(list) {

  let arr = list;
  let len = arr.length;
  let cnt = Math.floor(len / 7) + (Math.floor(len % 7) > 0 ? 1 : 0)
  let tmp = [];
  for (let i = 0; i < cnt; i++) {
    tmp.push(arr.splice(0, 7));
  }
  return tmp;
}

function Header() {
  const navContens = [{list:"일기보기",path:"/:id"},{list:"프로필보기",path:"/:id"},{list:"구경하기",path:"/:id"}];
  return (
    <header id="header">
      <a href="#" id="Logo">
        <h4>Daily</h4>
      </a>
      <div>
        <ul id="nav">
          {
            navContens.map((navContens, index) => <li key={index}><Link to={navContens.path}style={{ textDecoration: 'none' }}><h4>{navContens.list}</h4></Link></li>)
          }
        </ul>
      </div>
    </header>
  )
}

function Article() {
  const [date, setDate] = useState(new Date())
  const [day, setDay] = useState(division(Calender(date)))
  const [toDay, setToDay] = useState({
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate()
  })

  const prevMonth = () => {
    date.setMonth(date.getMonth() - 1)
    setDay(division(Calender(date)));
  }

  const nextMonth = () => {
    date.setMonth(date.getMonth() + 1)
    setDay(division(Calender(date)));
  }

  const seasonColor = {
    backGround: undefined,
    color: {
      week: String,
      toDay: String
    }
  }

  const seasonDivision = (month) => {
    switch (month.getMonth() + 1) {
      case 3:
      case 4:
      case 5:
        seasonColor.backGround = BackGroundImgSpring;
        seasonColor.color.week = "#FFC8E3";
        seasonColor.color.toDay = "#FEFBFB";
        break;
      case 6:
      case 7:
      case 8:
        seasonColor.backGround = BackGroundImgSummer;
        seasonColor.color.week = "#FAE2C8";
        seasonColor.color.toDay = "#F2EADF";
        break;
      case 9:
      case 10:
      case 11:
        seasonColor.backGround = BackGroundImgAutumn;
        seasonColor.color.week = "#BF7245";
        seasonColor.color.toDay = "#D98C4A";
        break;
      case 12:
      case 1:
      case 2:
        seasonColor.backGround = BackGroundImgWinter;
        seasonColor.color.week = "#82B0D9";
        seasonColor.color.toDay = "#FEFBFB";
        break;
      default:
        break;
    }
  }


  seasonDivision(date);
  return (
    <>
      <section id="MainSection" style={{ backgroundImage: `url(${seasonColor.backGround})` }}>
        <h2 id="MainSectionLogo">{date.toLocaleString('en-us', { month: 'long' })}</h2>
        <div id="Article">
          <img className="iconAngle" onClick={prevMonth} src={IconLeftAngle} />
          <div id="CalendarBox">
            <ul id="DayOfTheWeek" style={{ backgroundColor: `${seasonColor.color.week}` }}>
              <li>S</li>
              <li>M</li>
              <li>T</li>
              <li>W</li>
              <li>T</li>
              <li>F</li>
              <li>S</li>
            </ul>
            <table id="Calendar">
              <thead></thead>
              <tbody>
                {
                  day.map((dayOfTheWeek, index) => {
                    return (
                      <tr key={index}>
                        {
                          dayOfTheWeek.map((Day, index) => {
                            return (
                              toDay.month === Day.month && toDay.year === Day.year && toDay.day === Day.day ?
                                <td key={index}><span id="ToDay" style={{ backgroundColor: `${seasonColor.color.toDay}` }} >{Day.day}</span></td> :
                                <td key={index}>{Day.day}</td>)
                          })
                        }
                      </tr>
                    )
                  })
                }
              </tbody>
              <tfoot></tfoot>
            </table>
          </div>
          <img className="iconAngle" onClick={nextMonth} src={IconRightAngle} />
        </div>
      </section>
    </>
  )
}

function Home() {
  return (
    <Joo>
      <Header />
      <Article />
      <Snowfall color="white" snowflakeCount={200} />
    </Joo>
  );
}

export default Home;
