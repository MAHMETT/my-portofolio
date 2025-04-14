'use client';
import About from './components/sections/About';
import Header from './components/sections/Header';
import Navbar from './components/sections/Navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
        </>
    );
}
