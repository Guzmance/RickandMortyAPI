import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { RicknMortyContext } from '../context/RicknMortyContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Navigation = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(RicknMortyContext);

  const navigate = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();

    if (valueSearch.trim() === '') {
      toast.error('You must enter a Name in the search field.');
      return;
    }

    navigate('/search', {
      state: valueSearch,
    });
    onResetForm();
  };

  return (
    <>
      <header className="container">
        <Link to="/" className="logo">
          <img
            src="/src/assets/logo .png"
            alt="Logo RickandMorty"
            style={{ width: '400px', height: '120px' }}
          />
        </Link>

        <form onSubmit={onSearchSubmit}>
          <div className="form-group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="icon-search"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Search a Character by Name"
            />
          </div>

          <button className="btn-search">Search</button>
        </form>
      </header>

      <Outlet />

      <ToastContainer />
    </>
  );
};

export default Navigation;
