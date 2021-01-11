import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"
import Figure from "../../components/figure"
import Links from "../../components/links"

import style from "../../styles/index.module.css"

/**
 * TradingView Page 1
 */
export default function Tv() {
  return (
    <div>
      <div className={style.thingBody}>
        <div className={style.thingHead}>
          <TopArrow link="/things"></TopArrow>
          <ul style={{ listStyle: `none`, float: `right` }}>
                <Links _marginRight="1.2rem" pageName="Home" pageDir="/"/>
          </ul>
        </div>
        <div className={style.thingContent}>
          <Figure link="/hidden/tv.png" caption="This graph and TradingView theme"></Figure>
        </div>
        <div className={style.thingFoot}>
          <BottomArrow link="/things/campus"></BottomArrow>
        </div>
      </div>
    </div>
  )
}