import React from "react"
import TopArrow from "../../components/toparrow"
import BottomArrow from "../../components/bottomarrow"
import Figure from "../../components/figure"

import style from "../../styles/index.module.css"

/**
 * TradingView Page
 */
export default function Tv() {
  return (
    <div>
      <TopArrow link="a"></TopArrow>
      <Figure></Figure>
      <BottomArrow link="a"></BottomArrow>
    </div>

  )
}