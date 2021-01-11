import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"
import Figure from "../../components/figure"
import LinkBar from "../../components/links/linkbar"

import style from "../../styles/index.module.css"
/**
 * HK Page 5
 */
export default function Hk() {
  return (      
    <div className={style.thingBody}>
      <div className={style.thingHead}>
        <TopArrow link="/things/music"></TopArrow>
        <LinkBar></LinkBar>
      </div>
      <div className={style.thingContent}>
        <Figure link="/hidden/hk.jpg" caption="This photo of Hong Kong I took in 2016" alt="Hong Kong panorama"></Figure>
      </div>
      <div className={style.thingFoot}>
        <BottomArrow link="/things/fn"></BottomArrow>
      </div>
    </div>
  )
}