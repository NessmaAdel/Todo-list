import React from 'react';
import { Link } from 'react-router-dom';
import i18next from '../../i18next/i18next';
const data = [
    {
        "id": 1,
        "name": `${i18next.t('title1')}`,
        "describtion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "completed": false
    },
    {
        "id": 2,
        "name": `${i18next.t('title2')}`,
        "describtion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "completed": true
    },
    {
        "id": 3,
        "name": `${i18next.t('title3')}`,
        "describtion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "completed": false
    },
    {
        "id": 4,
        "name": `${i18next.t('title4')}`,
        "describtion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "completed": false
    },
    {
        "id": 5,
        "name": `${i18next.t('title5')}`,
        "describtion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "completed": false
    },
    {
        "id": 6,
        "name": `${i18next.t('title6')}`,
        "describtion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "completed": false
    },
    {
        "id": 7,
        "name": `${i18next.t('title7')}`,
        "describtion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "completed": false
    }
]
const ShowTodo = ({ match: { params: { Id } }, history: { push } }) => {

    return (
        <section className="showTodo">
            {data.map(e => (e.id == Id && (
                <ul>
                    <li>
                        <label className="label">{i18next.t('ID')}</label>
                        {e.id}
                    </li>
                    <li>
                        <label className="label">{i18next.t('name')}</label>
                        {e.name}
                    </li>
                    <li>
                        <label className="label">{i18next.t('describe')}</label>
                        {e.describtion}
                    </li>
                    <li>
                        <label className="label">{i18next.t('complete')}</label>
                        {e.completed}
                    </li>
                </ul>
            )))}
            <Link to="/">
            <i className="fa fa-chevron-left" aria-hidden="true" onClick={() => push("/Todos")} />
            </Link>
        </section >
    )
}
export default ShowTodo;