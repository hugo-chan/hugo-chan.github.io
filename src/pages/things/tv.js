import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"
import Figure from "../../components/figure"

import style from "../../styles/index.module.css"

/**
 * TradingView Page 1
 */
export default function Tv() {
  return (
    <div className={style.thingBody}>
      <div className={style.thingHead}>
        <TopArrow link="/things"></TopArrow>
      </div>
      <div className={style.thingContent}>
        <Figure link="/hidden/tv.png" caption="This graph and TradingView theme"></Figure>
      </div>
      <div className={style.thingFoot}>
        <BottomArrow link="/things/campus"></BottomArrow>
      </div>
    </div>

  )
}