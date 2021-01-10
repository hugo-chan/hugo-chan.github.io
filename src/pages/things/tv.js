import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"

import style from "../../styles/index.module.css"

/**
 * TradingView Page
 */
export default function Tv() {
  return (
    <div>
        <TopArrow link="/things"></TopArrow>
        <div className={style.centerDiv}>
            <h1>Things I like to think ab2out</h1>
        </div>
        <BottomArrow link="/things/xd"></BottomArrow>
    </div>
  )
}