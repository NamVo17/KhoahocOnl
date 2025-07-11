import { motion } from "framer-motion";
import { Button } from "./Button";

export function AnimatedButton({ children, className = "", ...props }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.1 }}>
      <Button className={`transition-all duration-200 ${className}`} {...props}>
        {children}
      </Button>
    </motion.div>
  );
} 