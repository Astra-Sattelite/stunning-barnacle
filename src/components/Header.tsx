import { useGetMatchesQuery } from "../services/matches"
import AlertIcon from "./icons/AlertIcon"
import RefreshIcon from "./icons/RefreshIcon"
import "../assets/animations/rotate.css"

export default function Header() {
  const { isFetching, error, refetch } = useGetMatchesQuery({})

  const errorMessage = "Ошибка: не удалось загрузить информацию"

  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="text-[32px] font-sans">Match Tracker</h1>
      <div className="flex flex-row gap-3">

        {error && 
          <div className="flex flex-row gap-1 p-4 items-center bg-[#0F1318]">
            <AlertIcon /> 
            <p className="rounded-sm text-[18px]">{errorMessage}</p>
          </div>
        }

        <div 
          className="hover:bg-[#A01131] w-min p-4 text-[18px] rounded-sm bg-[#EB0237] select-none cursor-pointer flex flex-row items-center gap-2.5" 
          onClick={() => refetch()}
        >
          Обновить
          <div className={`${isFetching && "rotate"}`}>
            <RefreshIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
