'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './Button';
import styles from './style.module.scss';
import Nav from './Nav';

export default function Index() {
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return; // Prevents SSR issues

        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const menu = {
        open: {
            width: isMobile ? "80vw" : "45vw",
            height: isMobile ? "80vh" : "80vh",
            top: isMobile ? "0px" : "-25px",
            right: isMobile ? "0px" : "-25px",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
        },
        closed: {
            width: isMobile ? "80px" : "100px",
            height: "40px",
            top: "0px",
            right: "0px",
            transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
        }
    };

    return (
        <div className={styles.header}>
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        className={styles.menu}
                        variants={menu}
                        animate="open"
                        initial="closed"
                        exit="closed" // Ensure it exits properly
                    >
                        <Nav />
                    </motion.div>
                )}
            </AnimatePresence>
            <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
        </div>
    );
}
