import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { data } from './_testimonialsData'
import QuoteMarks from "../../../public/testimonials/quoteMarksMB.png";
import ContainerDestak from "../globalStyles/ContainerDestak";

export default function Testimonials() {
    const testimonialCards = data?.map(item => {
        return(
            <Card key={item.insta}>
                <ContainerDestak size='500px'>
                    <Testimonial>
                        <Image src={QuoteMarks} alt={`Depoimento aluna ${item.dra}`} width={80} height={80}/>
                        <Text>{item.text}</Text>
                        <div className='testimonial_person'>
                        <ImgDra src={item.img} alt={item.dra} />
                        <div>
                            <NameDra>{item.dra}</NameDra>
                            <Text>{item.insta}</Text>
                        </div>
                        </div>
                    </Testimonial>
                </ContainerDestak>
            </Card>
        )
    })

  return (
    <Container>
        {testimonialCards}
    </Container>
  )
}

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Card = styled.div`
   margin: 25px;
   min-height: 414px;
`

const Testimonial = styled.div`
    padding: 20px;
    min-height: 414px;

    .testimonial_person {
        display: flex;
        align-items: center;
        padding-top: 30px;
    }

`

const Text = styled.p`
    color: #fff;
    font-weight: 200;
`

const NameDra = styled(Text)`
    font-weight: 600;
`

const ImgDra = styled(Image)`
    width: 80px;
    height: 80px;
    margin-right: 30px;
`