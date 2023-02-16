import React from 'react'
import "./loader.css"

const Loader = () => {
  return (
    // <div className="loadingio-spinner-message-9nbgxdtiu36">
    //   <div className="ldio-o7bv2czwq9">
    //     <div></div>
    //     <div></div>
    //     <div></div>
    //     <div></div>
    //     <div></div>
    //     <div></div>
    //     <div></div>
    //   </div>
    // </div>
    <div class='container'>
      <div class='loader'>
        <div class='loader--dot'></div>
        <div class='loader--dot'></div>
        <div class='loader--dot'></div>
        <div class='loader--dot'></div>
        <div class='loader--dot'></div>
        <div class='loader--dot'></div>
      </div>
    </div>

  )
}

export default Loader