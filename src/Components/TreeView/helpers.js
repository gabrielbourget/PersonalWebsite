import ClassNames from 'classnames';

export const prepareComponent = (context, props, state, styles) => {

	const themeClass = (context === 'dark') ? styles.darkTheme : styles.lightTheme;
	// const smallScreenClass = (state.windowWidth <= 650) ? styles.smallScreen : null;

	const treeViewClasses = ClassNames(styles.treeView, themeClass);

	return {
		treeViewClasses
	};
};
