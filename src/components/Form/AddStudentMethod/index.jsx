import React from "react";
import { AddMultipleStudents } from "../AddMultipleStudents";
import { AddStudent } from "../AddStudent";

export function AddStudentMethod() {
  const [method, setMethod] = React.useState();
  return (
    <>
      {!method && (
        <div className="flex flex-col gap-6">
          <p className="text-sub1">Método de cadastro</p>

          <div
            className="flex gap-4 items-start"
            onClick={() => setMethod("excel")}
          >
            <div className="py-10 px-9 bg-cinza-100 rounded border-4 border-transparent hover:border-rosa-300 cursor-pointer">
              <svg
                width="62"
                height="58"
                viewBox="0 0 62 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_765_1946)">
                  <path
                    d="M38.9302 27.5502L14.4186 23.2002V55.3424C14.4186 56.8102 15.6019 58.0002 17.0615 58.0002H59.3571C60.8167 58.0002 62 56.8102 62 55.3424V43.5002L38.9302 27.5502Z"
                    fill="#185C37"
                  />
                  <path
                    d="M38.9302 0H17.0615C15.6019 0 14.4186 1.18995 14.4186 2.65784V14.5L38.9302 29L51.9069 33.35L62 29V14.5L38.9302 0Z"
                    fill="#21A366"
                  />
                  <path
                    d="M14.4186 14.5H38.9302V29H14.4186V14.5Z"
                    fill="#107C41"
                  />
                  <path
                    opacity="0.1"
                    d="M31.9617 11.5996H14.4186V47.8496H31.9617C33.4194 47.8448 34.5999 46.6577 34.6046 45.1918V14.2575C34.5999 12.7916 33.4194 11.6044 31.9617 11.5996Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    d="M30.5198 13.0498H14.4186V49.2998H30.5198C31.9775 49.295 33.158 48.1079 33.1628 46.642V15.7076C33.158 14.2417 31.9775 13.0546 30.5198 13.0498Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    d="M30.5198 13.0498H14.4186V46.3998H30.5198C31.9775 46.395 33.158 45.2079 33.1628 43.742V15.7076C33.158 14.2417 31.9775 13.0546 30.5198 13.0498Z"
                    fill="black"
                  />
                  <path
                    opacity="0.2"
                    d="M29.078 13.0498H14.4186V46.3998H29.078C30.5357 46.395 31.7162 45.2079 31.7209 43.742V15.7076C31.7162 14.2417 30.5357 13.0546 29.078 13.0498Z"
                    fill="black"
                  />
                  <path
                    d="M2.64292 13.0498H29.078C30.5376 13.0498 31.7209 14.2398 31.7209 15.7076V42.2919C31.7209 43.7598 30.5376 44.9498 29.078 44.9498H2.64292C1.18327 44.9498 0 43.7599 0 42.292V15.7076C0 14.2398 1.18327 13.0498 2.64292 13.0498Z"
                    fill="url(#paint0_linear_765_1946)"
                  />
                  <path
                    d="M8.18542 37.639L13.7452 28.9753L8.65115 20.3594H12.7489L15.5288 25.8694C15.7855 26.3928 15.9614 26.7814 16.0565 27.0381H16.0926C16.2752 26.6205 16.4675 26.215 16.6693 25.8215L19.641 20.3623H23.4028L18.1789 28.9274L23.5355 37.639H19.5329L16.3218 31.5911C16.1706 31.3338 16.0422 31.0635 15.9383 30.7834H15.8908C15.7967 31.0578 15.6719 31.3205 15.5187 31.5664L12.2126 37.639H8.18542Z"
                    fill="white"
                  />
                  <path
                    d="M59.357 0H38.9302V14.5H61.9999V2.65784C61.9999 1.18995 60.8167 0 59.357 0Z"
                    fill="#33C481"
                  />
                  <path
                    d="M38.9302 29H61.9999V43.5H38.9302V29Z"
                    fill="#107C41"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_765_1946"
                    x1="5.51057"
                    y1="10.973"
                    x2="26.3856"
                    y2="46.9248"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#18884F" />
                    <stop offset="0.5" stop-color="#117E43" />
                    <stop offset="1" stop-color="#0B6631" />
                  </linearGradient>
                  <clipPath id="clip0_765_1946">
                    <rect width="62" height="58" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>

            <div className="max-w-[280px]">
              <p className="text-sub2 text-rosa-400">Adicionar por excel</p>
              <p className="text-ct2 text-cinza-700">
                Selecione um arquivo do excel e faça o cadastro automatizado dos
                alunos.
              </p>
            </div>
          </div>

          <div
            className="flex gap-4 items-start"
            onClick={() => setMethod("manual")}
          >
            <div className="py-10 px-9 bg-cinza-100 rounded border-4 border-transparent hover:border-rosa-300 cursor-pointer">
              <svg
                width="62"
                height="62"
                viewBox="0 0 62 62"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.935 46.81C14.57 44.795 17.515 43.2062 20.77 42.0438C24.025 40.8813 27.435 40.3 31 40.3C34.565 40.3 37.975 40.8813 41.23 42.0438C44.485 43.2062 47.43 44.795 50.065 46.81C51.8733 44.6917 53.2812 42.2892 54.2887 39.6025C55.2962 36.9158 55.8 34.0483 55.8 31C55.8 24.1283 53.3846 18.2771 48.5537 13.4462C43.7229 8.61542 37.8717 6.2 31 6.2C24.1283 6.2 18.2771 8.61542 13.4462 13.4462C8.61542 18.2771 6.2 24.1283 6.2 31C6.2 34.0483 6.70375 36.9158 7.71125 39.6025C8.71875 42.2892 10.1267 44.6917 11.935 46.81ZM31 34.1C27.9517 34.1 25.3813 33.0537 23.2888 30.9613C21.1963 28.8687 20.15 26.2983 20.15 23.25C20.15 20.2017 21.1963 17.6313 23.2888 15.5388C25.3813 13.4463 27.9517 12.4 31 12.4C34.0483 12.4 36.6188 13.4463 38.7113 15.5388C40.8037 17.6313 41.85 20.2017 41.85 23.25C41.85 26.2983 40.8037 28.8687 38.7113 30.9613C36.6188 33.0537 34.0483 34.1 31 34.1ZM31 62C26.7117 62 22.6817 61.1862 18.91 59.5588C15.1383 57.9313 11.8575 55.7225 9.0675 52.9325C6.2775 50.1425 4.06875 46.8617 2.44125 43.09C0.81375 39.3183 0 35.2883 0 31C0 26.7117 0.81375 22.6817 2.44125 18.91C4.06875 15.1383 6.2775 11.8575 9.0675 9.0675C11.8575 6.2775 15.1383 4.06875 18.91 2.44125C22.6817 0.81375 26.7117 0 31 0C35.2883 0 39.3183 0.81375 43.09 2.44125C46.8617 4.06875 50.1425 6.2775 52.9325 9.0675C55.7225 11.8575 57.9313 15.1383 59.5588 18.91C61.1862 22.6817 62 26.7117 62 31C62 35.2883 61.1862 39.3183 59.5588 43.09C57.9313 46.8617 55.7225 50.1425 52.9325 52.9325C50.1425 55.7225 46.8617 57.9313 43.09 59.5588C39.3183 61.1862 35.2883 62 31 62ZM31 55.8C33.7383 55.8 36.3217 55.3996 38.75 54.5988C41.1783 53.7979 43.4 52.6483 45.415 51.15C43.4 49.6517 41.1783 48.5021 38.75 47.7012C36.3217 46.9004 33.7383 46.5 31 46.5C28.2617 46.5 25.6783 46.9004 23.25 47.7012C20.8217 48.5021 18.6 49.6517 16.585 51.15C18.6 52.6483 20.8217 53.7979 23.25 54.5988C25.6783 55.3996 28.2617 55.8 31 55.8ZM31 27.9C32.3433 27.9 33.4542 27.4608 34.3325 26.5825C35.2108 25.7042 35.65 24.5933 35.65 23.25C35.65 21.9067 35.2108 20.7958 34.3325 19.9175C33.4542 19.0392 32.3433 18.6 31 18.6C29.6567 18.6 28.5458 19.0392 27.6675 19.9175C26.7892 20.7958 26.35 21.9067 26.35 23.25C26.35 24.5933 26.7892 25.7042 27.6675 26.5825C28.5458 27.4608 29.6567 27.9 31 27.9Z"
                  fill="#333333"
                />
              </svg>
            </div>

            <div className="max-w-[280px]">
              <p className="text-sub2 text-rosa-400">Adicionar manualmente</p>
              <p className="text-ct2 text-cinza-700">
                Faça o cadastro manual de apenas um aluno, preenchendo todas as
                informações de cadastro.
              </p>
            </div>
          </div>
        </div>
      )}
      {method === "excel" && <AddMultipleStudents />}
      {method === "manual" && <AddStudent />}
    </>
  );
}
