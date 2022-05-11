import './styles/global.scss';

import Header from './components/Header';
import FeaturedMovie from './components/FeaturedMovie';
import Lists from './components/Lists';

export default function App() {
  return (
    <>
      <Header />
      <FeaturedMovie />
      <Lists />
    </>
  );
}
