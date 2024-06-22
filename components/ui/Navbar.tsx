// components/ui/Navbar.tsx

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link href="/find-a-guide" legacyBehavior>
                        <a className="text-white text-lg font-semibold hover:text-gray-400">Find a Guide Now</a>
                    </Link>
                </div>
                <div className="flex space-x-8">
                    <Link href="#about" legacyBehavior>
                        <a className="text-white text-lg hover:text-gray-400">About Us</a>
                    </Link>
                    <Link href="#offer" legacyBehavior>
                        <a className="text-white text-lg hover:text-gray-400">What We Offer</a>
                    </Link>
                    <Link href="#contact" legacyBehavior>
                        <a className="text-white text-lg hover:text-gray-400">Contact Us</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
