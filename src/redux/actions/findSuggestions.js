//esto nos sirve para el autocompletado
export const type = "findSuggestions";

const findSuggestions = (text) => {
  return {
    type,
    payload: text,
  };
};

export default findSuggestions;
