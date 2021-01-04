import React from "react"

export default function Layout(props) {
  return (
    <div style={{ margin: `${props.topMargin} auto`, maxWidth: 700, padding: `0 1rem` }}>
      {props.children}
    </div>
  )
}