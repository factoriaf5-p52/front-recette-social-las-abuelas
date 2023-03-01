import { Container } from "../../Global.style"
import imageSalad from '../../assets/images/salad.png';
import imageBurger from '../../assets/images/burger.png';
import iconoStatistic from '../../assets/icons/statistic-pie-chart-red.png';
import { DivStatistic, StyleIconoStatistic, StyleImageSalad } from "./statisticPage.style";

type Props = {}

const StatisticPage = (props: Props) => {
  return (
    <Container>
        <DivStatistic>
        <StyleIconoStatistic src={iconoStatistic} alt="icono statistic" />
        <h1>Statistic</h1>
        </DivStatistic>
        <StyleImageSalad src={imageSalad} alt="image salad" />
        <StyleImageSalad src={imageBurger} alt="image burger" />
    </Container>
  )
}

export default StatisticPage