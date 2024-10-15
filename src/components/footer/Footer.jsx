import Logo from '../../assets/logo-cafe.png'
import { ConatinerLogoFooter, ContainerFooter } from './styler'

function Footer() {

  return (
    <>
    <ContainerFooter>
      <ConatinerLogoFooter>
        <a href="#">
          <img src={Logo} alt="Logo" /> Cafeteria do Dev
        </a>
        <p>Desenvolvido por @LaryssaDev.</p>
      </ConatinerLogoFooter>
    </ContainerFooter>

    </>
  )
}

export default Footer
