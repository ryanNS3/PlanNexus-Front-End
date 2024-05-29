import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CampBlack } from "../../assets/CampIcon";
import { LockerContext } from "../../context/lockerContext";
import { useEffect } from "react";

export function Percentage() {
  // Dados da API
  const { dataLocker } = React.useContext(LockerContext);

  //Chamada única dos dados
  useEffect(() => {
    dataLocker;
    console.log(dataLocker);
  }, []);

  let lockerBusy = 0;
  let totalLocker = 0;

  Object.values(dataLocker)?.map((lockerPagination) => {
    // filtro dos armários ocupados
    lockerBusy += lockerPagination.filter(
      (locker) => locker.status === "ocupado" || locker.status == "trancado"
    ).length;

    // Total de armários
    totalLocker += lockerPagination.length;
  });

  // Conta de porcentagem
  const percentageBusy = (lockerBusy / totalLocker) * 100;

  return (
    <div className="w-52 h-24 p-4 shadow-lg flex-col flex gap-y-5 ">
      <div className="flex justify-between">
        <p className="text-fun2">Utilizados</p>
        <CampBlack />
      </div>

      <Box className="flex justify-between items-center">
        <Box className="w-32">
          <LinearProgress variant="determinate" value={percentageBusy} />
        </Box>
        <Box className="flex">
          <Typography className="text-fun2">{`${Math.round(
            percentageBusy
          )}%`}</Typography>
        </Box>
      </Box>
    </div>
  );
}
