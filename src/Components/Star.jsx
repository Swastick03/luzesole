import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    debugger;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });

  const reviewSystem = (reviews) => {
    if (reviews > 1) {
      return (<p>({reviews} Customer Reviews)</p>);
    } else {
      return (<></>);
    }
  }

  return (
    
      <div className="icon-style">
        {ratingStar}
        {reviewSystem(reviews)}
        
      </div>
    
  );
};



export default Star;