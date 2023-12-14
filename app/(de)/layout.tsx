import Footer from '@/components/Footer';
import { Language } from '@/types/Language';

export default function DeLayout({ children }: { children: React.ReactNode }) {
   return (
      <div lang='de'>
         {children}
         <Footer lang={Language.DE} />
      </div>
   );
}
