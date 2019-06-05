import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/Header.jsx';
import Tasks from './components/Tasks';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  it('renders header', () => {
    const wrapper = shallow(<App />);
    const header = <Header />
    expect(wrapper.contains(header)).toEqual(true);
  });
  it('renders tasks', () => {
    const wrapper = shallow(<App />);
    const tasks = <Tasks />
    expect(wrapper.contains(tasks)).toEqual(true);
  });
});
describe('<Header />', () => {
  it('Header renders without crashing', () => {
    shallow(<Header />);
  });
  it('renders a `IoIosSearch` icon', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('IoIosSearch').length).toBe(1);
  });
  it('renders a `FiMenu` icon', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('FiMenu').length).toBe(1);
  });
  it('renders a `FiMoreHorizontal` icon', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('FiMoreHorizontal').length).toBe(1);
  });
  it('contains a header, form, label and input', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('.header').length).toBe(1);
    expect(wrapper.find('.form').length).toBe(1);
    expect(wrapper.find('.label').length).toBe(1);
    expect(wrapper.find('.input').length).toBe(1);
  });
});
describe('<Tasks />', () => {
  it('Tasks renders without crashing', () => {
    shallow(<Tasks />);
  });
});
