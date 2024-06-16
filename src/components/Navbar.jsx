import { HeartIcon } from '@heroicons/react/24/outline'

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar__logo ">Logo😍</div>
        <input type="text" name="" id="" className="text-field " placeholder="search..." />
        <div className="navbar__result">Found x characters</div>
        <button className="heart">
              <HeartIcon className='icon'/>
              <span className='badge'>4</span>
        </button>
    </nav>
  )
}

export default Navbar;


