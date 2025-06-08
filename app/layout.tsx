import { aboreto } from '@/app/fonts';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Vaazar de la Montaña',
    description: 'Sitio Eco-Artístico en jarabacoa',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${aboreto.variable}`} data-oid="2h8y6:z">
            <body className="" data-oid="rvvpr-i">
                {children}
            </body>
        </html>
    );
}
