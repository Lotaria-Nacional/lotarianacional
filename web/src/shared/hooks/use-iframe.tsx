import { useLocation } from 'react-router-dom';

export default function useIframe() {
  const location = useLocation();
  const basePath = location.pathname.startsWith('/iframe') ? '/iframe' : '';
  return { basePath };
}
