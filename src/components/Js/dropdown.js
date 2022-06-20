import React from 'react';
import { Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dropdown() {
    return (
        <>
        <Table bordered className='text-center'>
            <table className='dropdown'>
                <select><option>All Bedrooms</option></select>
                <select><option>Any Neighbourhood </option></select>
                <select><option>Min Price</option></select>
                <select><option>Max Price </option></select>
                <select><option>Stor by </option></select>
                <span>50 Results</span>
            </table>
            </Table>
        </>
    );
}

export default Dropdown;
