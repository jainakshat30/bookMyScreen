import mainLogo from "../../assets/main-icon.png"
import { FaSearch } from "react-icons/fa"
import { useLocation } from "../../context/LocationContext"
import map from "../../assets/pin.gif"

const Header = () => {

    const {location, loading, error} = useLocation()

  return (
    <div className = "w-full text-sm bg-white">
        <div className = "px-4 md:px-8">
            <div className = "max-w-screen-xl mx-auto flex flex-wrap justify-between items-center gap-x-4 gap-y-3 py-3">
                <img src={mainLogo} alt="Logo" className="h-7 md:h-8 object-contain cursor-pointer"/>

                {/* Search drops to its own full-width row on phones */}
                <div className = "relative order-last basis-full md:order-none md:basis-auto md:mr-auto">
                    <input type="text"
                        placeholder="Search for Movies, Events, Plays, Sports and Activities"
                        className="border border-gray-300 rounded pl-4 pr-8 py-1.5 w-full md:w-[300px] lg:w-[400px] text-sm outline-none"
                    />
                    <FaSearch className="absolute right-2 top-2.5 text-gray-500" />
                </div>
                {/* Right Part */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    <div className="flex items-center gap-1 text-sm font-medium cursor-pointer whitespace-nowrap">
                        {location && <img src={map} alt="" className="h-5 w-5 shrink-0 object-contain" />}
                        {location && <span>{location} &nbsp; ▼</span>}
                    </div>
                    <button className="bg-[#f84464] cursor-pointer text-white px-4 py-1.5 rounded text-sm font-medium whitespace-nowrap">
                        Sign in
                    </button>
                </div>
            </div>
        </div>
        {/* Bottom Navbar */}
        <div className="bg-[#f2f2f2] px-4 md:px-8">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-6 py-2 text-gray-700">
                <div className="flex items-center space-x-6 font-medium whitespace-nowrap overflow-x-auto scrollbar-hide">
                    <span className="cursor-pointer hover:text-red-500">Movies</span>
                    <span className="cursor-pointer hover:text-red-500">Stream</span>
                    <span className="cursor-pointer hover:text-red-500">Events</span>
                    <span className="cursor-pointer hover:text-red-500">Plays</span>
                    <span className="cursor-pointer hover:text-red-500">Sports</span>
                    <span className="cursor-pointer hover:text-red-500">Activities</span>
                </div>

                <div className="hidden lg:flex items-center space-x-6 text-sm whitespace-nowrap">
                    <span className="cursor-pointer hover:underline">ListYourShow</span>
                    <span className="cursor-pointer hover:underline">Corporates</span>
                    <span className="cursor-pointer hover:underline">Offers</span>
                    <span className="cursor-pointer hover:underline">Gift Cards</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header