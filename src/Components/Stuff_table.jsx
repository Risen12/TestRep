import React from "react";
import "../Styles/Tables.css";
import "../Styles/Stuff_table.css";

const Stuff_table = function()
{
    return(
        <table id="stuff_table" className="tables" cellPadding="6" cellSpacing="0.5">
            <thead>
            <tr><td id="article_cell"><nobr className="articles">Обслуживающий персонал</nobr></td></tr>
            <tr>
                <th>ФИО</th>
                <th>Телефон</th>
            </tr>
            </thead>
            <tbody>
            <tr><td>Борихина У.З.</td><td>89315774412</td></tr>
            <tr><td>Скворцова И.В.</td><td>89315774412</td></tr>
            <tr><td>Рамзанова Ж.Х.</td><td>89315774412</td></tr>
            <tr><td>Иванова Ю.М.</td><td>89315774412</td></tr>
            <tr><td>Петросян К.Л.</td><td>89315774412</td></tr>
            <tr><td>Бастурма К.К.</td><td>89315774412</td></tr>
            </tbody>
        </table>
    )
};


export default Stuff_table;