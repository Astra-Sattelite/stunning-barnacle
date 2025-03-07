import { Match } from "../types"
import CommandMockIcon from "./icons/CommandMockIcon"

type MatchProps = {
  match: Match
}

export default function MatchCard(props: MatchProps) {

  function getBgByStatus(status: string) {
    switch(status) {
      case "Finished": return "#EB0237"
      case "Ongoing": return "#43AD28"
      case "Scheduled": return "#EB6402"

      default: return "#fff"
    }
  }

  return (
    <div className="flex flex-col rounded-lg bg-[#0B0E12] p-4 items-center justify-center">
      <div className="flex flex-row gap-1 items-center justify-between w-full">
        <div className="flex flex-row gap-1 items-center">
          <CommandMockIcon />
          <h3>{props.match.homeTeam.name}</h3>
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className="p-2 rounded-2xl text-[20px] font-bold whitespace-pre-wrap">{`${props.match.homeScore} : ${props.match.awayScore}`}</div>
          <div 
            className="py-[6px] px-0.5 rounded-sm"
            style={{ backgroundColor: getBgByStatus(props.match.status) }}
          >
            {props.match.status}
          </div>
        </div>

        <div className="flex flex-row gap-1 items-center">
          <CommandMockIcon />
          <h3>{props.match.awayTeam.name}</h3>
        </div>
      </div>
    </div>
  )
}
