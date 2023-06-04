import { AppRouter } from './AppRouter';
import { RicknMortyProvider } from './context/RicknMortyProvider';

function App() {
  return (
    <RicknMortyProvider>
      <AppRouter />
    </RicknMortyProvider>
  );
}

export default App;
