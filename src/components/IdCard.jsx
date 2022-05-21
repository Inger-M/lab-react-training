const IdCard = (props) => {
  return (
    <div>
        <p>Last Name:{props.lastName}</p>
        <p>First Name:{props.firstName}</p>
        <p>Gender:{props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth:{props.birth.toLocaleDateString()}</p>
        <img src={props.picture} alt=""/>
    </div>
  );
};
export default IdCard;