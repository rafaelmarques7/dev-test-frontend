/**
 * setupTest.js
 * This file is necessary to allow enzyme to to Shallow renderings.
 * A shallow rendering is when a component renders itself, but not its childrens.
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });