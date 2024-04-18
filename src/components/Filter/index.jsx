import React, { useState, useEffect } from "react";
import { FilterWhite } from "../../assets/filter_white.jsx";
import { FilterBlack } from "../../assets/filter_black.jsx";
import { ArrowDown } from "../../assets/arrow_down.jsx";
import { ArrowUp } from "../../assets/arrow_up.jsx";
import { CloseIcon } from "../../assets/closeIcon.jsx"

export function Filter() {
  const [activeFilter, setActiveFilter] = useState(false);
  const [activeSemestre, setActiveSemestre] = useState(false);
  const [activeCurso, setActiveCurso] = useState(false);
  const [activeAno, setActiveAno] = useState(false);
  const [primSem, setPrimSem] = useState(false);
  const [seguSem, setSeguSem] = useState(false);
  const [tercSem, setTercSem] = useState(false);
  const [quarSem, setQuarSem] = useState(false);
  const [quinSem, setQuinSem] = useState(false);
  const [sextSem, setSextSem] = useState(false);
  const [adsCur, setAdsCur] = useState(false);
  const [redesCur, setRedesCur] = useState(false);
  const [mecaCur, setMecaCur] = useState(false);
  const [qualidadeCur, setQualidadeCur] = useState(false);
  const [primAno, setPrimAno] = useState(false);
  const [segAno, setSegAno] = useState(false);
  const [terAno, setTerAno] = useState(false);

  let FilterStyle;
  activeFilter == true
    ? (FilterStyle = "w-11 h-11 rounded bg-cinza-700")
    : (FilterStyle =
        "w-11 h-11 border-2 rounded border-cinza-700 hover:bg-cinza-100");

  let ButtonStyleSemestre;
  activeSemestre == true
    ? (ButtonStyleSemestre = "bg-cinza-100 rounded")
    : (ButtonStyleSemestre = "bg-cinza-50");

  let ButtonStyleCurso;
  activeCurso == true
    ? (ButtonStyleCurso = "bg-cinza-100 rounded")
    : (ButtonStyleCurso = "bg-cinza-50");

  let ButtonStyleAno;
  activeAno == true
    ? (ButtonStyleAno = "bg-cinza-100 rounded")
    : (ButtonStyleAno = "bg-cinza-50");

  function FilterIcon() {
    let FilterColor;
    activeFilter == true
      ? (FilterColor = FilterWhite())
      : (FilterColor = FilterBlack());

    return FilterColor;
  }

  function ArrowIconSemestre() {
    let ArrowDirectionSemestre;
    activeSemestre == true
      ? (ArrowDirectionSemestre = ArrowUp())
      : (ArrowDirectionSemestre = ArrowDown());

    return ArrowDirectionSemestre;
  }

  function ArrowIconCurso() {
    let ArrowDirectionCurso;
    activeCurso == true
      ? (ArrowDirectionCurso = ArrowUp())
      : (ArrowDirectionCurso = ArrowDown());

    return ArrowDirectionCurso;
  }

  function ArrowIconAno() {
    let ArrowDirectionAno;
    activeAno == true
      ? (ArrowDirectionAno = ArrowUp())
      : (ArrowDirectionAno = ArrowDown());

    return ArrowDirectionAno;
  }

  return (
    <>
      <div className="flex items-center ">
        {primSem && (
          <div className="flex items-center bg-cinza-700 rounded py-1 ml-1 px-[5px] gap-[3px]">
            <p className="text-[#fff] text-ct2">1ºsem</p><button onClick={() => setPrimSem(false)}><CloseIcon/></button>
          </div>
        )}
        {seguSem && (
          <div className="flex items-center bg-cinza-700 rounded py-1 ml-1 px-[5px] gap-[3px]">
            <p className="text-[#fff] text-ct2">2ºsem</p><button onClick={() => setSeguSem(false)}><CloseIcon/></button>
          </div>
        )}
        {tercSem && (
          <div className="flex items-center bg-cinza-700 rounded py-1 ml-1 px-[5px] gap-[3px]">
            <p className="text-[#fff] text-ct2">3ºsem</p><button onClick={() => setTercSem(false)}><CloseIcon/></button>
          </div>
        )}
        {quarSem && (
          <div className="flex items-center bg-cinza-700 rounded py-1 ml-1 px-[5px] gap-[3px]">
            <p className="text-[#fff] text-ct2">4ºsem</p><button onClick={() => setQuarSem(false)}><CloseIcon/></button>
          </div>
        )}
        {quinSem && (
          <div className="flex items-center bg-cinza-700 rounded py-1 ml-1 px-[5px] gap-[3px]">
            <p className="text-[#fff] text-ct2">5ºsem</p><button onClick={() => setQuinSem(false)}><CloseIcon/></button>
          </div>
        )}
        {sextSem && (
          <div className="flex items-center bg-cinza-700 rounded py-1 ml-1 px-[5px] gap-[3px]">
            <p className="text-[#fff] text-ct2">6ºsem</p><button onClick={() => setSextSem(false)}><CloseIcon/></button>
          </div>
        )}
        {adsCur && (
          <div className="flex items-center bg-cinza-700 rounded py-1 ml-1 px-[5px] gap-[3px]">
            <p className="text-[#fff] text-ct2">ADS</p><button onClick={() => setAdsCur(false)}><CloseIcon/></button>
          </div>
        )}
        {redesCur && (
          <div className="flex items-center bg-cinza-700 rounded py-1 ml-1 px-[5px] gap-[3px]">
            <p className="text-[#fff] text-ct2">redes</p><button onClick={() => setRedesCur(false)}><CloseIcon/></button>
          </div>
        )}
        {mecaCur && (
          <div className="flex items-center bg-cinza-700 rounded py-1 ml-1 px-[5px] gap-[3px]">
            <p className="text-[#fff] text-ct2">mecânica</p><button onClick={() => setMecaCur(false)}><CloseIcon/></button>
          </div>
        )}
        {qualidadeCur && (
          <div className="flex items-center bg-cinza-700 rounded py-1 ml-1 px-[5px] gap-[3px]">
            <p className="text-[#fff] text-ct2">qualidade</p><button onClick={() => setQualidadeCur(false)}><CloseIcon/></button>
          </div>
        )}
        {primAno && (
          <div className="flex items-center bg-cinza-700 rounded py-1 ml-1 px-[5px] gap-[3px]">
            <p className="text-[#fff] text-ct2">1ºano</p><button onClick={() => setPrimAno(false)}><CloseIcon/></button>
          </div>
        )}
        {segAno && (
          <div className="flex items-center bg-cinza-700 rounded py-1 ml-1 px-[5px] gap-[3px]">
            <p className="text-[#fff] text-ct2">2ºano</p><button onClick={() => setSegAno(false)}><CloseIcon/></button>
          </div>
        )}
        {terAno && (
          <div className="flex items-center bg-cinza-700 rounded py-1 ml-1 px-[5px] gap-[3px]">
            <p className="text-[#fff] text-ct2">3ºano</p><button onClick={() => setTerAno(false)}><CloseIcon/></button>
          </div>
        )}
        <a className="text-fun2 pr-1.5 pl-1.5">Filtro</a>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className={`${FilterStyle} flex items-center justify-center`}
          onClick={() => setActiveFilter(!activeFilter)}
        >
          <FilterIcon />
        </button>
        {activeFilter && (
          <div
            id="dropdown"
            className="z-10 absolute mt-2 bg-cinza-50 border-cinza-200 border-[1px] w-44 top-[4.10rem] right-[0.00rem] divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          >
            <ul
              className="py-2 text-fun2"
              aria-labelledby="dropdownDefaultButton"
            >
              <li className={`${ButtonStyleSemestre} mx-2`}>
                <button
                  className={`flex items-center justify-between w-full px-4 py-2 text-fun2`}
                  onClick={() => setActiveSemestre(!activeSemestre)}
                >
                  Semestre <ArrowIconSemestre />
                </button>
                {activeSemestre && (
                  <div
                    id="dropdownSemestre"
                    className="flex-col gap-2 items-center px-4 pb-3"
                  >
                    <label className="flex items-center mb-1.5 gap-2">
                      <input
                        type="checkbox"
                        class="rounded  w-[16px] h-[16px] "
                        onClick={() => setPrimSem(!primSem)}
                        checked = {primSem ? true : false}
                      ></input>
                      <a className="text-ct2">1º Semestre</a>
                    </label>
                    <label className="flex items-center mb-1.5 gap-2">
                      <input
                        type="checkbox"
                        class="rounded  w-[16px] h-[16px] "
                        onClick={() => setSeguSem(!seguSem)}
                        checked = {seguSem ? true : false}
                      ></input>
                      <a className="text-ct2">2º Semestre</a>
                    </label>
                    <label className="flex items-center mb-1.5 gap-2">
                      <input
                        type="checkbox"
                        class="rounded  w-[16px] h-[16px] "
                        onClick={() => setTercSem(!tercSem)}
                        checked = {tercSem ? true : false}
                      ></input>
                      <a className="text-ct2">3º Semestre</a>
                    </label>
                    <label className="flex items-center mb-1.5 gap-2">
                      <input
                        type="checkbox"
                        class="rounded  w-[16px] h-[16px] "
                        onClick={() => setQuarSem(!quarSem)}
                        checked = {quarSem ? true : false}
                      ></input>
                      <a className="text-ct2">4º Semestre</a>
                    </label>
                    <label className="flex items-center mb-1.5 gap-2">
                      <input
                        type="checkbox"
                        class="rounded  w-[16px] h-[16px] "
                        onClick={() => setQuinSem(!quinSem)}
                        checked = {quinSem ? true : false}
                      ></input>
                      <a className="text-ct2">5º Semestre</a>
                    </label>
                    <label className="flex items-center mb-1.5 gap-2">
                      <input
                        type="checkbox"
                        class="rounded  w-[16px] h-[16px] "
                        onClick={() => setSextSem(!sextSem)}
                        checked = {sextSem ? true : false}
                      ></input>
                      <a className="text-ct2">6º Semestre</a>
                    </label>
                  </div>
                )}
              </li>
              <li className={`${ButtonStyleCurso} mx-2`}>
                <button
                  href="#"
                  className="flex items-center justify-between w-full px-4 py-2 text-fun2"
                  onClick={() => setActiveCurso(!activeCurso)}
                >
                  Curso <ArrowIconCurso />
                </button>
                {activeCurso && (
                  <div
                    id="dropdownCurso"
                    className="flex-col gap-2 items-center px-4 pb-3"
                  >
                    <label className="flex items-center mb-1.5 gap-2">
                      <input
                        type="checkbox"
                        class="rounded  w-[16px] h-[16px] border-2 border-black checked:bg-cinza-800 "
                        onClick={() => setAdsCur(!adsCur)}
                        checked = {adsCur ? true : false}
                      ></input>
                      <a className="text-ct2">ADS</a>
                    </label>
                    <label className="flex items-center mb-1.5 gap-2">
                      <input
                        type="checkbox"
                        class="rounded  w-[16px] h-[16px] border-2 border-black checked:bg-cinza-800 "
                        onClick={() => setRedesCur(!redesCur)}
                        checked = {redesCur ? true : false}
                      ></input>
                      <a className="text-ct2">REDES</a>
                    </label>
                    <label className="flex items-center mb-1.5 gap-2">
                      <input
                        type="checkbox"
                        class="rounded  w-[16px] h-[16px] border-2 border-black checked:bg-cinza-800 "
                        onClick={() => setQualidadeCur(!qualidadeCur)}
                        checked = {qualidadeCur ? true : false}
                      ></input>
                      <a className="text-ct2">QUALIDADE</a>
                    </label>
                    <label className="flex items-center mb-1.5 gap-2">
                      <input
                        type="checkbox"
                        class="rounded  w-[16px] h-[16px] border-2 border-black checked:bg-cinza-800 "
                        onClick={() => setMecaCur(!mecaCur)}
                        checked = {mecaCur ? true : false}
                      ></input>
                      <a className="text-ct2">MECÂNICA</a>
                    </label>
                  </div>
                )}
              </li>
              <li className={`${ButtonStyleAno} mx-2`}>
                <button
                  href="#"
                  className="flex items-center justify-between w-full px-4 py-2 text-fun2"
                  onClick={() => setActiveAno(!activeAno)}
                >
                  Ano <ArrowIconAno />
                </button>
                {activeAno && (
                  <div
                    id="dropdownAno"
                    className="flex-col gap-2 items-center px-4 pb-3"
                  >
                    <label className="flex items-center mb-1.5 gap-2">
                      <input
                        type="checkbox"
                        class="rounded  w-[16px] h-[16px] border-2 border-black checked:bg-cinza-800 "
                        onClick={() => setPrimAno(!primAno)}
                        checked = {primAno ? true : false}
                      ></input>
                      <a className="text-ct2">1º Ano</a>
                    </label>
                    <label className="flex items-center mb-1.5 gap-2">
                      <input
                        type="checkbox"
                        class="rounded  w-[16px] h-[16px] border-2 border-black checked:bg-cinza-800 "
                        onClick={() => setSegAno(!segAno)}
                        checked = {segAno ? true : false}
                      ></input>
                      <a className="text-ct2">2º Ano</a>
                    </label>
                    <label className="flex items-center mb-1.5 gap-2">
                      <input
                        type="checkbox"
                        class="rounded  w-[16px] h-[16px] border-2 border-black checked:bg-cinza-800 "
                        onClick={() => setTerAno(!terAno)}
                        checked = {terAno ? true : false}
                      ></input>
                      <a className="text-ct2">3º Ano</a>
                    </label>
                  </div>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
