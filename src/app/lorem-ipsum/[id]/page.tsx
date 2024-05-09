"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
} from "react-aria-components";

const mockData: FormData = {
  formId: "1234",
  label: "NUNC LUCTUS VEL TORTOR QUIS SODALES",
  uniqueId: { type: "string", oldValue: "34-56789012-3", newValue: undefined },
  altId: { type: "string", oldValue: "", newValue: undefined },
  dln: { type: "string", oldValue: "777-67-7777", newValue: undefined },
  lastName: { type: "string", oldValue: "WAYNE", newValue: undefined },
  givenName: { type: "string", oldValue: "BRUCE", newValue: undefined },
  gender: { type: "string", oldValue: "M - Male", newValue: undefined },
  dob: { type: "string", oldValue: undefined, newValue: undefined },
  street: { type: "string", oldValue: "2043 HILLTOP DR", newValue: undefined },
  city: { type: "string", oldValue: "LOS ANGELES", newValue: undefined },
  state: { type: "string", oldValue: "CA - California", newValue: undefined },
  zip: { type: "number", oldValue: 90210, newValue: undefined },
  country: { type: "string", oldValue: "UNITED STATES", newValue: undefined },
  telephone: { type: "string", oldValue: undefined, newValue: undefined },
  email: { type: "string", oldValue: "", newValue: undefined },
  sendLetter: { type: "string", oldValue: true, newValue: undefined },
  letterDate: { type: "string", oldValue: "", newValue: undefined },
  comments: { type: "boolean", oldValue: "", newValue: undefined },
};

interface FormData {
  formId: string;
  label: string;
  uniqueId: InputString;
  altId: InputString;
  dln: InputString;
  lastName: InputString;
  givenName: InputString;
  gender: InputString;
  dob: InputDate;
  street: InputString;
  city: InputString;
  state: InputString;
  zip: InputNumber;
  country: InputString;
  telephone: InputNumber;
  email: InputString;
  sendLetter: InputBoolean;
  letterDate: InputDate;
  comments: InputString;
}

interface InputField {
  type: string;
  oldValue: string | null;
  newValue: string | null;
}

interface InputString {
  type: string;
  oldValue: string | number | readonly string[] | undefined;
  newValue: string | number | readonly string[] | undefined;
}

interface InputNumber {
  type: string;
  oldValue: string | number | readonly string[] | undefined;
  newValue: string | number | readonly string[] | undefined;
}

interface InputDate {
  type: any;
  oldValue: any | null;
  newValue: any | null;
}

interface InputBoolean {
  type: string;
  oldValue: boolean | null | undefined;
  newValue: boolean | null | undefined;
}

type Props = {
  params: UrlParams;
};

type UrlParams = {
  id: string;
};

interface Indexable {
  [key: string]: any;
}

const LoremIpsumPage = ({ params }: Props) => {
  const currentPath = usePathname();
  const [formData, setFormData] = useState<FormData>(mockData);
  const [formLabel, setFormLabel] = useState();
  const [formDob, setFormDob] = useState<any>();

  function prettify(str: string) {
    return str
      .split("-")
      .map((part) => {
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join(" ");
  }

  function deconstructPath(str: string) {
    return prettify(str.slice(1).split("/").join("->-"));
  }

  function handleFormUpdate(inputId: any, inputValue: any) {
    setFormData((formData: any) => ({
      ...formData,
      [inputId]: {
        ...formData[inputId],
        newValue: inputValue,
      },
    }));
  }

  function resetChanges(e: any) {
    e.preventDefault();
    setFormData((prevFormData: any) => {
      const nextState = { ...prevFormData };
      Object.keys(prevFormData).forEach((key) => {
        nextState[key] = {
          ...nextState[key],
          newValue: null,
        };
      });
      return nextState;
    });
  }

  function handleSubmitLabel() {
    const location = window.location.hostname;
    fetch(`https://${location}:9000/api/labels`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
  }

  function handleSubmitForm() {
    const location = window.location.hostname;
    fetch(`https://${location}:9000/api/forms`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ formData }),
    });
  }

  return (
    <div className="w-full h-full px-14 flex flex-col">
      <div className="flex justify-between">
        <div>
          <div className="mt-3.5 text-[#616161] text-[10px] font-normal">
            {deconstructPath(currentPath)}
          </div>
          <h1 className="mb-8 text-black text-[40px] font-bold">
            {prettify(params.id)}
          </h1>
        </div>
        <div className="flex flex-col justify-center underline text-[#1D29A2]">
          Text Link
        </div>
      </div>
      <div
        className={`flex border-b-[1px] ml-[20px] pl-[50px] pb-8 mb-8 border-[#E1E1E1] items-center`}
      >
        <label htmlFor="label">LABEL</label>
        <select
          id="label"
          className={`bg-[#E1E1E1] bg-opacity-60 w-[618px] h-[34px] ml-3 mr-7 border-[1px] border-[#E1E1E1] rounded flex justify-between items-center`}
        >
          <option value="volvo">NUNC LUCTUS VEL TORTOR QUIS SODALES</option>
          <option value="saab">NUNC LUCTUS VEL QUIS SODALES</option>
          <option value="opel">NUNC LUCTUS VEL TORTOR SODALES</option>
          <option value="audi">NUNC LUCTUS VEL TORTOR QUIS</option>
        </select>
        <button
          onClick={() => handleSubmitLabel()}
          className={`w-[181px] h-12 bg-[#B9B9B9] rounded-full text-white`}
        >
          SUBMIT
        </button>
      </div>
      <form className={`flex flex-col ml-[20px]`}>
        <div className={`flex flex-row w-[100%]`}>
          <div className={`w-[55%]`}>
            <div>
              <h3 className={`font-bold text-xl mb-[19px]`}>ABOUT</h3>
              <div className={`flex mb-[13px]`}>
                <fieldset>
                  <label
                    htmlFor="uniqueId"
                    className={`inline-block text-right w-[145px] text-base pr-3`}
                  >
                    UNIQUE ID
                  </label>
                  <input
                    type="text"
                    key="uniqueId2"
                    id="uniqueId"
                    value={
                      formData.uniqueId.newValue
                        ? formData.uniqueId.newValue
                        : formData.uniqueId.oldValue
                    }
                    onChange={(e) =>
                      handleFormUpdate("uniqueId", e.target.value)
                    }
                    className={`w-[144px] h-8 px-2 border-[1px] border-[#E1E1E1] rounded ${
                      formData.uniqueId.oldValue && !formData.uniqueId.newValue
                        ? "bg-[#E1E1E1] bg-opacity-60"
                        : "bg-white"
                    }`}
                  />
                </fieldset>
                <fieldset>
                  <label htmlFor="altId" className={`inline-block pl-8 pr-3`}>
                    ALT ID
                  </label>
                  <input
                    type="text"
                    key="altId"
                    id="altId"
                    value={
                      formData.altId.newValue
                        ? formData.altId.newValue
                        : formData.altId.oldValue
                    }
                    onChange={(e) => handleFormUpdate("altId", e.target.value)}
                    className={`w-[144px] h-8 px-2 border-[1px] border-[#E1E1E1] rounded ${
                      formData.altId.oldValue && !formData.altId.newValue
                        ? "bg-[#E1E1E1] bg-opacity-60"
                        : "bg-white"
                    }}`}
                  />
                </fieldset>
              </div>
              <fieldset className={`mb-[13px]`}>
                <label
                  htmlFor="dln"
                  className={`inline-block text-right w-[145px] pr-3`}
                >
                  DLN
                </label>
                <input
                  type="text"
                  id="dln"
                  value={
                    formData.dln.newValue
                      ? formData.dln.newValue
                      : formData.dln.oldValue
                  }
                  onChange={(e) => handleFormUpdate("dln", e.target.value)}
                  className={`w-[144px] h-8 px-2 border-[1px] border-[#E1E1E1] rounded ${
                    formData.dln.oldValue && !formData.dln.newValue
                      ? "bg-[#E1E1E1] bg-opacity-60"
                      : "bg-white"
                  }`}
                />
              </fieldset>
              <fieldset className={`mb-[13px]`}>
                <label
                  htmlFor="lastName"
                  className={`inline-block text-right w-[145px] pr-3`}
                >
                  LAST NAME
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={
                    formData.lastName.newValue
                      ? formData.lastName.newValue
                      : formData.lastName.oldValue
                  }
                  onChange={(e) =>
                    handleFormUpdate("lastName", e.target.value.toUpperCase())
                  }
                  className={`w-[294px] h-8 px-2 border-[1px] border-[#E1E1E1] rounded ${
                    formData.lastName.oldValue && !formData.lastName.newValue
                      ? "bg-[#E1E1E1] bg-opacity-60"
                      : "bg-white"
                  }`}
                />
              </fieldset>
              <fieldset className={`mb-[13px]`}>
                <label
                  htmlFor="givenName"
                  className={`inline-block text-right w-[145px] pr-3`}
                >
                  GIVEN NAME
                </label>
                <input
                  type="text"
                  id="givenName"
                  value={
                    formData.givenName.newValue
                      ? formData.givenName.newValue
                      : formData.givenName.oldValue
                  }
                  onChange={(e) =>
                    handleFormUpdate("givenName", e.target.value.toUpperCase())
                  }
                  className={`w-[294px] h-8 px-2 border-[1px] border-[#E1E1E1] rounded ${
                    formData.givenName.oldValue && !formData.givenName.newValue
                      ? "bg-[#E1E1E1] bg-opacity-60"
                      : "bg-white"
                  }`}
                />
              </fieldset>
              <fieldset className={`flex mb-[13px] items-center`}>
                <label
                  htmlFor="gender"
                  className={`inline-block text-right w-[145px] pr-3`}
                >
                  GENDER
                </label>
                <select
                  id="gender"
                  className={`bg-[#E1E1E1] bg-opacity-60 w-[112px] h-[34px] px-[1px] border-[1px] border-[#E1E1E1] rounded flex justify-between items-center`}
                >
                  <option value="volvo">M - Male</option>
                  <option value="saab">F - Female</option>
                  <option value="opel">O - Other</option>
                  <option value="audi">Do not wish to respond</option>
                </select>
              </fieldset>
              <fieldset className={`flex items-center`}>
                {/* <Label>Date</Label> */}
                <label
                  htmlFor="dob"
                  className={`inline-block text-right w-[145px] pr-3`}
                >
                  DOB
                </label>
                <DatePicker
                  value={formDob}
                  onChange={setFormDob}
                  className={`flex h-[34px] border rounded px-2`}
                  id="dob"
                >
                  <Group className={`flex w-[140px] justify-between`}>
                    <DateInput className={`flex pt-[5px] pr-3`}>
                      {(segment) => <DateSegment segment={segment} />}
                    </DateInput>
                    <Button className={`pt-[1px]`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z" />
                        <path
                          fillRule="evenodd"
                          d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </Group>
                  <Popover className={`bg-white p-4 border rounded`}>
                    <Dialog>
                      <Calendar>
                        <header className={`flex justify-between`}>
                          <Button slot="previous">◀</Button>
                          <Heading />
                          <Button slot="next">▶</Button>
                        </header>
                        <CalendarGrid>
                          {(date) => <CalendarCell date={date} />}
                        </CalendarGrid>
                      </Calendar>
                    </Dialog>
                  </Popover>
                </DatePicker>
              </fieldset>
            </div>
          </div>
          <div>
            <div className={`mb-[70px]`}>
              <h3 className={`font-bold text-xl mb-[19px]`}>ADDRESS</h3>
              <fieldset className={`flex mb-[13px] items-center`}>
                <label
                  htmlFor="street"
                  className={`inline-block text-right w-[145px] pl-8 pr-3`}
                >
                  STREET
                </label>
                <input
                  type="text"
                  id="street"
                  value={
                    formData.street.newValue
                      ? formData.street.newValue
                      : formData.street.oldValue
                  }
                  onChange={(e) =>
                    handleFormUpdate("street", e.target.value.toUpperCase())
                  }
                  className={`w-[316px] h-8 px-2 border-[1px] border-[#E1E1E1] rounded ${
                    formData.street.oldValue && !formData.street.newValue
                      ? "bg-[#E1E1E1] bg-opacity-60"
                      : "bg-white"
                  }`}
                />
              </fieldset>
              <fieldset className={`flex mb-[13px] items-center`}>
                <label
                  htmlFor="city"
                  className={`inline-block text-right w-[145px] pr-3`}
                >
                  CITY
                </label>
                <input
                  type="text"
                  id="city"
                  value={
                    formData.city.newValue
                      ? formData.city.newValue
                      : formData.city.oldValue
                  }
                  onChange={(e) =>
                    handleFormUpdate("city", e.target.value.toUpperCase())
                  }
                  className={`w-[316px] h-8 px-2 border-[1px] border-[#E1E1E1] rounded ${
                    formData.city.oldValue && !formData.city.newValue
                      ? "bg-[#E1E1E1] bg-opacity-60"
                      : "bg-white"
                  }`}
                />
              </fieldset>
              <div className={`flex`}>
                <fieldset className={`flex mb-[13px] items-center`}>
                  <label
                    htmlFor="state"
                    className={`inline-block text-right w-[145px] text-base pr-3`}
                  >
                    STATE
                  </label>
                  <select
                    id="state"
                    className={`inline-block w-[112px] h-[34px] px-[1px] border-[1px] border-[#E1E1E1] rounded flex justify-between items-center ${
                      formData.state.oldValue && !formData.state.newValue
                        ? "bg-[#E1E1E1] bg-opacity-60"
                        : "bg-white"
                    }`}
                  >
                    <option value="volvo">CA - California</option>
                    <option value="saab">AL - Alabama</option>
                    <option value="opel">AK - Alaska</option>
                    <option value="audi">AZ - Arizona</option>
                  </select>
                </fieldset>
                <fieldset className={`flex mb-[13px] ml-[26px] items-center`}>
                  <label htmlFor="zip" className={`inline-block pr-3`}>
                    ZIP
                  </label>
                  <input
                    type="number"
                    id="zip"
                    value={
                      formData.zip.newValue
                        ? formData.zip.newValue
                        : formData.zip.oldValue
                    }
                    onChange={(e) =>
                      handleFormUpdate("zip", e.target.value.toUpperCase())
                    }
                    className={`w-[144px] h-8 px-2 border-[1px] border-[#E1E1E1] rounded ${
                      formData.zip.oldValue && !formData.zip.newValue
                        ? "bg-[#E1E1E1] bg-opacity-60"
                        : "bg-white"
                    }`}
                  />
                </fieldset>
              </div>
              <fieldset className={`flex mb-[13px] items-center`}>
                <label
                  htmlFor="country"
                  className={`inline-block text-right w-[145px] pr-3`}
                >
                  COUNTRY
                </label>
                <select
                  id="country"
                  className={`w-[259px] h-[34px] border-[1px] border-[#E1E1E1] rounded flex justify-between items-center ${
                    formData.country.oldValue && !formData.country.newValue
                      ? "bg-[#E1E1E1] bg-opacity-60"
                      : "bg-white"
                  }`}
                >
                  <option value="volvo">UNITED STATES</option>
                  <option value="saab">CANADA</option>
                  <option value="opel">MEXICO</option>
                  <option value="audi">CHINA</option>
                </select>
              </fieldset>
            </div>
            <div className={`mb-[95px]`}>
              <h3 className={`font-bold text-xl mb-[19px]`}>CONTACT</h3>
              <fieldset className={`flex mb-[13px] items-center`}>
                <label
                  htmlFor="telephone"
                  className={`inline-block text-right w-[145px] pl-8 pr-3`}
                >
                  TELEPHONE
                </label>
                <input
                  type="text"
                  id="telephone"
                  value={
                    formData.telephone.newValue
                      ? formData.telephone.newValue
                      : formData.telephone.oldValue
                  }
                  onChange={(e) =>
                    handleFormUpdate("telephone", e.target.value)
                  }
                  className={`w-[167px] h-8 px-2 border-[1px] border-[#E1E1E1] rounded ${
                    formData.telephone.oldValue && !formData.telephone.newValue
                      ? "bg-[#E1E1E1] bg-opacity-60"
                      : "bg-white"
                  }`}
                />
              </fieldset>
              <fieldset className={`flex mb-[13px] items-center`}>
                <label
                  htmlFor="email"
                  className={`inline-block text-right w-[145px] pr-3`}
                >
                  EMAIL
                </label>
                <input
                  type="text"
                  id="email"
                  value={
                    formData.email.newValue
                      ? formData.email.newValue
                      : formData.email.oldValue
                  }
                  onChange={(e) => handleFormUpdate("email", e.target.value)}
                  className={`w-[316px] h-8 px-2 border-[1px] border-[#E1E1E1] rounded ${
                    formData.email.oldValue && !formData.email.newValue
                      ? "bg-[#E1E1E1] bg-opacity-60"
                      : "bg-white"
                  }`}
                />
              </fieldset>
            </div>
          </div>
        </div>
        <div className={`flex-col`}>
          <h3 className={`mb-5 font-bold text-xl border-b-[1px]`}>LETTER</h3>
          <div className={`flex flex-row mb-[60px]`}>
            <fieldset className={`flex items-center w-[55%]`}>
              <input
                type="checkbox"
                checked={
                  formData.sendLetter.newValue
                    ? formData.sendLetter.newValue
                    : formData.sendLetter.oldValue
                    ? formData.sendLetter.oldValue
                    : false
                }
                onChange={(e) =>
                  handleFormUpdate(
                    "sendLetter",
                    formData.sendLetter.newValue
                      ? !formData.sendLetter.newValue
                      : formData.sendLetter.oldValue
                      ? !formData.sendLetter.oldValue
                      : true
                  )
                }
                id="sendLetter"
                className={``}
              />
              <label
                htmlFor="sendLetter"
                className={`inline-block w-[145px] ml-1.5 pr-3 pt-[2px]`}
              >
                SEND A LETTER
              </label>
            </fieldset>
            <fieldset className={`flex items-center`}>
              {/* <Label>Date</Label> */}
              <label
                htmlFor="letterDate"
                className={`inline-block text-right w-[145px] pr-3`}
              >
                DATE
              </label>
              <DatePicker
                className={`flex h-[34px] border rounded px-2 pt-[3px]`}
                id="letterDate"
              >
                <Group className={`flex w-[140px] justify-between`}>
                  <DateInput className={`flex pt-[1px] pr-3`}>
                    {(segment) => <DateSegment segment={segment} />}
                  </DateInput>
                  <Button className={`pt-[1px]`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z" />
                      <path
                        fillRule="evenodd"
                        d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </Group>
                <Popover className={`bg-white p-4 border rounded`}>
                  <Dialog>
                    <Calendar>
                      <header className={`flex justify-between`}>
                        <Button slot="previous">◀</Button>
                        <Heading />
                        <Button slot="next">▶</Button>
                      </header>
                      <CalendarGrid>
                        {(date) => <CalendarCell date={date} />}
                      </CalendarGrid>
                    </Calendar>
                  </Dialog>
                </Popover>
              </DatePicker>
            </fieldset>
          </div>
          <div>
            <fieldset className={`flex justify-start mb-[34px]`}>
              <label htmlFor="comments" className={`pr-3`}>
                COMMENTS
              </label>
              <textarea
                id="comments"
                value={
                  formData.comments.newValue
                    ? formData.comments.newValue
                    : formData.comments.oldValue
                }
                onChange={(e) => handleFormUpdate("comments", e.target.value)}
                className={`w-[694px] h-[109px] p-2 border-[1px] border-[#E1E1E1] rounded ${
                  formData.comments.oldValue && !formData.comments.newValue
                    ? "bg-[#E1E1E1] bg-opacity-60"
                    : "bg-white"
                }`}
              />
            </fieldset>
          </div>
        </div>
        <div className={`flex flex-row pl-[120px] mb-24`}>
          <button
            onClick={() => handleSubmitForm()}
            className={`w-[181px] h-12 bg-[#2C2C2C] rounded-full text-white`}
          >
            SUBMIT
          </button>
          <button
            onClick={(e) => resetChanges(e)}
            className={`ml-[40px] underline`}
          >
            Reset Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoremIpsumPage;
