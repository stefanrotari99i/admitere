import Image from "next/image";
import UniversityCard from "@/components/UniversityCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-start justify-between px-1 bg-gray-100 md:px-10 py-10 mx-4 mb-8 rounded-3xl gap-8">
      <article className="bg-gradient-to-br from-white/60 to-white/80 rounded-[34px] shadow-md w-full ">
        <div  className="relative flex-col bg-gradient-to-tl p-8 from-sky-600 to-sky-600 rounded-[34px] w-full ring-8 ring-blue-200">
        <Image
          src="/../public/men1.png"
          alt="Picture of the author"
          className="mb-4"
          width={150}
          height={40}
        />
          <h2 className="text-3xl text-white font-bold ">
            O platformă comună pentru <br/> admiterea la facultate în România 
          </h2>
          <p className="text-gray-200 text-sm mt-3">
            Alege universitatea la care vrei să aplici și vezi câte locuri sunt disponibile cu bursă și fără bursă. 
          </p>
          <button
            type="button"
            className="bg-white text-gray-900  w-fit text-sm rounded-2xl flex items-center gap-1 px-8 py-3 mt-4 focus:ring focus:ring-white/20 outline-none hover:bg-white/80 active:bg-white/70"
          >
            Află mai multe
          </button>
        </div>
      </article>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-4 w-full">
        <UniversityCard
          isActive={true}
          universityName="Universitatea Politehnica Timișoara"
          universityCity="Timișoara"
          placesWithScholarship={100}
          placesWithoutScholarship={100}
          img={"/../public/img2.jpeg"}
          logo="/../public/logo2.png"
        />
        <UniversityCard
          isActive={false}
          universityName="Universitatea din Petroșani"
          universityCity="Petroșani"
          placesWithScholarship={100}
          placesWithoutScholarship={100}
          img={"/../public/img1.jpg"}
          logo="/../public/logo1.png"
        />
        <UniversityCard
          isActive={true}
          universityName="Universitatea Transilvania Brașov"
          universityCity="Brașov"
          placesWithScholarship={100}
          placesWithoutScholarship={100}
          img={"/../public/img3.jpeg"}
          logo="/../public/logo3.png"
        />
        <UniversityCard
          isActive={false}
          universityName="Universitatea din Petroșani"
          universityCity="Petroșani"
          placesWithScholarship={100}
          placesWithoutScholarship={100}
          img={"/../public/img1.jpg"}
          logo="/../public/logo1.png"
        />
        <UniversityCard
          isActive={true}
          universityName="Universitatea Transilvania Brașov"
          universityCity="Brașov"
          placesWithScholarship={100}
          placesWithoutScholarship={100}
          img={"/../public/img3.jpeg"}
          logo="/../public/logo3.png"
        />
      </div>
    </main>
  );
}
