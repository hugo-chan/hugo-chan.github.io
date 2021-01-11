import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"
import Figure from "../../components/figure"

/**
 * HK Page 5
 */
export default function Hk() {
  return (
    <div>
      <TopArrow link="/things/madeon"></TopArrow>
      <Figure link="/hidden/hk.png" caption="This photo of Hong Kong I took in 2016"></Figure>
      <BottomArrow link="/things/fn"></BottomArrow>
    </div>

  )
}