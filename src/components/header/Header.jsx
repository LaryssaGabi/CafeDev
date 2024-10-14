import { Button, Cabecalho, ContainerCabecalho, ContainerList, ContainerLogo } from "./styler"
import Logo from '../../assets/logo-cafe.png'
import Icon from '../../assets/icon-coffe-button.png'

function Header() {

  return (
    <>
      <Cabecalho>

        <ContainerCabecalho>
          <ContainerLogo>
            <a href="#">
              <img src={Logo} alt="Logo" /> Cafeteria Dev
            </a>
          </ContainerLogo>

          <ContainerList>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Sobre</a></li>
            </ul>
            <Button>Pedido
              <img src={Icon} alt="Logo" />
            </Button>
          </ContainerList>
        </ContainerCabecalho>
      </Cabecalho>
    </>
  )
}

export default Header
