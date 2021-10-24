import * as C from "./App.style"
import {useState,useEffect} from "react"
import {ListPoke} from "./components/ListPoke"
import {pokeInfo} from "./types/pokeInfo"



function App() {
  // Estados
  const [poke,setPoke]=useState<pokeInfo[]>([])
  const [page,setPage]=useState({limit:40,offset:0,pageNumber:1})

  const req= async (action:string)=>{
    setPoke([])
    let btnAction:number=action=="next"? 100:-100
    let pageNumber:number=action=="next"?1:-1

    const response= await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${page.limit}&offset=${page.offset}`)
    const valores= await response.json()
    setPage(prev=>({limit:prev.limit,
                    offset:prev.offset+btnAction,
                    pageNumber:prev.pageNumber+pageNumber}))
    
    await valores.results.map((poke:{name:string,url:string}) =>{
      setPoke(prev=>[...prev,{
            name:poke.name,
            url:poke.url
          }])
    })
  }
 
  useEffect(()=>{
    req("")
  },[])


  return (
    <C.Container>
      <C.Area>
        <header>
          <button onClick={()=>page.limit>0 && req("prev")} className="btn">Prev</button>
          <h1>{page.pageNumber}</h1>
          <button onClick={()=>page.limit<1000 && req("next")} className="btn">Next</button>
        </header>
        <main>
        {poke?.map(pokemon=>{
            return <ListPoke name={pokemon.name} url={pokemon.url}/>
        })}
        </main>
      </C.Area>
    </C.Container>
  )
}

export default App;
