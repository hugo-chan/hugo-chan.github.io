import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"
import Figure from "../../components/figure"

/**
 * TradingView Page 1
 */
export default function Tv() {
  return (
    <div>
      <TopArrow link="/things"></TopArrow>
      <Figure link="/hidden/tv.png" caption="This graph and TradingView theme"></Figure>
      <BottomArrow link="/things/campus"></BottomArrow>
    </div>

  )
}