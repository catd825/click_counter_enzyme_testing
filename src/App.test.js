import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
//set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })


//fctory function to create a shallow wrapper for the app component.
//@function setup
//@returns {ShallowWrapper}
const setup = () => shallow(<App/ >);

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

test("renders without error", () =>{
  const wrapper = setup();
  // //use data test attribute to be more explicit
  const appComponent = findByTestAttr(wrapper,"component-app")
  // //need this test to fail first
  expect(appComponent.length).toBe(1)

});

/*

test("renders button", () =>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper,"increment-button")
  expect(button.length).toBe(1)
});

test("displays counter", () =>{
  const wrapper = setup();
  const counter = findByTestAttr(wrapper,"counter-display")
  expect(counter.length).toBe(1)
});

test("counter starts at 0", () =>{
  const wrapper = setup();
  const count = findByTestAttr(wrapper,"count").text();
  expect(count).toBe("0");
});

test("clicking on button increments counter display", () =>{

  const wrapper = setup();
  //find button
  const button = findByTestAttr(wrapper,"increment-button");
  //click button
  button.simulate("click");

  //find display and test display matches
  const count = findByTestAttr(wrapper,"count").text();
  expect(count).toBe("1")
});

test("renders decrement button", () =>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper,"decrement-button");
  expect(button.length).toBe(1)
});

test("decrement button decrements count by 1 and does not go below zero", () =>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper,"decrement-button");
  button.simulate("click");

  const count = findByTestAttr(wrapper,"count").text();
  expect(count).toBe("0")
});

test("error if count goes below zero", () => {
  const wrapper = setup();
  const errorDiv = findByTestAttr(wrapper,"error-message");

  const errorHasHiddenClass = errorDiv.hasClass('hidden');
  console.log(wrapper.debug());
  expect(errorHasHiddenClass).toBe(true);
})

*/