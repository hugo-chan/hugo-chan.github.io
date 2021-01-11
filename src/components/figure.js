import React from "react"

import style from "../styles/index.module.css"

/**
 * Green arrow at the top of the page
 * @param {*} props 
 */
export default function Figure(props) {
  return (
      <div className={style.temp}>
        <div className={style.fade1s}>
          <img className={style.thingImg} src={props.link} alt='fortnite'/>
        </div>
        <div className={style.fade1s}>
          <p className={style.thingCaption}>{props.caption}</p>
        </div>
      </div>

  )
}