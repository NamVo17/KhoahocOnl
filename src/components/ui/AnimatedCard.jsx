import { motion } from "framer-motion";
import { Card } from "./Card";

export function AnimatedCard({ children, className = "", delay = 0, hover = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={hover ? { y: -8, scale: 1.02, transition: { duration: 0.2 } } : undefined}
      whileTap={hover ? { scale: 0.98 } : undefined}
    >
      <Card className={`transition-shadow duration-300 ${className}`}>{children}</Card>
    </motion.div>
  );
} 