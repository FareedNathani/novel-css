import Image from "next/image";
import { NovelCardProps } from "../../../types/componentTypes";


const HeroSecCard: React.FC<NovelCardProps> = ({ title, author, description, image, pdf, onlineRead }) => {
  return (
    <div className="heroSec-card-container">
      <Image
        src={image}
        alt={`${title} Cover`}
        width={200}
        height={200}
        className="heroSec-card-image"
      />
      <h3 className="heroSec-card-title">{title}</h3>
      <p className="heroSec-card-author">by {author}</p>
      <p className="heroSec-card-desc">{description}</p>
      <div className="heroSec-btn-container">
        <a href={onlineRead} className="read-btn">
          Read Online
        </a>
        <a href={pdf} download className="download-btn">
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default HeroSecCard;