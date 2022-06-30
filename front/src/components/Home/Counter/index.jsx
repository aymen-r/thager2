import React, { useRef } from "react";
import "./style.css";
import CountUp from "react-countup";
import { GiFactory, GiShakingHands } from "react-icons/gi";
import { MdOutlineLocalShipping, MdOutlineAddBusiness } from "react-icons/md";
import { IoMdGlobe } from "react-icons/io";
import { useIsVisible } from "react-is-visible";

// const SimpleHook = () => {
//   useCountUp({ ref: "counter", end: 34567 });
//   return <span id="counter" />;
// };

const CountUpComponent = () => {
  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);

  return (
    <section className="counters" ref={nodeRef}>
      <div className="container">
        <div>
          {/* <i className="fab fa-house fa-4x"></i> */}
          {/* <img src="/images-logos/png/001-eco-house.png" alt="" /> */}

          <GiFactory style={{ fontSize: "80px" }} />
          <div className="counter" data-target="60000">
            <CountUp start={isVisible ? null : 0} end={3} duration={2} />
            GW
          </div>
          <h3>GLOBAL MODULE CAPACITY</h3>
        </div>
        <div>
          <MdOutlineLocalShipping style={{ fontSize: "80px" }} />
          <div className="counter" data-target="15000">
            <CountUp start={isVisible ? null : 0} end={2} duration={2} /> GW
          </div>
          <h3>GLOBAL SHIPMENT</h3>
        </div>

        <div>
          <MdOutlineAddBusiness style={{ fontSize: "80px" }} />
          <div className="counter" data-target="5000">
            <CountUp start={isVisible ? null : 0} end={10} duration={2} /> +
          </div>
          <h3>SALES & SERVICE OFFICES</h3>
        </div>
        <div>
          <IoMdGlobe style={{ fontSize: "80px" }} />
          <div className="counter" data-target="5000">
            <CountUp start={isVisible ? null : 0} end={200} duration={2} />+
          </div>
          <h3>COUNTRIES</h3>
        </div>
        <div>
          <GiShakingHands style={{ fontSize: "80px" }} />
          <div className="counter" data-target="5000">
            <CountUp start={isVisible ? null : 0} end={100} duration={2} /> +
          </div>
          <h3>PARTNERS</h3>
        </div>
      </div>
    </section>
  );
};

export default CountUpComponent;
