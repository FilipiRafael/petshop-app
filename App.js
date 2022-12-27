import React from 'react';

import AppRoutes from './src/Routes';
import TelaPadrao from './src/Components/TelaPadrao';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  return (
    <TelaPadrao>
      <AppRoutes />
    </TelaPadrao>
  );
}
