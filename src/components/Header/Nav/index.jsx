import styles from './style.module.scss'; 
import { motion } from 'framer-motion'; 
import { links, footerLinks } from './data'; 
import { perspective, slideIn } from "./anim";
import Link from "next/link";

export default function Index() {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#F4D03F", "#A569BD", "#EC7063"]; // Add more colors if needed

  return (
    <div className={styles.nav}>
      {/* Links Section */}
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.div 
              key={`b_${i}`} 
              className={styles.linkContainer} 
              initial={{ scale: 1, backgroundColor: 'transparent' }}
              whileHover={{ scale: 1.05, backgroundColor: colors[i % colors.length] }}
              transition={{ duration: 0.3 }}
              style={{ padding: "10px", borderRadius: "5px" }}
            >
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href={href} className={styles.link}>{title}</Link>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}