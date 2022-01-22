import React, { useState } from "react"
import "./Style.css"
import GetTransaction from "./GetTransaction"

function Transaction() {
  const [d1, setd1] = useState("")
  const [fromd1, setfromd1] = useState("")

  const [d2, setd2] = useState("")
  const [fromd2, setfromd2] = useState("")

  const handleChange = (e, type) => {
    if (type === "d1") {
      setd1(e.target.value)
      console.log(e.target.value)
    }
    if (type === "d2") {
      setd2(e.target.value)
      console.log(e.target.value)
    }
  }
  const calculate = (d1, d2) => {
    setfromd1(d1)
    setfromd2(d2)
  }
  return (
    <div>
      <div className="date">
        <div>
          <input
            type="date"
            value={d1}
            onChange={(e) => handleChange(e, "d1")}
          />
        </div>
        <div>
          <input
            type="date"
            value={d2}
            onChange={(e) => handleChange(e, "d2")}
          />
        </div>
      </div>
      <button onClick={() => calculate(d1, d2)}>Calculate</button>
      <div>
        <GetTransaction d1={fromd1} d2={fromd2} />
      </div>
    </div>
  )
}

export default Transaction
