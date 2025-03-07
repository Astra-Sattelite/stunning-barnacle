import Header from './components/Header'
import { useGetMatchesQuery } from './services/matches'
import MatchCard from './components/MatchCard';

export default function App() {
  const { data, isFetching } = useGetMatchesQuery({})

  return (
    <div className="bg-[#06080C] min-h-screen w-screen text-white text-2xl py-14 px-10 flex flex-col gap-14">
      <Header />
      {isFetching 
        ? <div>Загрузка. . .</div> 
        : <div className="flex flex-col">
            <div className="flex flex-col flex-wrap gap-2">
                {data?.data.matches.map((match, i) => 
                  <MatchCard match={match} key={match.time + i}/>
                )}
            </div>
          </div>
      }
    </div>
  )
}