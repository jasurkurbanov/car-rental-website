import "./index.css";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillCar } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import Input from "./input";
const Book = () => {
  return (
    <div className="book">
      <div className="container">
        <h1>Book your dream car now!</h1>
        <p>
          Rent a car online now from one of our worldwide locations. With over
          20 years’ experience in luxury car and customer services, all we need
          is your ID and you can book any car.
        </p>
        <div className="book-details">
          <Input placeholder="location" Icon={IoLocationSharp} />
          <Input placeholder="car model" Icon={AiFillCar} />
          <Input placeholder="DD/MM/YYYY" Icon={MdDateRange} />
          <button className="btn">Book</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
