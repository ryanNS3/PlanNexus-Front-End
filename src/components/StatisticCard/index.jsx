export function StatisticCard() {
  return (
    <div className="px-4 py-6 flex flex-col gap-12 border border-indigo-600 absolute right-[0] top-96">
      <header className="flex justify-center items-center">
        <div className="h-10 w-10 flex items-center justify-center bg-rosa-200">
        {/* <img src="" alt="" /> */}
        <span>Gari</span>
        </div>

        <h1 className="text-fun2">Associados</h1>
      </header>

      <div className="flex flex-col gap-4 text-xl">
        <p className="text-ct3">
          aumento
          <span className="bg-rosa-50 p-1 rounded-md inline-block ml-[0.188rem]">+16</span>
        </p>
        <p className="font-semibold text-h4">354</p>
        {/* Alterar o tamanho do texto pois 4xl = 36px e o certo é 40 px */}
      </div>
    </div>
  );
}
