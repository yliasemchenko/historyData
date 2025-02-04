import './App.css';
import  HistoryDate from './components/historyDate/index';
import data from './data.json'

const App: React.FC = () => {
    return (
        <>
            <HistoryDate data={data} lenght={data.length - 1} dataAtrr={1} current={1}/>
            <HistoryDate data={data} lenght={data.length} dataAtrr={1} current={1}/>
            <HistoryDate data={data} lenght={data.length - 2} dataAtrr={1} current={1}/>
        </>
    );
}

export default App;

