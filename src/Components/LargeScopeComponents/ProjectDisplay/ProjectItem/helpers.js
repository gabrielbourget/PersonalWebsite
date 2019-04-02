import ClassNames from 'classnames';

export const prepareComponent = ( context, props, styles ) => {
		
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const projectItemClasses = ClassNames(styles.projectItem, themeClass);
	const tipRightClasses = ClassNames(styles.tipRight, themeClass);
	const tipLeftClasses = ClassNames(styles.tipLeft, themeClass);
	const spanQuoteClasses = ClassNames(styles.spanQuote, themeClass);
	const navButtonsClasses = ClassNames(styles.navButtons, themeClass);
	const tempPlaceholderClasses = ClassNames(styles.tempPlaceHolder);
	const componentDemonstrationRowClasses = ClassNames(styles.componentDemonstrationRow);
	const reduxFlowDemoCradleClasses = ClassNames(styles.reduxFlowDemoCradle);
	const imageLinkContainerClasses = ClassNames(styles.imageLinkContainer);

	return {
		projectItemClasses,
		tipRightClasses,
		tipLeftClasses,
		spanQuoteClasses,
		navButtonsClasses,
		tempPlaceholderClasses,
		componentDemonstrationRowClasses,
		reduxFlowDemoCradleClasses,
		imageLinkContainerClasses
	};
};
