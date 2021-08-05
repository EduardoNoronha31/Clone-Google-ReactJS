import './Body.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

function Body() {
    return (
        <div className="Body">
            <div className="bodyLogo">
                <img src="https://i.imgur.com/ALBe18l.jpeg"/>
            </div>
            <div className="bodyInput">
                <SearchIcon />
                <input placeholder="Pesquise no Google ou Digite um URL"/>
                <MicIcon />
            </div>

        </div>
    );
}

export default Body;