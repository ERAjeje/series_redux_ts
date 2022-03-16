import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Card from './app/components/Card';
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
  const handleAdd = () => dispatch(addCategory({
    data: {
      title: 'Terror',
      active: false
    }
  }))


  return (
    <div className="App">
      {console.log(categories)}
      <List>
        {
          series.map((item: SerieType) => <Card><Serie title={item.title} categories={item.categories} watched={item.whatched} /></Card>)
        }
      </List>
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
