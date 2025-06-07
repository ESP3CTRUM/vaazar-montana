import { aboreto } from '@/app/fonts';
import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Vaazar de la Montaña',
    description: 'Sitio Eco-Artístico en jarabacoa',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="rfj11yx" className={`${aboreto.variable}`}>
            <body className="" data-oid="agng9g3">
                {children}
            </body>
        </html>
    );
}
