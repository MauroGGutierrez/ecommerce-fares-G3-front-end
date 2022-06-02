// va a encontrar resultados y almacenarlos en results . esto nos sirve para el search box
export const type = "findResults";

const findResults = (text) => {
  return {
    type,
    payload: text,
  };
};

export default findResults;
