import { Outlet } from 'react-router-dom';
import { useModal } from './app/context/modal-provider';
import CardEmission from './features/emission/components/card-emission';

const Iframe = () => {
  const { isModalOpen } = useModal();

  return (
    <main className="w-full min-h-screen flex flex-col">
      {/* <TopHeader /> */}
      {/* <Header /> */}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* <Footer /> */}

      {isModalOpen && <CardEmission />}
    </main>
  );
};

export default Iframe;
