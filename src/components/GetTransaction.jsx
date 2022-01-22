import React, { useEffect } from "react"

function GetTransaction(props) {
  useEffect(() => {
    getAge(props.d1, props.d2)
    console.log(props.d1)
    console.log(props.d2)
  }, [props.d1, props.d2])

  const getAge = (dateString1, dateString2) => {
    let fromDate = new Date(dateString1)
    let toDate = new Date(dateString2)
    let todayDate = new Date()
    // if (fromDate < toDate && (fromDate && toDate) < todayDate) {
    //   alert("valid dates")
    // } else {
    //   alert("invalid dates")
    // }
    if (fromDate < toDate) {
      alert("Trasaction in process, wait!")
    } else if (todayDate < toDate) {
      alert("transaction faild")
    } else if (fromDate > toDate) {
      alert("Transaction failed, from date should be past date")
    } else if (todayDate > (fromDate && toDate)) {
      alert("Transaction failed, can't provide future date")
    }
  }
  return <div></div>
}

export default GetTransaction
