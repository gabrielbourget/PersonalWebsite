import ClassNames from 'classnames';

export const prepareComponent = ( context, props, styles ) => {
		
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const articleClasses = ClassNames(styles.article, themeClass);
	const tipRightClasses = ClassNames(styles.tipRight, themeClass);
	const tipLeftClasses = ClassNames(styles.tipLeft, themeClass);
	const spanQuoteClasses = ClassNames(styles.spanQuote, themeClass);
	const navButtonsClasses = ClassNames(styles.navButtons, themeClass);
	const tempPlaceholderClasses = ClassNames(styles.tempPlaceHolder);
	const componentDemonstrationRowClasses = ClassNames(styles.componentDemonstrationRow);
	const reduxFlowDemoCradleClasses = ClassNames(styles.reduxFlowDemoCradle);
	const imageLinkContainerClasses = ClassNames(styles.imageLinkContainer);
	const imageLinkClasses = ClassNames(styles.imageLink, themeClass);

	return {
		articleClasses,
		tipRightClasses,
		tipLeftClasses,
		spanQuoteClasses,
		navButtonsClasses,
		tempPlaceholderClasses,
		componentDemonstrationRowClasses,
		reduxFlowDemoCradleClasses,
		imageLinkContainerClasses,
		imageLinkClasses
	};
};
