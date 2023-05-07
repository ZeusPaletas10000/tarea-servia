import React from "react";
interface NewscardProps {
  header: string;
  imageURL: string;
  title1: string;
  title2: string;
  date: string;
  description: string;
}
const Newscard = (props: NewscardProps) => {
  return (
    <div className="box-content w-[240px] h-[420px] bg-white">
      <div className="bg-cover h-[160px] w-[240px]">
        <img
          src={props.imageURL}
          alt=""
          className="h-[160px] w-[240px] absolute z-0"
        />
        <span className="p-4 font-bold text-white text-xs font-80 flex flex-start relative z-100 tracking-wider">
          {props.header}
        </span>
      </div>
      <div className="text-black p-[12px] box-content w-[200px] flex flex-wrap flex-col gap-3">
        <span className="text-[8px] text-gray-400 font-extrabold">
          {props.date}
        </span>
        <span className="text-xl font-bold">
          {props.title1}
          <br></br>
          {props.title2}
        </span>
        <span className="text-[9px] font-bold text-left tracking-widest">
          {props.description}
        </span>
      </div>
      <div className="pt-16 pl-4 text-purple-700 inline-flex flex-row content-center gap-2">
        <span className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-7 h-7 border-[3px] border-purple-700 rounded-3xl"
          >
            <path
              fill-rule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
        <span className="text-[12px] font-bold mt-1">Find out more</span>
      </div>
    </div>
  );
};
export default Newscard;
