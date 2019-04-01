import { SWITCH_THEME, TOGGLE_SIDE_MENU, TOGGLE_BACKDROP } from '../actionStrings';

const rootReducer = (state = [], action) => {
	// console.log('In root reducer');
	switch(action.type) {
		case SWITCH_THEME: {
			const requestedTheme = action.theme;
			switch (requestedTheme) {
				case 'dark': {
					const newState = JSON.parse(JSON.stringify(state));
					// const newState = Object.assign({}, state);
					newState.settings.theme = 'dark';
					return newState;
				}
				case 'light': {
					const newState = JSON.parse(JSON.stringify(state));
					//const newState = Object.assign({}, state);
					newState.settings.theme = 'light';
					return newState;
				}
				default: return state;
			}
		}
		case TOGGLE_SIDE_MENU: {
			const prevMenuState = state.settings.sideMenuOpen;
			const newState = JSON.parse(JSON.stringify(state));
			// const newState = Object.assign({}, state);
			newState.settings.sideMenuOpen = !prevMenuState;
			return newState;
		}
		
		default: return state; 				
	}
};

export default rootReducer;










