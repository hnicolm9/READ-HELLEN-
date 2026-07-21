import './app.css';
import Tarjeta from './components/Tarjeta';
import header from './components/header';
import footer from './components/footer';


function app (){
  return(
        <div >
          <header/>
            <main>
            <Tarjeta />
            <Tarjeta />
            <Tarjeta />
            </main>
            <footer/>
        </div>
    );
};
 
export default app;