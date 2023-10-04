import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i} onClick={() => onClick(i + 1)} style={style}>
            {rating > i ? (
              <AiFillStar fontSize="15px"></AiFillStar>
            ) : (
              <AiOutlineStar fontSize="15px"></AiOutlineStar>
            )}
          </span>
        );
      })}
    </>
  );
};

export default Rating;
