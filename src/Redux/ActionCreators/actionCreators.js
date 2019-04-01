import { SWITCH_THEME, TOGGLE_SIDE_MENU, TOGGLE_BACKDROP } from '../actionStrings';

// - UI
export const switchTheme = (theme) => ({ 
	type: SWITCH_THEME,
	theme
});
export const toggleSideMenu = () => ({ type: TOGGLE_SIDE_MENU });
export const toggleBackdrop = () => ({ type: TOGGLE_BACKDROP });


// - Batch export.
 const actionCreators = {
	switchTheme,
	toggleSideMenu,
	toggleBackdrop
 };

export default actionCreators;









