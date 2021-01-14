import './global.scss';

// This default export is required in a new `pages/_app.js` file.
const App: React.FC<any> = ({ Component, pageProps }: any) => {
  return <Component {...pageProps} />;
};

export default App;
