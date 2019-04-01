import ClassNames from 'classnames';

export const prepareComponent = ( props, context, styles) => {
	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;

	const jumbotronClasses = ClassNames(styles.jumbotron, themeClass);
	const connectionLinkGridClasses = ClassNames(styles.connectionLinkGrid, themeClass);

	return {
		themeClass,
		jumbotronClasses,
		connectionLinkGridClasses
	};
};
