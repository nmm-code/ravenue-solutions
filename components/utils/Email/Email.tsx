interface EmailProps {
   firstname?: string;
   lastname?: string;
   email?: string;
   subject?: string;
   phone?: string;
   company?: string;
   product?: string;
   message?: string;
}

export function Email(props: EmailProps) {
   let message = props.subject + ',\n' + '\n' + props.message;
   return (
      <>
         <div
            style={{
               width: '100%',
               margin: '0 auto',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               backgroundColor: '#f2f2f2',
            }}
         >
            <div
               style={{
                  margin: '0 auto',
                  padding: '20px',
                  width: '100%',
                  fontFamily: 'Montserrat, sans-serif',
               }}
            >
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'row',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                  }}
               >
                  <h1
                     style={{
                        color: '#333',
                        fontSize: '28px',
                        marginBottom: '20px',
                     }}
                  >
                     Ravenue Solutions Kontaktformular
                  </h1>
               </div>

               <table
                  style={{
                     marginBottom: '10px',
                     fontSize: '16px',
                     display: 'grid',
                     gridTemplateColumns: '1fr 2fr',
                     gridGap: '10px',
                  }}
               >
                  <tbody>
                     <tr>
                        <td>Vorname:</td>
                        <td>{props.firstname}</td>
                     </tr>
                     <tr>
                        <td>Nachname:</td>
                        <td>{props.lastname}</td>
                     </tr>
                     <tr>
                        <td>Email:</td>
                        <td>{props.email}</td>
                     </tr>
                     <tr>
                        <td>Telefonnummer:</td>
                        <td>{props.phone}</td>
                     </tr>
                     <tr>
                        <td>Unternehmen:</td>
                        <td>{props.company}</td>
                     </tr>
                     <tr>
                        <td>Produkt:</td>
                        <td>{props.product}</td>
                     </tr>
                  </tbody>
               </table>

               <textarea
                  readOnly={true}
                  style={{
                     resize: 'none',
                     maxWidth: '100%',
                     width: '95%',
                     height: '200px',
                     fontSize: '16px',
                     padding: '10px',
                     fontFamily: 'Montserrat, sans-serif',
                  }}
                  value={message}
               ></textarea>
            </div>
         </div>
      </>
   );
}
