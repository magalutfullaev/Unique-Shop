import React from 'react';
import Select from 'react-select';

import './sort.scss';

const options = [
    { value: 'increment', label: 'Цена по возрастание' },
    { value: 'decrement', label: 'Цена по убыванию' },
]

const Sort = () => {
    return (
        <div className='sort'>
            <p className='subtitle'>Сортировать: </p>
            <Select defaultValue={{ value: 'increment', label: 'Цена по возрастание' }} classNamePrefix='sort-select' className='sort-select-wrapper' isSearchable={false} options={options} />
        </div>
    );
};

export default Sort;