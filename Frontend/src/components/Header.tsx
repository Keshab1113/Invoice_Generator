const Header = () => {
    return (
        <header className="bg-slate-800 text-white flex items-center justify-between px-14 h-[10vh]">
            <div className="flex items-center">
                <a href="/" className="flex items-center">
                    <img
                        src="https://levitation.in/wp-content/uploads/2023/12/Frame-39624.svg"
                        alt="Levitation Infotech Logo"
                        className="w-34 h-12"
                        width="141"
                        height="48"
                    />
                </a>
            </div>
            <button className="bg-[#2af62a] text-black font-medium py-2 px-4 rounded transition duration-300">
                Login
            </button>
        </header>
    );
};

export default Header;
