export function SearchForm({setIsFilter , getFilters}) {


function HandleSubmit(e) {
    e.preventDefault()
    setIsFilter(true)
    const { name, statusChar } = Object.fromEntries(new FormData(e.target));
    getFilters(name , statusChar)
}

return (
    <form className="form" onSubmit={HandleSubmit}>
        <div className="inputs">
            <div className="input-name">
                <label >Search By Name</label>
                <input placeholder="Rick , Morty ...." type="text" name="name" />
            </div>

            <div className="inputStatus">
                <label>Search By Status</label>
                <input type="text" placeholder="Alive , Dead..." name="statusChar" />
            </div>
            <button type="submit">Send</button>
        </div>


    </form>
)

}