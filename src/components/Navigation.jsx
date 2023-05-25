

const Navigation = () => (
    <nav className="flex items-center">
        <img src="/images/logopeso.png" className="w-20 cursor-pointer" />
        <ul className="flex-1 text-center">
            <li className="list-none inline-block px-5 ">
                <a href="/" className="no-underline text-white px-2hover:text-yellow-300">
                &#9750; Home</a>
            </li>
            <li className="list-none inline-block px-5">
                <a href="/about" className="no-underline text-white px-2 hover:text-yellow-300">
                    &#8505; About
                </a>
            </li>
            <li className="list-none inline-block px-5">
                <a href="/services" className="no-underline text-white px-2 hover:text-yellow-300">
                    &#9874; Services
                </a>
            </li>
            <li className="list-none inline-block px-5">
                <a href="/contact" className="no-underline text-white px-2 hover:text-yellow-300">
                    &#9743; Contact
                </a>
            </li>
        </ul>
        <img src="/images/logo2.png" className="w-20 cursor-pointer" />
    </nav>
);

export default Navigation;