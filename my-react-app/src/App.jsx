import NavigationBarComponent from './components/NavigationBarComponent.jsx';
import ProductListComponent from './components/ProductListComponents.jsx';
import UserPreferenceComponent from './components/UserPreferenceComponent.jsx';
import './App.css'

const App = () => {
    return (
        <div className='app-container'>
            <NavigationBarComponent/>
            <UserPreferenceComponent />
            <ProductListComponent />
        </div>
    );
};

export default App;
