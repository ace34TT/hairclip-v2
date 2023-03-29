import React from "react";
import { AiFillStar } from "react-icons/ai";

interface IProps {
  customer: string;
  message: string;
}

export default function OpinionCard({ customer, message }: IProps) {
  return (
    <div className="inline-block">
      <div className="flex items-center h-5/6">
        <div className="w-80 md:w-96 min-h-[150px] sm:min-h-[150px] flex items-center rounded-lg px-7 bg-d-green text-white shadow-md">
          <div className="flex flex-col justify-start items-start h-5/6">
            <div className="flex justify-start items-center gap-5 w-full">
              <p className="text-left text-lg font-bold p-0 my-0 ">
                {customer}
              </p>
              <div className="justify-self-end flex justify-start items-center md:mb-0 h-fit w-full ">
                <AiFillStar color="#f0da48" size={28} />
                <AiFillStar color="#f0da48" size={28} />
                <AiFillStar color="#f0da48" size={28} />
                <AiFillStar color="#f0da48" size={28} />
                <AiFillStar color="#f0da48" size={28} />
                <AiFillStar color="#f0da48" size={28} />
              </div>
            </div>
            <p className="text-left my-0 leading-5">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
