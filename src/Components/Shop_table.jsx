import React from "react";
import "../Styles/Shop_table.css";
import "../Styles/Tables.css";


const Shop_table = function()
{
    return(
        <table id="shop_table" className="tables"  cellPadding="6" cellSpacing="0.5">
            <thead>
            <tr><td id="article_cell"><nobr className="articles">Магазины</nobr></td></tr>
            <tr>
                <th>Название</th>
                <th>Адрес</th>
            </tr>
            </thead>
            <tbody>
            <tr><td>Ячейка 1</td><td>Ячейка 2</td></tr>
            <tr><td>Ячейка 3</td><td>Ячейка 4</td></tr>
            <tr><td>Ячейка 5</td><td>Ячейка 6</td></tr>
            <tr><td>Ячейка 7</td><td>Ячейка 8</td></tr>
            <tr><td>Ячейка 9</td><td>Ячейка 10</td></tr>
            </tbody>
        </table>
    )
};


export default Shop_table;