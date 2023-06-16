import Header from "./Tarjeta/Header";
import "./App.css";
import Tarjeta from "./Descripccion/Descripccion";
function App() {
  return (
    <>
      <section className="body">
        <Header header="TOP 3 NBA PLAYER OF ALL TIME" />
        <div className="player">
          <Tarjeta
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1Wk_LTA58mWsuPT7i8HJOSnXoaPSwJ8D7I06Z_JOwCkoTaQG4usgB_k8diptn3r3jKk&usqp=CAU/200/200"
            nombre="Michael Jordan"
            Logros="Es un exjugador de baloncesto estadounidense. Es ampliamente considerado el mejor jugador de baloncesto de todos los tiempos. Ganó seis campeonatos y fue el MVP de las Finales 6 veces. Jugó para los Chicago Bulls y los Washington Wizards."
          />
          <Tarjeta
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvq9s5S01jDuyXuxUgsuJm8Px8yvohqUswmw&usqp=CAU/200/200"
            nombre=" Kobe Bryant"
            Logros=" Icono del baloncesto, campeón y MVP, con un estilo de juego inigualable y una ética de trabajo implacable. Inspiró a generaciones con su mentalidad ganadora. Su legado es eterno. Descansa en paz, Kobe."
          />

          <Tarjeta
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXDYUTKgEF4n0-QdwXFB2udmmbrmaSn5Ekmg&usqp=CAU/200/200"
            nombre="Lebron James"
            Logros=" Leyenda del baloncesto, múltiple campeón y MVP, con un juego dominante y un liderazgo incomparable. Fuera de la cancha, compromiso social y un legado de grandeza."
          />
        </div>
      </section>
    </>
  );
}

export default App;
