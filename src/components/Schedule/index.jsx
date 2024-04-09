import React from "react";

export function Schedule() {
  return (
    <section className="px-6 py-9 shadow-[0_4px_8px_0px_rgba(227,227,227)] rounded-lg">
      <h2 className="text-sub2 mb-7">Agenda</h2>

      <nav>
        <ul className="flex gap-6">
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-rosa-300 text-fun2 text-branco">
            S
          </li>
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-cinza-100 text-fun2 text-cinza-500 hover:bg-rosa-300 hover:text-branco">
            T
          </li>
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-cinza-100 text-fun2 text-cinza-500 hover:bg-rosa-300 hover:text-branco">
            Q
          </li>
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-cinza-100 text-fun2 text-cinza-500 hover:bg-rosa-300 hover:text-branco">
            Q
          </li>
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-cinza-100 text-fun2 text-cinza-500 hover:bg-rosa-300 hover:text-branco">
            S
          </li>
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-cinza-100 text-fun2 text-cinza-500 hover:bg-rosa-300 hover:text-branco">
            S
          </li>
          <li className="cursor-pointer w-8 h-8 rounded-full flex items-center justify-center bg-cinza-100 text-fun2 text-cinza-500 hover:bg-rosa-300 hover:text-branco">
            D
          </li>
        </ul>
      </nav>

      <div className="flex flex-col mt-9 gap-11">
        {events.map((task, index) => (
          <React.Fragment index={index}>
            <Task
              text={task.text}
              time={task.time}
              name={task.name}
              picture={task.picture}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function Task({ text, time, name, picture }) {
  return (
    <div className="flex relative items-center gap-2">
      <span className="block px-2 py-3 bg-rosa-400 h-fit rounded-lg text-branco text-fun2">
        {time}
      </span>

      <div className="flex justify-between gap-3 items-center rounded-lg border-2 border-cinza-200 px-4 py-6 w-full">
        <p className="text-fun2">{text.length <= 14 ? text : text.slice(0, 14) + "..."}</p> {/*11 */}
        <div className="flex gap-2">
          <button type="button" className="py-1 px-3 bg-[#71d16e] rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
            >
              <path
                d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
                fill="#fff"
              />
            </svg>
          </button>

          <button type="button" className="px-3 py-1 bg-cinza-500 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 -960 960 960"
              width="20"
            >
              <path
                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
        <div className="absolute flex gap-1 bg-branco top-[-12px] px-2">
          <img className=" rounded-full h-6 w-6" src={picture} alt="" />
          <span className="text-ct3">{name}</span>
        </div>
      </div>
    </div>
  );
}
