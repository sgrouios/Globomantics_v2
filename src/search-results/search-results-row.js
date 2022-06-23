import { useNavigate } from 'react-router-dom';
import './search-results.css';

const SearchResultsRow = ({ house }) => {
    const navigate = useNavigate();
    const setActive = (e) => {
        navigate(`/house/${house.id}`)
    };

    return (
        <tr onClick={setActive} className="pointer">
            <td>{house.address}</td>
            <td>${house.price}</td>
            <td>{house.likes}</td>
        </tr>
    );
}

export default SearchResultsRow;