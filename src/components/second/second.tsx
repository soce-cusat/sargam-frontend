"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./second.css";

export default function Second() {
  return (
    <section className="main-container">
      {/* Top Section */}
      <motion.div 
        className="top-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="box small"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <Image src="/Layer8.png" alt="Top Section Image" layout="intrinsic" width={500} height={500} />
        </motion.div>
        <motion.div 
          className="box large"
          style={{ fontFamily: "Classical, sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          14, 15, 16, 17, 18, 19
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div 
        className="bottom-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="bottom-box left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <video autoPlay loop muted playsInline>
            <source src="/Layer 11.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.div 
          className="bottom-box middle"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <video autoPlay loop muted playsInline>
            <source src="/Comp 2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.div 
          className="bottom-box right"
          style={{ fontFamily: "Classical, sans-serif", fontSize: "clamp(16px, 3vw, 64px)" }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          CUSAT is Back With SARGAM
        </motion.div>
      </motion.div>
    </section>
  );
}
