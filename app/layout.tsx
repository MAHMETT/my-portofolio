import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const quicksandFont = localFont({
    src: [
        {
            path: '../public/fonts/Quicksand-VariableFont_wght.ttf',
            style: 'normal',
        },
    ],
    variable: '--font-quicksand',
});

export const metadata: Metadata = {
    title: 'Portofolio - Mahmett',
    description: '',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`font-quicksand antialiased leading-8 overflow-x-hidden`}
            >
                {children}
            </body>
        </html>
    );
}
