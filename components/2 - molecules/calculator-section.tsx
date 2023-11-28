import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import { SectionText, SectionTitle } from "../1 - atoms";
import ReactSlider from "react-slider";
import { Balancer } from "react-wrap-balancer";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./chart"), {
  ssr: false, // This line will only render the component on the client-side.
});
const ChartRevenue = dynamic(() => import("./chart-revenue"), {
  ssr: false, // This line will only render the component on the client-side.
});

export const CalculatorSection = () => {
  const [seats, setSeats] = useState(16);
  const wallets = [1, 5, 10, 15, 20];
  const userbase = ["1M", "5M", "10M", "15M", "20M"];
  const percentage = [1, 2, 5, 10, 15];

  return (
    <section className="px-5 py-20 w-full flex flex-col relative items-center justify-center overflow-hidden bg-gray-50">
      <div className="m-auto  flex w-full justify-center items-start gap-[60px]">
        <div className="flex flex-col gap-5 w-1/2 max-w-[590px]">
          <div>
            <div className="inline-flex bg-black bg-opacity-5 px-4 py-2 gap-2 border rounded-full">
              <RocketLaunchIcon className="text-gray-500 w-5 h-5" />
              <p className="text-sm leading-5 font-medium ">Let’s grow ENS!</p>
            </div>
          </div>

          <SectionTitle className="text-start">
            ENS impact potential
          </SectionTitle>
          <SectionText>
            <Balancer>
              While this calculator is shamelessly oversimplified, we hope it
              helps to build some intiution for the opportunity NameKit brings
              to ENS.
            </Balancer>
          </SectionText>

          <div className="flex flex-col w-[488px] mt-10">
            <p className="text-sm leading-6 font-semibold text-gray-500">
              Wallets and dApps integrating NameKit
            </p>
            <ReactSlider
              className="mt-4 "
              marks={[1, 6, 11, 16, 21]}
              markClassName="bg-gray-300 w-[1px] h-2 mt-6"
              min={1}
              max={20}
              step={5}
              value={seats}
              defaultValue={seats}
              // onChange={(value) => setSeats(value)}
              renderThumb={(props, state) => (
                <div
                  {...props}
                  style={{ ...props.style, zIndex: 20 }}
                  className="relative flex items-center justify-center outline-none -translate-x-4 -translate-y-[14px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="cursor-pointer"
                  >
                    <circle
                      cx="16"
                      cy="16.0002"
                      r="15"
                      className="fill-[#10B981] hover:fill-[#00fafa] transition-colors duration-200 "
                      fill="fill-current"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M14 12.0002L10 16.0002L14 20.0002"
                      stroke="white"
                    />
                    <path
                      d="M18 12.0002L22 16.0002L18 20.0002"
                      stroke="white"
                    />
                  </svg>
                  {state.valueNow === 21 && (
                    <div className="w-4 h-1 bg-gray-50" />
                  )}
                </div>
              )}
              renderTrack={(props, state) => {
                let className = "h-1 rounded-full cursor-pointer ";
                if (state.index === 0) {
                  className += "bg-green-500 ";
                } else {
                  className += "bg-gray-200  ";
                }
                return <div {...props} className={className} />;
              }}
            />
            <div className="mt-10 w-full flex justify-between">
              {wallets.map((marker) => {
                return (
                  <p className="w-4 -ml-1" key={marker}>
                    {marker}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col w-[488px] mt-10">
            <p className="text-sm leading-6 font-semibold text-gray-500">
              Average current userbase for Wallets and dApps that integrate
            </p>
            <ReactSlider
              className="mt-4 "
              marks={[1, 6, 11, 16, 21]}
              markClassName="bg-gray-300 w-[1px] h-2 mt-6"
              min={1}
              max={20}
              step={5}
              value={seats}
              defaultValue={seats}
              // onChange={(value) => setSeats(value)}
              renderThumb={(props, state) => (
                <div
                  {...props}
                  style={{ ...props.style, zIndex: 20 }}
                  className="relative flex items-center justify-center outline-none -translate-x-4 -translate-y-[14px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="cursor-pointer"
                  >
                    <circle
                      cx="16"
                      cy="16.0002"
                      r="15"
                      className="fill-[#10B981] hover:fill-[#00fafa] transition-colors duration-200 "
                      fill="fill-current"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M14 12.0002L10 16.0002L14 20.0002"
                      stroke="white"
                    />
                    <path
                      d="M18 12.0002L22 16.0002L18 20.0002"
                      stroke="white"
                    />
                  </svg>
                  {state.valueNow === 21 && (
                    <div className="w-4 h-1 bg-gray-50" />
                  )}
                </div>
              )}
              renderTrack={(props, state) => {
                let className = "h-1 rounded-full cursor-pointer ";
                if (state.index === 0) {
                  className += "bg-green-500 ";
                } else {
                  className += "bg-gray-200  ";
                }
                return <div {...props} className={className} />;
              }}
            />
            <div className="mt-10 w-full flex justify-between">
              {userbase.map((marker) => {
                return (
                  <p className="w-4 -ml-1" key={marker}>
                    {marker}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col w-[488px] mt-10">
            <p className="text-sm leading-6 font-semibold text-gray-500">
              % of userbase with “ENS user acquisitions” through NameKit each
              year
            </p>
            <ReactSlider
              className="mt-4 "
              marks={[1, 6, 11, 16, 21]}
              markClassName="bg-gray-300 w-[1px] h-2 mt-6"
              min={1}
              max={20}
              step={5}
              // value={seats}
              defaultValue={seats}
              // onChange={(value) => setSeats(value)}
              renderThumb={(props, state) => (
                <div
                  {...props}
                  style={{ ...props.style, zIndex: 20 }}
                  className="relative flex items-center justify-center outline-none -translate-x-4 -translate-y-[14px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="cursor-pointer"
                  >
                    <circle
                      cx="16"
                      cy="16.0002"
                      r="15"
                      className="fill-[#10B981] hover:fill-[#00fafa] transition-colors duration-200 "
                      fill="fill-current"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M14 12.0002L10 16.0002L14 20.0002"
                      stroke="white"
                    />
                    <path
                      d="M18 12.0002L22 16.0002L18 20.0002"
                      stroke="white"
                    />
                  </svg>
                  {state.valueNow === 21 && (
                    <div className="w-4 h-1 bg-gray-50" />
                  )}
                </div>
              )}
              renderTrack={(props, state) => {
                let className = "h-1 rounded-full cursor-pointer ";
                if (state.index === 0) {
                  className += "bg-green-500 ";
                } else {
                  className += "bg-gray-200  ";
                }
                return <div {...props} className={className} />;
              }}
            />
            <div className="mt-10 w-full flex justify-between">
              {percentage.map((marker) => {
                return (
                  <p className="w-4 -ml-1" key={marker}>
                    {marker}%
                  </p>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 w-1/2 max-w-[590px] bg-white p-10 border rounded-[8px]">
          <h3 className="text-2xl leading-8 font-semibold">
            ENS impact potential
          </h3>
          <p className="text-sm leading-5 font-normal text-gray-500">
            Learn more about the simulation in{" "}
            <a className="underline hover:text-black transition-colors duration-200">
              this spreadsheet
            </a>
            .
          </p>
          <Chart />
          <ChartRevenue />
          <p className="text-xs leading-5 font-normal text-gray-500">
            <Balancer>
              * Oversimplified assumptions include: Each “ENS user acquisition”
              produces 1.5 registrations of a 5+ character .eth name each with
              an average duration of 2.5 years. General growth of web3 producing
              a 20% annual growth in “base user count” of wallets and dApps.
              NameKit will also support offchain or L2 subnames which also help
              ENS grow but are not included in these calculations.
            </Balancer>
          </p>
        </div>
      </div>
    </section>
  );
};
