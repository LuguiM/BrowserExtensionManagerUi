import { useState } from 'react';
import data from '../../../data.json';
import FilterRadioGroup from './components/FilterRadioGroup';
import Card from './components/card';
import './styles/mainContainer.css';

const options = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
];

export default function ExtensionsList() {
    const [selected, setSelected] = useState('all');
    const [extensions, setExtensions] = useState(data);

    const filterStatus = (status) => {
        setSelected(status);
    };

    const filteredExtensions = extensions.filter((ext) => {
        if (selected === 'all') return true;
        if (selected === 'active') return ext.isActive;
        if (selected === 'inactive') return !ext.isActive;
        return true;
    });

    const handleStatus = (check, title) => {
        const updatedExtensions = extensions.map((ext) => {
            if (ext.name === title) {
                return { ...ext, isActive: check };
            }
            return ext;
        });

        setExtensions(updatedExtensions);
    }

    const removeExt = (title) => {
        const updatedExt = extensions.filter((ext) => ext.name !== title);
        setExtensions(updatedExt);
    }

    return (
        <main className="main-content">
            <div className="filter-container">
                <h1>Extensions List</h1>
                <FilterRadioGroup
                    name="status"
                    options={options}
                    selected={selected}
                    onChange={filterStatus}
                />
            </div>

            <div className="card-container">
                {
                    filteredExtensions.length > 0 ? 
                    filteredExtensions.map((ext, index) => (
                        <Card
                            key={index}
                            title={ext.name}
                            description={ext.description}
                            icon={ext.logo}
                            status={ext.isActive}
                            onRemove={removeExt}
                            onStatusChange={handleStatus}
                        />
                    )) : <div>Not data</div>
                }
            </div>
        </main>
    );
} 
