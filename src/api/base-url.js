export default function getBaseUrl() {
  const development = window.location.hostname === 'localhost';
  return development ? 'http://localhost:3001/' : '/';
}
