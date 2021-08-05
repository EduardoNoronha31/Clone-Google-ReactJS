import './Header.css';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-10">
          <div className="headerLeft">
            <p>Sobre</p>
            <p>Loja</p>
          </div>
        </div>
        <div className="col-2">
          <div className="headerRight">
            <p>Gmail</p>
            <p>Imagens</p>
            <p><AppsIcon /></p>
            <p><AccountCircleIcon /></p>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Header;
