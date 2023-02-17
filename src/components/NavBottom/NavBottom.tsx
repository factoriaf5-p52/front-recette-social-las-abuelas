import { Link } from 'react-router-dom'
import { NavIcon } from '../NavIcon/NavIcon'
import Home from '../../assets/icons/home-gray.png'
import Stats from '../../assets/icons/statistic-gray.png'
import Recipes from '../../assets/icons/recipes-gray.png'

type Props = {}

const NavBottom = (props: Props) => {
  return (
    <div>
     <Link to="/home-social"><NavIcon
img={Home}
text='home'
/></Link>
<Link to="/statistic"><NavIcon
img={Stats}
text='Statistic' 
/></Link>
<Link to="/recipes"><NavIcon 
img={Recipes}
text='Recipes'/></Link> 
      
    </div>
  )
}

export default NavBottom

