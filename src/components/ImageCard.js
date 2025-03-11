import React from "react";
import { motion } from "framer-motion";
import "../styles/imageCard.css";

const ImageCard = ({ image }) => {
  return (
    <motion.div
      className="image-card"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="photo-frame">
        <img src={image.url} alt={image.caption} className="instant-photo" />
      </div>
      <p className="image-caption">{image.caption}</p>
    </motion.div>
  );
};

export default ImageCard;
