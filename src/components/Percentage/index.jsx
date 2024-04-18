import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CampBlack } from '../../assets/CampIcon'

function PercentageTwo(props) {

  // Essa props é uma exceção de uso, Ryan está ciente!

  return (
    <div className="col-span-2 w-52 h-24 p-4 mt-8 shadow-lg flex-col flex gap-y-5 ">
      <div className="flex justify-between">
        <p className="text-fun2">Utilizados</p>
        <CampBlack />
      </div>

      <Box className="flex gap-x-2 align-center items-center">
        <Box className=" w-full">
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box className="min-w-8">
          <Typography className='text-fun2'>{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>

    </div>
  )
}

PercentageTwo.propTypes = {
  value: PropTypes.number.isRequired,
};

export function Percentage() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <PercentageTwo className="flex self-center" value={progress} />
    </Box>
  );
}