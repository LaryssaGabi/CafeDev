import { ContainerHome, ContainerImg, ContainerButton, ContainerGrid, ContainerPrincipal, ContainerTextHome } from "./styler"
import Coffee from '../../assets/cafe-2.png'

function Info() {

  return (
    <>
      <ContainerPrincipal>
        <ContainerHome>
          <ContainerGrid>

            <ContainerTextHome>
              <h1>Nós servimos o
                <span> Café </span>
                mais rico da cidade.
              </h1>
              <ContainerButton>
                <button>Café e Código</button>
              </ContainerButton>
            </ContainerTextHome>

            <ContainerImg>
              <img src={Coffee} alt="Café" />
            </ContainerImg>

          </ContainerGrid>
        </ContainerHome>

      </ContainerPrincipal>
    </>
  )
}

export default Info
