import Image from "next/image";
import "./second.css";

export default function Second() {
  return (
    <section className="main-container">
      <div className="top-section">
        <div className="box small">
          <Image src="/Layer8.png" alt="Top Section Image" layout="intrinsic" width={500} height={500} />
        </div>
        <div className="box large" style={{ fontFamily: "Classical, sans-serif" }}>
          14, 15, 16, 17, 18, 19
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-box left">
          <video autoPlay loop muted playsInline>
            <source src="/Layer 11.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bottom-box middle">
        <video autoPlay loop muted playsInline>
            <source src="/Comp 2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div
          className="bottom-box right"
          style={{ fontFamily: "Classical, sans-serif", fontSize: "clamp(16px, 3vw, 64px)" }}
        >
          Cusat Back on Its Art Fest Sargam
        </div>
      </div>
    </section>
  );
}
