import { PinkButton } from "../../Buttons/pinkButton";
import { GhostButton } from "../../Buttons/ghostButton";
import { TextArea } from "../../Inputs/TextArea";
import { Label } from "../../Inputs/Label";
import { InputCalendar } from "../../Inputs/InputCalendar";

export function LockerForm() {
  return (
    <form className="flex flex-col w-full justify-between">
      <div className="max-h-[90%] h-full overflow-y-scroll flex flex-col justify-between" style={{ scrollbarWidth: "none" }}>
        <div className="flex flex-col">
          <h1 className="text-h4">ENVIAR AVISO</h1>
          <div className="mt-3">
            <Label text={"Motivo:"} />
            <TextArea />
          </div>
          <div className="mt-3">
            <Label text={"Data:"} />
            <InputCalendar/>
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-4">
          <GhostButton text={"Cancelar"} action={() => console.log("Cancelar")} />
          <PinkButton text={"Continuar"} />
        </div>
      </div>
    </form>
  );
}
