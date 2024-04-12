import React from "react";
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CampBlack } from '../../assets/CampIcon'

export function Percentage(){
// export function Percentage(props){
//   return (
//     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//       <Box sx={{ width: '100%', mr: 1 }}>
//         <LinearProgress variant="determinate" {...props} />
//       </Box>
//       <Box sx={{ minWidth: 35 }}>
//         <Typography variant="body2" color="text.secondary">{`${Math.round(
//           props.value,
//         )}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

// Percentage.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
//   value: PropTypes.number.isRequired,
// };

// export function LinearValue() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//     return (
//       <>
//         <div className="col-span-2 w-52 h-24">
//           <Box sx={{ width: '100%' }}>
//               <LinearValue value={progress} />
//           </Box>
//         </div>
//       </>
//     )
// }

  return (
    <>
      <div className="col-span-2 w-52 h-24 p-4 mt-8 shadow-lg">
        <div className="flex justify-between items-center">
          <p className="text-fun2">Utilizados</p>
          <CampBlack/>
        </div>
         {/* Lugar do Percentual Linear */}
      </div>
    </>
)
  }