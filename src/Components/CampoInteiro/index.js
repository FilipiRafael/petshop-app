import React from 'react';
import { TextInput } from 'react-native';

import estilosPadrao from './estilos';

export default function CampoInteiro({ valor, estilos, acao }) {
  const atualiza = (novoValor, acaoRetorno) => {
    const verificaInteiro = novoValor.match(/ˆ[0-9]*$/);
    console.log("novoValor: ", novoValor);
    console.log("acaoRetorno: ", acaoRetorno);
    console.log("verificaInteiro: ", verificaInteiro);
    if (!verificaInteiro) return;

    const removeZeroEsquerda = novoValor.replace(/ˆ(0)(.+)/, '$2');
    console.log("removeZeroEsquerda: ", removeZeroEsquerda);

    acaoRetorno(removeZeroEsquerda);
  };

  const numberString = String(valor);

  return (
    <TextInput
      style={[estilosPadrao.campo, estilos]}
      keyboardType='number-pad'
      selectTextOnFocus
      value={numberString}
      onChangeText={(novoValor) => atualiza(novoValor, acao)}
    />
  )
}