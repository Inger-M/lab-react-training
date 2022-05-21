const Greetings = (props) => {
    let greeting;
    switch (props.lang) {
        case 'de':
            greeting = 'Hallo '
            break;
        case 'fr':
            greeting = 'Bounjour '
            break;
        case 'en':
            greeting = 'Hello '
            break;
        case 'es':
            greeting = 'Hola '
            break;    
    }
    return (
      <div className= "greeting">
        <p>{greeting}{props.children}
        </p>
      </div>
    );
  };
  export default Greetings;