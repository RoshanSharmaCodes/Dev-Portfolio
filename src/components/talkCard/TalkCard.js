import React, { useEffect, useState } from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {

  const carousalItems = [
    {
      name: "Roshan Sharma",
      title: "SDE-1",
      company: "Depronto Infotech",
      profilePic: "",
      testimonial: "He is very good",
    }, 
    {
      name: "Kartik Verma",
      title: "SDE-2",
      company: "Google SDE",
      profilePic: "",
      testimonial: "He is Excellent",
    },
    {
      name: "Mukul Gupta",
      title: "SDE-1",
      company: "DePronto Infotech",
      profilePic: "",
      testimonial: "He is Outstanding",
    },
    {
      name: "Mukul Gupta",
      title: "SDE-1",
      company: "DePronto Infotech",
      profilePic: "",
      testimonial: "He is Outstanding",
    },
    {
      name: "Mukul Gupta",
      title: "SDE-1",
      company: "DePronto Infotech",
      profilePic: "",
      testimonial: "He is Outstanding",
    },
    {
      name: "Mukul Gupta",
      title: "SDE-1",
      company: "DePronto Infotech",
      profilePic: "",
      testimonial: "He is Outstanding",
    },
    {
      name: "Mukul Gupta",
      title: "SDE-1",
      company: "DePronto Infotech",
      profilePic: "",
      testimonial: "He is Outstanding",
    },
    {
      name: "Mukul Gupta",
      title: "SDE-1",
      company: "DePronto Infotech",
      profilePic: "",
      testimonial: "He is Outstanding",
    },
    {
      name: "Mukul Gupta",
      title: "SDE-1",
      company: "DePronto Infotech",
      profilePic: "",
      testimonial: "He is Outstanding",
    },
    {
      name: "Mukul Gupta",
      title: "SDE-1",
      company: "DePronto Infotech",
      profilePic: "",
      testimonial: "He is Outstanding",
    },
    {
      name: "Mukul Gupta",
      title: "SDE-1",
      company: "DePronto Infotech",
      profilePic: "",
      testimonial: "He is Outstanding",
    },
  ]
  
  

  useEffect(()=>{

  },[])

  return (
    <div className="parentContainer">
      <div className="container">
      {/* <img className="carousalIcon" src="./images/prev.svg" onClick={decCounter}/> */}
        {carousalItems.map((item)=> <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
        <div className="profilePicture">
          
        </div>
        <div className="cardHeader">
          <div className="cardHeaderLeft"></div>
          <div className="cardHeaderRight">
            <span>{item.name} | {item.title}</span><br/>
            @ <span>{item.company}</span> <br/>
            
          </div>
        </div>
        <div className="cardBody">
            <div className="cardMessageBox">
            {item.testimonial}
            </div>
        </div>
        </div>)}
          {/* <img className="carousalIcon" src="./images/next.svg" onClick={incCounter}/> */}
      </div>
    </div>
  );
}
