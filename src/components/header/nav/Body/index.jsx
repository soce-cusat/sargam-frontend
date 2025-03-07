"use client";

import { motion } from "framer-motion";
import { useState, Suspense } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import styles from "./style.module.scss";
import { blur, translate } from "../../anim";

// Dynamically import the loading screen
const LoadingScreen = dynamic(() => import("@/components/Loading"), { suspense: true });

export default function Body({ links, selectedLink, setSelectedLink }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleNavigation = (href) => {
        setLoading(true); // Show full-screen loading immediately
        router.push(href);
    };

    const getChars = (word) => {
        return word.split("").map((char, i) => (
            <motion.span
                custom={[i * 0.02, (word.length - i) * 0.01]}
                variants={translate}
                initial="initial"
                animate="enter"
                exit="exit"
                key={char + i}
            >
                {char}
            </motion.span>
        ));
    };

    return (
        <div className={styles.body}>
            {/* Full-Screen Loading Screen */}
            {loading && (
                <div className={styles.fullScreenLoading}>
                    <Suspense fallback={<div className={styles.loadingText}>Loading...</div>}>
                        <LoadingScreen />
                    </Suspense>
                </div>
            )}

            {/* Navigation Links */}
            {links.map((link, index) => {
                const { title, href } = link;
                return (
                    <motion.p
                        key={`l_${index}`}
                        onMouseOver={() => setSelectedLink({ isActive: true, index })}
                        onMouseLeave={() => setSelectedLink({ isActive: false, index })}
                        variants={blur}
                        animate={selectedLink.isActive && selectedLink.index !== index ? "open" : "closed"}
                        onClick={() => handleNavigation(href)}
                        className={styles.link}
                    >
                        {getChars(title)}
                    </motion.p>
                );
            })}
        </div>
    );
}
