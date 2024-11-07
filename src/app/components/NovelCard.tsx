import Image from "next/image";
import { NovelCardProps } from "../../../types/componentTypes"; 

const NovelCard: React.FC<NovelCardProps> = ({ title, author, description, image, pdf, onlineRead }) => {
  return (
    <div className="novel-card">
      <Image
        src={image}
        alt={`${title} Cover`}
        width={200}
        height={200}
        className="novel-card-image"
      />
      <h3 className="novel-card-title">{title}</h3>
      <p className="novel-card-author">by {author}</p>
      <p className="novel-card-desc">{description}</p>
      <div className="novel-card-btns">
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

export default NovelCard;