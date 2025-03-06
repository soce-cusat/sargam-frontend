'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

const links = [
  {
    title: "Home",
    href: "/",
    src: "home.jpg"
  },
  {
    title: "Register",
    href: "/signin",
    src: "signin.jpg"
  },
  {
    title: "Events",
    href: "/events",
    src: "events.jpg"
  },
  {
    title: "Leaderboard",
    href: "/leaderboard",
    src: "leaderboard.jpg"
  },
  {
    title: "Gallery",
    href: "/gallery",
    src: "gallery.jpg"
  },
  
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}