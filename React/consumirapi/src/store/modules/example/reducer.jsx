import * as types from "../types";

const inicitalStore = {
  botaoClicado: false,
};

export default function exampleReducer(state = inicitalStore, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log("Success");
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log("Erro");
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log("Requisição");
      return state;
    }
    default: {
      return state;
    }
  }
}
