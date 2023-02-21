import image from '../../assets/images/vegetables-and-salmon.png';

import { Container, StyleH1, StyleImage } from './homeSocialPage.style';



type Props = {}

const SocialPage = (props: Props) => {
  return (
    <>
      <div>
        <StyleImage src={image} alt="imagen vegetables-and-salmon" />
      </div>
        <StyleH1>Let’s get cooking!</StyleH1>
        <Container>
        <h4>New recipes this week:</h4>
        </Container>
    </> 
  )
}

export default SocialPage 