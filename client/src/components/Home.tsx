import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaEthereum } from "react-icons/fa";
import { TbInfoCircle } from "react-icons/tb";
import Loader from "./Loader";

type Props = {};

// const FormInput=(formProps:{placeholder:string,name:string,type:string,value:string,changeHandler:(e,name:string)=>string})=>{
//   <input  placeholder={formProps.placeholder} type={formProps.type} step="0.0001" value={formProps.value} className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100"/>
// }

const Home = (props: Props) => {
  const connectWallet = () => {};

  const submutHandler=()=>{}
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-red-600">
            Send cryptocurrency
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore. Buy and Sell
          </p>
          <button
            type="button"
            className="flex flex-row justify-center items-center my-5 bg-blue-600 p-3 rounded-full cursor-pointer hover:bg-[#2546bd] font-semibold text-white"
          >
            Connect Wallet
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className="rounded-tl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white">
              Trustable
            </div>
            <div className=" min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white">
              Secure
            </div>
            <div className="rounded-tr-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white">
              Ethereum
            </div>
            <div className="rounded-bl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white">
              Web 3.0
            </div>
            <div className=" min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white">
              Fees Low
            </div>

            <div className="rounded-br-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white">
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 justify-start items-center w-full md:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <FaEthereum fontSize={21} color="#fff"></FaEthereum>
                </div>
                <TbInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  #sdada4d2sa1d2sa45d
                </p>

                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-100">
            {/* <FormInput placeholder="Address To" name="addressTo" type="text" />
            <FormInput placeholder="Amount (ETH)" name="amount" type="number" />
            <FormInput placeholder="Keyword (Gif)" name="keyword" type="text" />
            <FormInput placeholder="Enter Message" name="message" type="text" /> */}
            <div className="h-[2px] w-full bg-gray-400 my-2"></div>

            {true?<Loader/>:(<button
                  type="button"
                  onClick={submutHandler}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
