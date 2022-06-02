export const type = "findCurrentItem";

const findCurrentItem = (id) => {
  return {
    type,
    payload: id,
  };
};

export default findCurrentItem;

// accion para cuando eliges uno de los productos y te manda a otra pantalla adicional
// se almacena el item actual en el estado de la aplicacion y se guarda para poderlo mostrar en la otra pantalla -> esto se conoce como actionCreator
