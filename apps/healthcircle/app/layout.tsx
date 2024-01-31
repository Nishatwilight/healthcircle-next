import './global.css';
import {Providers} from "./providers";


export const metadata = {
  title: 'Welcome to healthcircle',
  description: 'Generated by create-nx-workspace',
};


export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='light'>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
