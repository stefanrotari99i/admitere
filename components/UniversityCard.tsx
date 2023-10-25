"use client";

import "react-tooltip/dist/react-tooltip.css";

import {
  TbExternalLink,
  TbInfoCircleFilled,
  TbInfoSquareRounded,
} from "react-icons/tb";

import Image from "next/image";
import { RiRadioButtonLine } from "react-icons/ri";
import { TiStarOutline } from "react-icons/ti";
import { Tooltip } from "react-tooltip";

interface Props {
  isActive: boolean;
  universityName: string;
  universityCity: string;
  placesWithScholarship: number;
  placesWithoutScholarship: number;
  img: string;
  logo: string;
}

const UniversityCard = ({
  isActive,
  universityName,
  universityCity,
  placesWithScholarship,
  placesWithoutScholarship,
  img,
  logo,
}: Props) => {
  return (
    <article className="flex flex-col p-3 relative w-full bg-white rounded-3xl shadow-sm  ">
      <Tooltip id="my-tooltip" className="max-w-[300px] rounded-xl  z-50" />
      <div className="w-full relative aspect-video overflow-hidden rounded-3xl">
        <Image
          src={img}
          alt="Picture of the author"
          className="cover rounded-3xl shadow-md shadow-black/10 hover:scale-110 bg-white transition-all duration-300  hover:rotate-6 ease-[cubic-bezier(.51,.92,.24,1.15)]"
          fill={true}
        />
        <button
          type="button"
          className="border-none z-5 outline-none absolute top-3 right-3 bg-white rounded-full p-2 active:scale-95 focus:ring focus:ring-blue-300"
        >
          <TiStarOutline className="text-gray-700 text-xl" />
        </button>
        {/* <IsActive isActive={isActive} /> */}
      </div>

      <div className="mt-2 flex flex-col items-start px-2">
        <div className="flex items-center gap-2 w-full overflow-hidden">
          <Image
            src={logo}
            alt="Picture of the author"
            className=""
            width={40}
            height={40}
          />
          <div className="flex flex-col items-start mb-2">
            <h1 className="text-md font-medium text-gray-900">
              {universityName}
            </h1>
            <p className="text-sm text-sky-950">{universityCity}</p>
          </div>
        </div>
        <InfoText text="Perioada de admitere" value="10 iulie - 10 august" />
        <InfoText text="Examen de admitere" value="Nu" />
        <div className="flex items-center justify-between w-full relative">
          <p
            className="text-xs text-gray-500 flex items-center" 
            data-tooltip-id="my-tooltip"
            data-tooltip-place="bottom-end"
            data-tooltip-content="Se are în vedere colectarea actelor necesare pentru înscrierea la studii, în vederea verificării autenticității acestora. Daca se colecteaza in Republica Moldova sau la sediul universității, se va indica locația."
          >
            Colectarea actelor
            <TbInfoCircleFilled className="inline-block ml-1 text-gray-400 text-sm" />
          </p>
          <span className="text-sm text-gray-700 font-medium ">Chisinau</span>
        </div>
        <div className="flex items-center justify-around w-full border-t border-gray-200 mt-2 pt-2">
          <ScholarshipPlaces
            text="Locuri cu bursă"
            value={placesWithScholarship.toString()}
          />
          <ScholarshipPlaces
            text="Locuri fără bursă"
            value={placesWithoutScholarship.toString()}
          />
        </div>
        <div className="flex items-center  md:gap-2 w-full flex-wrap md:flex-nowrap">
          <a
            href="https://admitere.upt.ro/"
            target="_blank"
            className="bg-blue-50  text-sky-500 text-[13px] rounded-2xl flex items-center justify-center gap-1 px-4 py-3 mt-4 w-full focus:ring focus:ring-sky-300 outline-none hover:text-white hover:bg-sky-500 active:bg-sky-700"
          >
            <TbExternalLink className="inline-block mr-1 text-lg" />
            <span className="inline-block">
              Depune dosarul
            </span>
          </a>
          <button
            type="button"
            className="bg-sky-500 text-white text-sm rounded-2xl flex items-center justify-center gap-1 px-4 py-3 mt-4 w-full focus:ring focus:ring-blue-300 outline-none hover:bg-sky-600 active:bg-sky-700"
          >
            <TbInfoSquareRounded className="inline-block mr-1 text-xl text-white" />
            <span className="inline-block">Detalii</span>
          </button>
        </div>
      </div>
    </article>
  );
};

const IsActive = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="absolute pointer-events-none bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent rounded-3xl">
      <div className="bg-white absolute bottom-3 left-3 py-1 px-2 rounded-xl">
        <div className="flex items-center gap-1">
          <RiRadioButtonLine
            className={`inline-block mr-1 text-xl ${
              isActive ? "text-green-400" : "text-red-400"
            }`}
          />
          <p className="inline-block text-xs text-gray-700">
            {isActive ? "Admiterea este Activă" : "Admiterea este Inactivă"}
          </p>
        </div>
      </div>
    </div>
  );
};

const InfoText = ({ text, value }: { text: string; value: string }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-xs text-gray-500">{text}</span>
      <span className="text-sm text-gray-700 font-medium ">{value}</span>
    </div>
  );
};

const ScholarshipPlaces = ({
  text,
  value,
}: {
  text: string;
  value: string;
}) => {
  return (
    <div className="flex flex-col items-center mt-4">
      <span className="text-xs text-gray-500">{text}</span>
      <span className="text-2xl text-gray-700 font-medium ">{value}</span>
    </div>
  );
};

export default UniversityCard;
