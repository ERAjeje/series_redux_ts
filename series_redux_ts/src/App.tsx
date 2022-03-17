import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Button from './app/components/Button';
import Card from './app/components/Card';
import Input from './app/components/Input';
import List from './app/components/List';
import Pill from './app/components/Pill';
import Serie from './app/components/Serie';
import { addCategory, Category } from './app/features/category/categorySlice';
import { addSerie, Serie as SerieType } from './app/features/serie/serieSlice';
import { RootState } from './app/store';

function App() {
  const series = useSelector((state: RootState) => state.series.series);
  const categories = useSelector((state: RootState) => state.categories.categories)
  const dispatch = useDispatch();
  let serie = {
    title: '',
    watched: false,
    categories: Array<String>()
  }
  const handleAddSerie = () => {
    const title = (document.getElementById('title') as HTMLInputElement).value
    serie.title = title;
    dispatch(addSerie({
      data: serie
    }))
  }

  const handleAddCategory = () => {
    const aux = (document.getElementById('category') as HTMLInputElement).value.split(/,?\s+/g);
    (document.getElementById('category') as HTMLInputElement).value = '';
    const data = aux.map(item => ({ title: item }));
    dispatch(addCategory({
      data: data
    }))
  }

  function handleClickCategory(title: String): void {
    const index = serie.categories.findIndex((item: String) => item === title);
    console.log(index)
    index === -1
      ? serie.categories.push(title)
      : serie.categories = [...serie.categories.filter(item => item !== title)]
    console.log(serie.categories)
  }


  return (
    <div className="App">
      <div className='Insert'>
        <Input type='text' id='title' placeholder='Título da Série' />
        <List height='30vh' justify='top' align='start'>
          {
            categories.map((item: Category) => <Pill click={handleClickCategory} active={false} >{item.title}</Pill>)
          }
        </List>
        <Button onClick={handleAddSerie}>Salvar Série</Button>
        <div>
          <h4>Adicionar novas categorias</h4>
          <Input type='text' id='category' placeholder='Adicione as categorias separadas por vírgula ou espaço' />
          <Button onClick={handleAddCategory}>Adicionar Categoria</Button>
        </div>
      </div>
      <div className='List'>
        <List>
          {
            series.map((item: SerieType) => <Card>
              <Serie title={item.title} categories={item.categories} watched={item.watched} />
            </Card>)
          }
        </List>
      </div>
    </div>
  );
}

export default App;
