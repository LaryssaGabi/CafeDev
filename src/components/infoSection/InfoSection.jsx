import Americano from '../../assets/american.png'
import Expresso from '../../assets/cafe-expresso.png'
import Cappuccino from '../../assets/capuccino.png'
import { CardImg, ContainerCard, ContainerSection, ContainerServiceCard, ContainerText, Section } from './styler'

function InfoSection() {

  return (
    <>
      <Section>
        <ContainerSection data-aos="fade-up" data-aos-delay="100">
          <h1>O café feito para você</h1>
        </ContainerSection>

        <ContainerCard>
          <ContainerServiceCard data-aos="fade-up" data-aos-delay="350">
            <CardImg>
              <img src={Americano} />
            </CardImg>

            <ContainerText>
              <h1>Americano</h1>
              <p>Um café tradicional, feito com o melhor café do mundo.</p>
            </ContainerText>

          </ContainerServiceCard>

          <ContainerServiceCard data-aos="fade-up" data-aos-delay="200">
            <CardImg>
              <img src={Expresso} />
            </CardImg>

            <ContainerText>
              <h1>Expresso</h1>
              <p>Um café forte e intenso, feito com o melhor café do mundo.</p>
            </ContainerText>

          </ContainerServiceCard>


          <ContainerServiceCard data-aos="fade-up" data-aos-delay="500">
            <CardImg>
              <img src={Cappuccino} />
            </CardImg>

            <ContainerText>
              <h1>Cappuccino</h1>
              <p>Um café tradicional, feito com o melhor café do mundo.</p>
            </ContainerText>

          </ContainerServiceCard>
        </ContainerCard>

      </Section >

    </>
  )
}

export default InfoSection
