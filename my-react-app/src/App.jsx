import NavigationBarComponent from './components/NavigationBarComponent.jsx'
import ProductListComponent from './components/ProductListComponents.jsx'
import UserPreferenceComponent from './components/UserPreferenceComponent.jsx'
import TotalPriceComponent from './components/TotalPriceComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import './App.css'

const App = () => {
    return (
        <div className='app-container'>
            <NavigationBarComponent/>
            <UserPreferenceComponent />
            < TotalPriceComponent/>
            <ProductListComponent />
            <FooterComponent/>
        </div>
    );
};

export default App;
