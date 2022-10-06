import Header from './shared/header';
import Aside from './shared/aside';
import Footer from './shared/footer';

function FavoriteTracks() {
    return (
        <div className="app">
			<Header/>
			<Aside />
            <div className="content">
                <h1 className="content__title page-title">Любимые треки</h1>
                <div className="prevew-area">
                <div className="prevew-area__title-wrap">
						<h2 className="prevew-area__title page-title">Ваши любимые треки</h2>
						<div className="prevew-area__show-all-items">смотреть все</div>
					</div>
					<div className="prevew-area__content">
						<div className="card">
							<img className="card__image" src="assets/images/tracks/Kizaru_train_wreck.jpg"/>
							<div className="card__title">Train Wreck</div>
							<div className="card__subtitle">Kizaru</div>
						</div>
						<div className="card">
							<img className="card__image"src="assets/images/tracks/eminem_music_to_be_murdered.png"/>
							<div className="card__title">Black Magic</div>
							<div className="card__subtitle">Eminem</div>
						</div>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/Can_you_feel.jpg"/>
							<div className="card__title">Can You Feel My Heart</div>
							<div className="card__subtitle">Bring Me The Horizon</div>
						</div>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/indila.jpeg"/>
							<div className="card__title">Dernière danse</div>
							<div className="card__subtitle">Indila</div>
						</div>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/free_flow_flava.jpg"/>
							<div className="card__title">This is Japan</div>
							<div className="card__subtitle">Free Flow Flava</div>
						</div>
					</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default FavoriteTracks;