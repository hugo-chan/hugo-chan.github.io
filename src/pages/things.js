import React from "react"

import style from "../styles/index.module.css"

/**
 * About me page
 */
export default function Things() {
  return (
    <div>
        <div className={style.centerDiv}>
            <h1>Things I like to think about</h1>
        </div>
        <div className={style.bottomDiv}>
            <a href="/things/tv" style={{backgroundImage:"none"}}>
                <img src="/hidden/arrow.png" width="40" height="40" alt="Next page"></img>
            </a>
        </div>
    </div>
  )
}
