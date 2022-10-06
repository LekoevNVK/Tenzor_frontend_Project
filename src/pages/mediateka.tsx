import Header from './shared/header';
import Aside from './shared/aside';
import Footer from './shared/footer';
import { NavLink } from 'react-router-dom';

function Mediateka() {
    return (
        <div className="app">
			<Header/>
			<Aside />
            <div className="content">
                <h1 className="content__title page-title">Медиатека</h1>
				<div className="prevew-area">
					<div className="prevew-area__title-wrap">
						<h2 className="prevew-area__title page-title">Плейлисты</h2>
					</div>
					<div className="prevew-area__content">
						<NavLink to="/playlist" className="card" style={{textDecoration: 'none'}}>
							<img className="card__image" src="assets/images/tracks/training.jpg"/>
							<div className="card__title">Тренировки</div>
							<div className="card__subtitle">Автор: Random1</div>
						</NavLink>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/relax.jpg"/>
							<div className="card__title">Relax Music</div>
							<div className="card__subtitle">Автор: Random2</div>
						</div>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/classic.jpeg"/>
							<div className="card__title">Топ 200: Классика</div>
							<div className="card__subtitle">Автор: Clonify</div>
						</div>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/party.jpeg"/>
							<div className="card__title">Party Music</div>
							<div className="card__subtitle">Автор: Random3</div>
						</div>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/suicide_boys.jpeg"/>
							<div className="card__title">$uicideBoy$</div>
							<div className="card__subtitle">Автор: Random4</div>
						</div>
                        <div className="card">
							<img className="card__image" src="assets/images/tracks/ffdp.jpg"/>
							<div className="card__title">Got Your Six</div>
							<div className="card__subtitle">Автор: FFDP</div>
						</div>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/club.jpg"/>
							<div className="card__title">Club Music</div>
							<div className="card__subtitle">Автор: Party Man</div>
						</div>
					</div>
				</div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Mediateka;