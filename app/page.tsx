import Footer from '@/components/Footer';
import Main from '@/components/Main';
import { Language } from '@/types/Language';

/**
 * Die Root Komponente
 */
export default function Home() {
   return (
      <>
         <Main lang={Language.DE}></Main>
         <Footer lang={Language.DE}></Footer>
      </>
   );
}
