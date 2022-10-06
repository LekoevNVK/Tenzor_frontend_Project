import Header from './shared/header';
import Aside from './shared/aside';
import Footer from './shared/footer';

function Index() {
	return (
		<div className="app">
			<Header/>
			<Aside />
			<main className="content">
				<h1 className="content__title page-title">Рекомендации</h1>
				<div className="prevew-area">
					<div className="prevew-area__title-wrap">
						<h2 className="prevew-area__title page-title">Послушайте эти треки</h2>
						<div className="prevew-area__show-all-items">смотреть все</div>
					</div>
					<div className="prevew-area__content">
						<div className="card">
							<img className="card__image" src="assets/images/tracks/Kizaru_train_wreck.jpg"/>
							<div className="card__title">First Day Out</div>
							<div className="card__subtitle">Kizaru</div>
						</div>
						<div className="card">
							<img className="card__image"src="assets/images/tracks/eminem_music_to_be_murdered.png"/>
							<div className="card__title">Higher</div>
							<div className="card__subtitle">Eminem</div>
						</div>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/undead.jpg"/>
							<div className="card__title">Undead</div>
							<div className="card__subtitle">Hollywood Undead</div>
						</div>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/lovell.jpg"/>
							<div className="card__title">Mary Jane</div>
							<div className="card__subtitle">Night Lovell</div>
						</div>
						<div className="card">
							<img className="card__image" src="assets/images/tracks/ffdp.jpg"/>
							<div className="card__title">Got Your Six</div>
							<div className="card__subtitle">FFDP</div>
						</div>
					</div>
				</div>
				<div className="prevew-area">
					<div className="prevew-area__title-wrap">
						<h2 className="prevew-area__title page-title">Вам могут понравиться эти исполнители</h2>
						<div className="prevew-area__show-all-items">смотреть все</div>
					</div>
					<div className="prevew-area__content">
						<div className="author-card card">
							<img className="card__image" src="assets/images/authors/eminem.jpg"/>
							<div className="card__title">Eminem</div>
							<div className="card__subtitle">Исполнитель</div>
						</div>
						<div className="author-card card">
							<img className="card__image" src="assets/images/authors/kizaru.jpg"/>
							<div className="card__title">Kizaru</div>
							<div className="card__subtitle">Исполнитель</div>
						</div>
						<div className="author-card card">
							<img className="card__image" src="assets/images/authors/undead.jpg"/>
							<div className="card__title">Hollywood Undead</div>
							<div className="card__subtitle">Группа</div>
						</div>
						<div className="author-card card">
							<img className="card__image" src="assets/images/authors/boys.webp"/>
							<div className="card__title">$uicideBoy$</div>
							<div className="card__subtitle">Исполнители</div>
						</div>
						<div className="author-card card">
							<img className="card__image" src="assets/images/authors/lovell.jpg"/>
							<div className="card__title">Night Lovell</div>
							<div className="card__subtitle">Исполнитель</div>
						</div>
					</div>
				</div>
			</main>
			<Footer/>
		</div>
	);
}

export default Index;