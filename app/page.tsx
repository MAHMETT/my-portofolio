'use client';
import About from './components/sections/About';
import Header from './components/sections/Header';
import Navbar from './components/sections/Navbar';
import Services from './components/sections/Services';
import Work from './components/sections/Work';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Services />
            <Work />
        </>
    );
}
