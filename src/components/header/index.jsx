'use client';
import styles from './style.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';
import Image from 'next/image';
export default function index() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
            <Link href="/">
      <Image src="/log.png" alt="SARGAM Logo" width={60} height={15} />
    </Link>
                <div onClick={() => {setIsActive(!isActive)}} className={styles.el}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
                <motion.div variants={opacity} animate={!isActive ? "open" : "closed"} className={styles.shopContainer}>
                    {/* <p className={styles.shop}>Shop</p> */}
                    <div className={styles.el}>
                  <Image src="/cusat.png" alt="SARGAM Logo" width={25} height={25} />
                    </div>
                </motion.div>
                
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav/>}
            </AnimatePresence>
        </div>
    )
}
