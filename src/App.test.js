import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
//set up enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })

test("renders without error", () =>{
  const wrapper = shallow(<App/>);
  //use data test attribute to be more explicit
  const appComponent = wrapper.find("[data-test='component-app']")
  //need this test to fail first
  expect(appComponent.length).toBe(1)

})

test("renders button", () =>{

})

test("displays counter", () =>{
  
})

test("counter starts at 0", () =>{
  
})

test("clicking on button increments counter display", () =>{
  
})