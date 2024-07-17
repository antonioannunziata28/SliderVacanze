import './App.css';
import Title from "./Components/Title";
import Holiday from "./Components/Holiday";

function App() {
  return (
    <section className='section-center'>
      <div className='container'>
        <Title text="Le nostre vacanze" />
        <Holiday />
      </div>
    </section>
  );
}

export default App;
