import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {format} from 'date-fns';

const mockData = [
    {
        plant: 'Koliander',
        plantingDate: '12/12/2019',
        quantityPlanted: '30',
        timeUnderLight: '38',
        levelNumber: 3,
        status: 'in progress'
    },
    {
        plant: 'Rotkva',
        plantingDate: '12/12/2019',
        quantityPlanted: '45',
        timeUnderLight: '33',
        levelNumber: 2,
        status: 'in progress'
    }
];

function Active() {
    const currentDate = format(new Date(2014, 1, 11), 'MM/dd/yyyy');
    const [plant, setPlant] = useState('');
    const [plantingDate, setPlantingDate] = useState(currentDate);
    const [quantityPlanted, setQuantityPlanted] = useState('');
    const [timeUnderLight, setTimeUnderLight] = useState(0);
    const [levelNumber, setLevelNumber] = useState(1);
    const [status, setStatus] = useState('');
    const [show, setShow] = useState('none');
    const [activePlantData, setActivePlantData] = useState(mockData);

    const handleClose = () => setShow('none');

    const handleShow = () => setShow('flex');

    const renderActive = () => {
        const tableContent = activePlantData.map((item, id) => {
            return (
                <tr key={id}>
                    <td>{item.plant}</td>
                    <td>{item.plantingDate}</td>
                    <td>{item.quantityPlanted}</td>
                    <td>{item.timeUnderLight}</td>
                    <td>{item.levelNumber}</td>
                    <td><Button>Done</Button></td>
                </tr>
            )
        })
        return (
            <tbody>
            {tableContent}
            </tbody>
        )
    };

    const renderModal = () => {
        return (
            <div style={{
                display: show,
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                height: '100%',
                width: '100%'
            }}
            >
                <div style={{
                    width: '50%',
                    backgroundColor: 'darkGray',

                }}>
                    <form
                        onSubmit={addNewPlant}
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                        <label>
                            Plant:
                            <input
                                onChange={(event) => {
                                    setPlant(event.target.value)
                                }}
                                value={plant}
                                required
                                type="text"
                                name="plant"
                            />
                        </label>
                        <label>
                            Quantity planted:
                            <input
                                onChange={(event) => {
                                    setQuantityPlanted(event.target.value)
                                }}
                                value={quantityPlanted} required type="number" name="quantity planted"/>
                        </label>
                        <label>
                            Level number:
                            <select
                                onChange={(event => setLevelNumber(event.target.value))}
                                value={levelNumber}
                                required name="levelNumber"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </label>
                        <label>
                            Planting date:
                            <input
                                onChange={(event) => {
                                    setPlantingDate(event.target.value)
                                }}
                                value={plantingDate}
                                required
                                type="text"
                                name="planting date"
                                disabled
                            />
                        </label>
                        <label>
                            Time under light:
                            <input
                                onChange={(event) => {
                                    setTimeUnderLight(event.target.value)
                                }}
                                value={timeUnderLight}
                                disabled
                                type="text"
                                name="time under light"
                            />
                        </label>
                        <input className='modal-btn' type="submit" value="Add and begin process"/>
                    </form>
                    <Button onClick={handleClose} className='modal-btn'>Close</Button>
                </div>
            </div>
        )
    };

    const addNewPlant = (event) => {
        event.preventDefault();
        console.log('addNewPlant');
        //TODO
        // turn on light
        // add to database

        mockData.push(
            {
                plant,
                plantingDate,
                quantityPlanted,
                timeUnderLight,
                levelNumber
            }
        );
        setActivePlantData(mockData);
        handleClose()
    };
    return (
        <div style={{position: 'relative', flex: 1}}>
            <table className="table">
                <thead>
                <tr>
                    <th>Plant</th>
                    <th>Planting date</th>
                    <th>Quantity planted (gr)</th>
                    <th>Time under light (hour)</th>
                    <th>Level number</th>
                    <th>Click when harvest ready</th>
                </tr>
                </thead>
                {renderActive()}
            </table>
            <Button type='btn' size="lg" className='addNew' onClick={handleShow}>
                <h4>ADD NEW</h4>
            </Button>
            {renderModal()}
        </div>
    );
}

export default Active;