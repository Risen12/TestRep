import React from "react";
import "../Styles/Tables.css";
import "../Styles/GraphTable.css";


const GraphTable = function()
{
    return(
        <table id="graph_table" className="tables"  cellPadding="6" cellSpacing="0.5">
        <thead>
        <tr><td id="article_cell"><nobr className="articles">График уборки</nobr></td></tr>
        <tr>
            <th>ПН</th>
            <th>ВТ</th>
            <th>СР</th>
            <th>ЧТ</th>
            <th>ПТ</th>
            <th>СБ</th>
            <th>ВС</th>
        </tr>
        </thead>
        <tbody>
        <tr><td>Ячейка 1</td><td>Ячейка 2</td><td>Ячейка 3</td><td>Ячейка 4</td><td>Ячейка 5</td><td>Ячейка 6</td><td>Ячейка 7</td></tr>
        <tr><td>Ячейка 1</td><td>Ячейка 2</td><td>Ячейка 3</td><td>Ячейка 4</td><td>Ячейка 5</td><td>Ячейка 6</td><td>Ячейка 7</td></tr>
        <tr><td>Ячейка 1</td><td>Ячейка 2</td><td>Ячейка 3</td><td>Ячейка 4</td><td>Ячейка 5</td><td>Ячейка 6</td><td>Ячейка 7</td></tr>
        <tr><td>Ячейка 1</td><td>Ячейка 2</td><td>Ячейка 3</td><td>Ячейка 4</td><td>Ячейка 5</td><td>Ячейка 6</td><td>Ячейка 7</td></tr>
        <tr><td>Ячейка 1</td><td>Ячейка 2</td><td>Ячейка 3</td><td>Ячейка 4</td><td>Ячейка 5</td><td>Ячейка 6</td><td>Ячейка 7</td></tr>
        </tbody>
    </table>
    )
};


export default GraphTable;