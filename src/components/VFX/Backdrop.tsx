
import { motion } from "framer-motion";

interface BackdropProps {
  handleClose: () => void;
  children: React.ReactNode;
}

function Backdrop({ handleClose, children }: BackdropProps) {
  return (
    <motion.div
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed w-full h-full bg-black/40 z-40"
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;