import image from '../../assets/images/vegetables-and-salmon.png';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import TypeRecipeCard from '../../components/TypeRecipeCard/TypeRecipeCard';
import { ContainerHome, ContainerTypeRecipeCard, H4Home, StyleH1, StyleImage } from './homeSocialPage.style';
import GlutenImage from '../../assets/icons/gluten-free-green.png'
import VeganImage from '../../assets/icons/vegetarian-green.png'
import BreakfastImage from '../../assets/icons/breakfast-green.png'
import DinnerImage from '../../assets/icons/dinner-green.png'

type Props = {}

const SocialPage = (props: Props) => {
  return (
    <>
      <div>
        <StyleImage src={image} alt="imagen vegetables-and-salmon" />
      </div>
      
        <StyleH1>Let’s get cooking!</StyleH1>
        <H4Home>New recipes this week:</H4Home>
        <ContainerHome>
        <RecipeCard recipeName={'Vegan brownies'} by={'Hel Aige'} views={100} califications={3.5}/>
        <RecipeCard recipeName={'Chocolate cake'} by={'Fabio'} views={50} califications={4.9}/>
        <RecipeCard recipeName={'Spicy guacamole'} by={'Daniel Useche'} views={35} califications={4.2}/>
        <RecipeCard recipeName={'Summer salad'} by={'Rosie2345'} views={12} califications={2.1}/>
        </ContainerHome>
        <H4Home>What type of recipe are you looking for?</H4Home>
        <ContainerTypeRecipeCard>
        <TypeRecipeCard src={VeganImage} title={'Vegan'}/>
        <TypeRecipeCard src={GlutenImage} title={'Gluten free'}/>
        <TypeRecipeCard src={BreakfastImage} title={'Breakfast'}/>
        <TypeRecipeCard src={DinnerImage} title={'Dinner'}/>
          </ContainerTypeRecipeCard>  
        
         </> 
  )
}

export default SocialPage 