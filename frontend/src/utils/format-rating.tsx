import { FaStar } from "react-icons/fa";

export function formatRating(rating: number) {
 switch(true){
  case rating===0:
    return <div> <FaStar color="#e9dd31"/><FaStar color="#91908d"/><FaStar color="#91908d"/><FaStar color="#91908d"/><FaStar color="#91908d"/></div>
    break;
  case rating===1:
    return <div> <FaStar color="#e9dd31"/><FaStar color="#e9dd31"/><FaStar color="#91908d"/><FaStar color="#91908d"/><FaStar color="#91908d"/></div>
    break;
  case rating===2:
    return <div> <FaStar color="#e9dd31"/><FaStar color="#e9dd31"/><FaStar color="#e9dd31"/><FaStar color="#91908d"/><FaStar color="#91908d"/></div>
    break;
  case rating===3:
    return <div> <FaStar color="#e9dd31"/><FaStar color="#e9dd31"/><FaStar color="#e9dd31"/><FaStar color="#e9dd31"/><FaStar color="#91908d"/></div>
    break;
  case rating===4:
    return <div> <FaStar color="#e9dd31"/><FaStar color="#e9dd31"/><FaStar color="#e9dd31"/><FaStar color="#e9dd31"/><FaStar color="#e9dd31"/></div>
    break;
  default:
 }
}