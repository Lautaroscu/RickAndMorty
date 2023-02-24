
export function Pagination({prevPage , nextPage , CharKey , info , characters , currentPage}) {
   
    return (
        <nav>
   <ul className="pagination">
     
        <li key={CharKey}>
        <button onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
         <button disabled> Actual Page :  {currentPage}</button> 
      <button onClick={nextPage} disabled={characters.length < 20}>Next Page</button>
     

        </li>
   
  </ul>
</nav>

    )
}