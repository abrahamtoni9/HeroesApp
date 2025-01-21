import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from '../hooks/useForms'
import queryString from 'query-string'
import { getHeroByName } from '../helpers';
import { HeroCard } from '../components'

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '', asc = '' } = queryString.parse(location.search);
  const heroes = getHeroByName(q);
  
  const showSearch = (q.length === 0);
  const showNoResults = (heroes.length === 0) && (q.length > 0);
  
  const {searchText, onInputChange} = useForm({
    searchText: ''
  })

  const onSearchSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;
    // console.log({searchText});
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text" 
              name="searchText" 
              autoComplete="off"
              placeholder="Search a hero"
              className="form-control" 
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            // (q === '') ? 
            // <div className="alert alert-info">
            //   Search a hero
            // </div>
            // :
            // (heroes.length === 0) ?
            // <div className="alert alert-danger">
            //   No hero with <b> { q } </b>
            // </div>
            // :
            // <div className="alert alert-success">
            //   Results for <b> { q } </b>
            // </div>

          }

          <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>
            Search a hero
          </div>
          
          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showNoResults ? '' : 'none' }}>
            No hero with <b> { q } </b>
          </div>

          {
            heroes.map( hero => ( 

              <HeroCard key={hero.id} {...hero}/>

            ) )
          }
        </div>
      </div>
    </>
  )
}

