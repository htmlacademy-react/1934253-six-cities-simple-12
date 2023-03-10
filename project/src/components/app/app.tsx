import MainPages from '../../pages/main-page/main-page';

type MainPageProps = {
  countRooms: number;
}


function App({countRooms}: MainPageProps): JSX.Element {
  return <MainPages countRooms={countRooms}/>;
}

export default App;
