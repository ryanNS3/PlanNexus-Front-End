import { SecundaryButton } from "../Buttons/secundaryButton";
import { Lock } from "../../assets/Lock";
import { Door } from "../../assets/Door";
import { Volunteer } from "../../assets/Volunteer";
import { LockerInfo } from "../../components/Form/lockerInfo";
import { ModalOptions } from "../Modal";
import React from "react";
import { LockerVolunteer } from "../../components/Form/lockerVolunteer";

export function Options() {

  return (
    <>
      <div className="absolute flex flex-col z-10 gap-y-1 ">
        <SecundaryButton text={"Trancar"} icon={<Lock />} />

        <div>
          <ModalOptions
            Button={<SecundaryButton text={"Doar"} icon={<Volunteer />} />}
          >
            <LockerVolunteer />
          </ModalOptions>
        </div>

        <div>
          <ModalOptions
            Button={<SecundaryButton text={"Informações"} icon={<Door />} />}
          >
            <LockerInfo />
          </ModalOptions>
        </div>
      </div>
    </>
  );
}
