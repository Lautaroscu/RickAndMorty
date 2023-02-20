
function getParam(value) {
  const url = new URL(`https://rickandmortyapi.com/api/character?page=${value}`)
  const param = new URLSearchParams(url.searchParams)
  const page = param.get('page')
  console.log(page)
   return page
}
export function Pagination({handlePage , CharKey , info}) {
    const arrayOfPages = [] 
  const {count , pages , next, prev} = info
 console.log(pages)
    for(let i = 1; i <= pages; i++) {
        arrayOfPages.push(i)
        
    }
   
    return (
        <nav>
   <ul className="pagination">
     {arrayOfPages.slice(0, 10).map((number => (
     
      <li key={Math.random(Math.floor(0.5 * 10) +1)} >
        <button onClick={() => handlePage(getParam(number))} >
          {number}
        </button>
       
      </li>) 
    ))}
   
  </ul>
</nav>

    )
}