import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"
import Figure from "../../components/figure"

/**
 * HK Page 5
 */
export default function Hk() {
  return (      
    <div className={style.thingBody}>
      <div className={style.thingHead}>
        <TopArrow link="/things/madeon"></TopArrow>
      </div>
      <div className={style.thingContent}>
        <Figure link="/hidden/hk.png" caption="This photo of Hong Kong I took in 2016"></Figure>
      </div>
      <div className={style.thingFoot}>
        <BottomArrow link="/things/fn"></BottomArrow>
      </div>
    </div>
  )
}