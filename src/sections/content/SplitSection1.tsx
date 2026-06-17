import type { INJAboutProps } from '@/types'
import classnames from 'classnames'

export default function NJSplitSection1({
	children,
	njImgData,
	njImgPos,
	njAboutTitle,
	njAboutContent,
}: INJAboutProps) {
	const imgPosClass = njImgPos ? `image-${njImgPos}` : ''
	const sectionClassname = classnames('nj-about', imgPosClass)

	const propsContent = (
		<>
			<div className="nj-about__text">
				<h2 className="nj-about__title">
					{ njAboutTitle }
				</h2>
				<div className="nj-about__description">
					{ njAboutContent }
				</div>
			</div>
			{
				njImgData &&
        <div className="nj-about__image">
        	<img { ...njImgData } />
        </div>
			}
		</>
	)

	return (
		<section className={sectionClassname}>
			{ children ? children : propsContent }
		</section>
	)
}
