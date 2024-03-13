"use client";
import Topbar from "../components/Topbar";
import P1 from "../components/P1";
import P2 from "../components/P2";
import P3 from "../components/P3";
import P4 from "../components/P4";
import P5 from "../components/P5";
import P6 from "../components/P6";
import P7 from "../components/P7";
import P8 from "../components/P8";
import P9 from "../components/P9";
import TwitterCard from "../components/TwitterCard";
import P10 from "../components/P10";

export default function Home() {


  return (
    <div>
      <Topbar />
      <P1 />
      <P2 />
      <P3 />
      <P4 />
      <P5 />
      <div id="schedule">
        <P6 />
      </div>
      <P7 />
      <div id="testimony">
        <P8 />
      </div>
      <P9 />
      <div id="FAQ">
        <P10 />
      </div>
    </div>
  );
}
