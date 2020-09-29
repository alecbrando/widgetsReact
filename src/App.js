import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown'
import Route from './components/Route';
import Translate from './components/Translate'
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The Color of Red',
        value: 'red'
    },
    {
        label: 'The Color of Green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
];


export default function App() {
    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items}/>
            </Route>
            <Route path="/list">
                <Search/>
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a color" options={options} selected={selected} onSelectChange={setSelected}/>
            </Route>
            <Route path="/translate">
                <Translate/>
            </Route>
        </div>
    )
}
