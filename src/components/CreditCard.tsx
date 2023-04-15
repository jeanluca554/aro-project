import Cards from "react-credit-cards";

type InputProps = {
  holder: string;
  number: string;
  expirationDate: string;
  securityCode: string;
  focus: any;
}
export function CreditCard(props: InputProps) {


  return (
    <>
      <Cards
        cvc={props.securityCode}
        expiry={props.expirationDate}
        // focused={'cvc'}
        focused={(props.focus === 'creditCardSecurityCode') ? 'cvc' : 'name'}
        name={props.holder}
        number={props.number}
        locale={{ valid: 'Válido até' }}
        placeholders={{ name: 'SEU NOME AQUI' }}

      />
    </>
  );
}

