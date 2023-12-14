import Footer from '@/components/Footer';
import { Language } from '@/types/Language';

export default function EnLayout({ children }: { children: React.ReactNode }) {
   return (
      <div lang='en'>
         {children}
         <Footer lang={Language.EN} />
      </div>
   );
}
