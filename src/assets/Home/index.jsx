export function HomeIcon({ size }) {
  return (
    <svg
      className="max-[1471px]:w-6 max-[1471px]:h-6 max-[1471px]:m-auto"
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}`}
      viewBox="0 -960 960 960"
      width={`${size}`}
    >
      <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
    </svg>
  );
}

export function HomeIconLight({ size }) {
  return (
    <svg
      className="max-[1471px]:w-6 max-[1471px]:h-6 max-[1471px]:m-auto"  
      xmlns="http://www.w3.org/2000/svg"
      height={`${size}`}
      viewBox="0 -960 960 960"
      width={`${size}`}
    >
      <path
        d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
        fill="#F5ECFF"
      />
    </svg>
  );
}
