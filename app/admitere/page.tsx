"use client";

import Alert from "@/components/Alert";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Radio from "@/components/Radio";
import Select from "@/components/Select";
import StikyHeader from "@/components/StikyHeader";
import { useRouter } from "next/navigation";
import { useState } from "react";

type FormProps = {
  lastName: string;
  lastNameAfterMarriage: string;
  firstName: string;
  birthDate: string;
  country: string;
  county: string;
  nationality: string;
  citizenship: string;
  ethnicity: string;
  civilStatus: string;
  environment: string;
  lastEducation: string;
  phone: string;
  agree: boolean;
};

const defaultForm: FormProps = {
  lastName: "",
  lastNameAfterMarriage: "",
  firstName: "",
  birthDate: "",
  country: "",
  county: "",
  nationality: "",
  citizenship: "",
  ethnicity: "",
  civilStatus: "",
  environment: "",
  lastEducation: "",
  phone: "",
  agree: false,
};

const Admitere = () => {
  let [errors, setErrors] = useState(defaultForm);
  let [form, setForm] = useState<FormProps>(defaultForm);
  const router = useRouter();

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e: any) => {
    e.preventDefault();
    if (e.target.value === "") {
      setErrors({
        ...errors,
        [e.target.name]: `Campul ${e.target.name} este obligatoriu`,
      });
    } else {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/admitere/info");
  };

  const phoneValidation = (phone: string) => {
    return RegExp(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    ).test(phone);
  };

  return (
    <div className="flex min-h-screen flex-col items-center mb-8">
      <StikyHeader title="Date personale" currentStep={1} totalSteps={8} />

      <form
        className="flex flex-col w-full md:w-[80dvw] lg:w-1/2 gap-3 p-2"
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Alert
          type="info"
          title="Atentie !"
          message="Toate campurile marcate cu * sunt obligatorii si trebuie completate cu date reale, în caz contrar dosarul va fi respinsa."
        />
        <Input
          label="Nume (din certificatul de nastere)"
          name="lastName"
          placeholder="Popescu"
          type="text"
          required={true}
          error={errors.lastName}
          fullWidth={true}
          valid={form.lastName.length > 0}
        />
        <Input
          label="Nume ( dupa casatorie dacă este cazul)"
          name="lastNameAfterMarriage"
          placeholder="Popescu"
          type="text"
          required={false}
          error={errors.lastNameAfterMarriage}
          fullWidth={true}
          valid={form.lastNameAfterMarriage.length > 0}
        />
        <Input
          label="Prenume (din certificatul de nastere)"
          name="firstName"
          placeholder="Ion"
          type="text"
          required={true}
          error={errors.firstName}
          fullWidth={true}
          valid={form.firstName.length > 0}
        />
        <Input
          label="Data nasterii"
          name="birthDate"
          placeholder="01/01/2000"
          type="date"
          required={true}
          error={errors.birthDate}
          fullWidth={true}
          valid={form.birthDate.length > 0}
        />
        <Select
          label="Țara natală"
          name="country"
          options={["Romania", "Moldova"]}
          required={true}
        />
        <Select
          label="Judetul natal"
          name="county"
          options={["Romania", "Moldova"]}
          required={true}
        />

        <div className="w-full border-b border-gray-300 my-4"></div>
        <Input
          label="Nationalitate"
          name="nationality"
          placeholder="Romana"
          type="text"
          required={true}
          error={errors.nationality}
          fullWidth={true}
          valid={form.nationality.length > 3}
        />
        <Input
          label="Cetatenie"
          name="citizenship"
          placeholder="Romana"
          required={true}
          error={errors.citizenship}
          fullWidth={true}
          valid={form.citizenship.length > 3}
        />
        <Input
          label="Etnie"
          name="ethnicity"
          placeholder="Romana"
          type="text"
          required={true}
          error={errors.ethnicity}
          fullWidth={true}
          valid={form.ethnicity.length > 3}
        />
        <Select
          label="Sex"
          name="sex"
          options={["Masculin", "Feminin"]}
          required={true}
        />
        <Select
          label="Stare civila"
          name="civilStatus"
          options={["Necasatorit", "Casatorit", "Divortat", "Vaduv"]}
          required={true}
        />
        <Select
          label="Mediu de provenienta"
          name="environment"
          options={["Urban", "Rural"]}
          required={true}
        />
        <Select
          label="Ultima forma de invatamant absolvita"
          name="lastEducation"
          options={["Liceu", "Scoala profesionala", "Facultate"]}
          required={true}
        />

        <div className="w-full border-b border-gray-300 my-4"></div>
        <Input
          label="Numar de telefon"
          name="phone"
          placeholder="07xxxxxxxx"
          type="phone"
          required={true}
          error={phoneValidation(form.phone) ? "" : "Numar de telefon invalid"}
          fullWidth={true}
          valid={phoneValidation(form.phone)}
        />

        <Radio />
        <Checkbox
          name="agree"
          label="Sunt de acord cu prelucrarea datelor personale"
          required={true}
        />
        <button
          type="submit"
          className="text-center bg-sky-500 text-white text-sm px-4 py-3 rounded-2xl mt-4 hover:bg-sky-600 transition duration-200 focus:outline-none focus:ring-4 focus:ring-sky-200 active:bg-sky-700"
        >
          <span className="flex items-center justify-center leading-6 uppercase font-medium">
            Următorul pas
          </span>
        </button>
      </form>
    </div>
  );
};

export default Admitere;
