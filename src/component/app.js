import React from 'react';

import Header from '../app-header';
import ClassFilter from './class-filter';
import ClassForm from './class-form';
import ClassList from './class-list';
import ClassSearch from './class-search';


const App = () => {

	return (
	  <div className="list-app">
			<Header />
			<ClassSearch />
			<ClassFilter />
			<ClassList />
			<ClassForm/>
	  </div>
	);
}

export default App;
