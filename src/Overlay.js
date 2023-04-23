import React, { forwardRef } from "react"

const Overlay = forwardRef(({ caption, scroll }, ref) => (
  <div
    ref={ref}
    onScroll={(e) => {
      scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
    }}
    class="scroll">
    <div style={{ height: "400vh" }}>
      <div className="dot">
        <h1>Hi I'm <span class='redcolor'>M</span>atteo <span class='redcolor'>C</span>aligiana</h1>
        and I am a self-taught web developer with a passion for all aspects of technology.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1><span class='redcolor'>3</span>D <span class='redcolor'>P</span>rint</h1>
        From cosplay part to everyday use object. Need to print your model? Contact me for more info.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1><span class='redcolor'>S</span>hop!</h1>Ampliate your business selling your product online, or set up a dropshipping service.
      </div>
    </div>
    <div style={{ height: "200vh" }}>
      <div className="dot">
        <h1><span class='redcolor'>C</span>oming <span class='redcolor'>S</span>oon</h1>
      </div>
    </div>
    <div style={{ height: "100vh" }}>
      <div className="dot">
        <h1><span class='redcolor'>C</span>ontacts</h1>If you want to concact me you can find me <a href="">here</a> and <a href="">here</a>, or on whatsapp at +39********** or fill the form below.
      </div>
    </div>
    <span className="credits" ref={caption}>
      <a href=""><span class='redcolor'>C</span>redits</a>
    </span>
    <div className="creditsPage" ref={caption}>
      <div>
      <p>
        <a href=""><span class='redcolor'>C</span>redits</a>
      </p>
      <p>
        <a href=""><span class='redcolor'>C</span>redits</a>
      </p>
      <p>
        <a href=""><span class='redcolor'>C</span>redits</a>
      </p>
      </div>
    </div>
  </div>
))

export default Overlay
