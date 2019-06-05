import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import Header from './components/Header.jsx';
import Tasks from './components/Tasks';
import Task from './components/Task';
import Form from './components/Form';
import Controls from './components/Controls';

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
  it('renders four <Task /> components', () => {
    const wrapper = shallow(<Tasks />);
    expect(wrapper.find(Task).length).toBe(4);
  });
});
describe('<Form />', () => {
  it('Form renders without crashing', () => {
    shallow(<Form />);
  });
  it('contains a form, label, and 2 inputs', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find('.form').length).toBe(1);
    expect(wrapper.find('.label').length).toBe(1);
    expect(wrapper.find('.input').length).toBe(1);
    expect(wrapper.find('.text-input').length).toBe(1);
  });
});
describe('<Task />', () => {
  it('Task renders without crashing', () => {
    shallow(<Task />);
  });
  it('renders a form component', () => {
    const wrapper = shallow(<Task />);
    expect(wrapper.find(Form).length).toBe(1);
  });
  it('renders a controls component', () => {
    const wrapper = shallow(<Task />);
    expect(wrapper.find(Controls).length).toBe(1);
  });
  it('renders a `IoIosPlay` icon', () => {
    const wrapper = shallow(<Task />);
    expect(wrapper.find('IoIosPlay').length).toBe(1);
  });
  it('contains a section', () => {
    const wrapper = shallow(<Task />);
    expect(wrapper.find('section').length).toBe(1);
  });
});
describe('<Controls />', () => {
  it('Controls renders without crashing', () => {
    shallow(<Controls />);
  });
  it('renders a `FiMinusCircle` and `FiPlusCircle` icons', () => {
    const wrapper = shallow(<Controls />);
    expect(wrapper.find('FiMinusCircle').length).toBe(1);
    expect(wrapper.find('FiPlusCircle').length).toBe(1);
  });
  it('contains 2 divs', () => {
    const wrapper = shallow(<Controls />);
    expect(wrapper.find('div').length).toBe(2);
  });
});