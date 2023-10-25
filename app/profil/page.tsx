import StikyHeader from "@/components/StikyHeader";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center mb-8">
      <StikyHeader title="Dosare de admitere" />
        <div className="flex flex-col w-full md:w-[80dvw] gap-2 p-2">
            <Dosar nr={1} data="12.05.2021" status="ACCEPTED" university="Universitatea Tehnica" faculty="Automatica si Calculatoare" speciality="Calculatoare"  />
            <Dosar nr={2} data="12.05.2021" status="REJECTED" university="Universitatea Tehnica" faculty="Automatica si Calculatoare" speciality="Calculatoare"  />
            <Dosar nr={3} data="12.05.2021" status="PENDING" university="Universitatea Tehnica" faculty="Automatica si Calculatoare" speciality="Calculatoare"   />
            <Dosar nr={4} data="12.05.2021" status="ACCEPTED" university="Universitatea Tehnica" faculty="Automatica si Calculatoare" speciality="Calculatoare"  />
        </div>
    </div>
  );
};


type DosarProps = {
    nr: number;
    data: string;
    status: string;
    university: string;
    faculty: string;
    speciality: string;
}


const Dosar = (props: DosarProps) => {

    const STATUS = {
        Validat: 'bg-green-100 text-green-500',
        Refuzat: 'bg-red-100 text-red-500',
        PENDING: 'bg-orange-100 text-orange-500',
    }

    return (
        <div className="flex items-start w-full justify-between border border-gray-200 rounded-2xl p-4 mb-4 hover:bg-gray-50">
        <div className="flex flex-col items-start w-fit text-center">
            <p className="text-gray-500 text-xs">Dosarul</p>
            <p className="text-gray-700 text-sm mt-2">Nr. {props.nr}</p>
        </div>
        <div className="flex flex-col items-center w-fit text-center">
            <p className="text-gray-500 text-xs">Data depunerii</p>
            <p className="text-gray-700 text-sm mt-2">{props.data}</p>
        </div>
        <div className="flex flex-col items-center w-fit text-center">
            <p className="text-gray-500 text-xs">Univeristatea</p>
            <p className="text-gray-700 text-sm mt-2">
                {props.university}
            </p>
        </div>
        <div className="flex flex-col items-center w-fit text-center">
            <p className="text-gray-500 text-xs">Facultatea</p>
            <p className="text-gray-700 text-sm mt-2">
                {props.faculty}
            </p>
        </div>
        <div className="flex flex-col items-center w-fit text-center">
            <p className="text-gray-500 text-xs">Specialitatea</p>
            <p className="text-gray-700 text-sm mt-2">
                {props.speciality}
            </p>
        </div>
        <div className="flex flex-col items-end w-fit text-center">
            <p className="text-gray-500 text-xs">Status</p>
            <span 
                className={` rounded-md px-2 py-1 text-xs mt-2 `}
            >{props.status}</span>
        </div>
    </div>
    )
}

export default page;
