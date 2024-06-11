import { useSelector } from 'react-redux';
import './homepage.css';
import Cards from '../components/cards/Cards';
import Header from '../components/Header/Header';

const HomePage = () => {

    const data = useSelector(state => state.data.data);
    console.log(data);

    return (
        <div className="homepage">
            <Header />
            <Cards />
        </div>
    )
}

export default HomePage;