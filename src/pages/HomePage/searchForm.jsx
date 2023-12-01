export function SearchForm ({ HandleSubmit }) {
  return (
    <form className='form' onSubmit={HandleSubmit}>
      <div className='inputs'>
        <div className='input-name'>
          <label>Search By Name</label>
          <input placeholder='Rick , Morty ....' type='text' name='name' />
        </div>

        <div className='inputStatus'>
          <label>Search By Status</label>
          <input type='text' placeholder='Alive , Dead...' name='statusChar' />
        </div>
        <button type='submit'>Send</button>
      </div>

    </form>
  )
}
