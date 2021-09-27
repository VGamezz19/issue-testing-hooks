// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';

HTMLCanvasElement.prototype.getContext = () => {
	// return whatever getContext has to return
};
