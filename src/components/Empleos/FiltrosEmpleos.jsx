import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200,
        },
    },
};

const experiencia = [
    'Trainee',
    'Junior',
    'Semi-Senior',
    'Senior',
    'Engineer'
];

const rubro = [
    'IT',
    'CONTABILIDAD',
    'ABOGACIA',
    'MEDICINA',
    'ARQUITECTURA',
    'PSICOLOGIA',
    'ADM-EMPRESAS',
    'PROFESORADO',
    'OFICIO',
    'CHOFER-CADETE'
];

const jornadaLaboral = [
    'part-time',
    'full-time',
    '6-horas',
    '8-horas',
    'freelance'
];

export default function FiltrosEmpleos() {

    /* EXPERIENCIA */
    const [nivel, setNivel] = React.useState([]);

    const handleChangeExperiencia = (event) => {
        const {
            target: { value },
        } = event;
        setNivel(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    /* RUBRO */
    const [categoria, setCategoria] = React.useState([]);

    const handleChangeRubro = (event) => {
        const {
            target: { value },
        } = event;
        setCategoria(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    /* Jornada */
    const [jornada, setJornada] = React.useState([]);

    const handleChangeJornada = (event) => {
        const {
            target: { value },
        } = event;
        setJornada(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };


    return (
        <>
            <div>
                <h1>FILTROS</h1>
                {/* EXPERIENCIA */}
                <div>
                    <FormControl sx={{ m: 1, width: 200 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Experiencia</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={nivel}
                            onChange={handleChangeExperiencia}
                            input={<OutlinedInput label="Experiencia" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {experiencia.map((lvl) => (
                                <MenuItem key={lvl} value={lvl}>
                                    <Checkbox checked={nivel.indexOf(lvl) > -1} />
                                    <ListItemText primary={lvl} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                {/* ------------------------------- */}

                {/* RUBRO */}
                <div>
                    <FormControl sx={{ m: 1, width: 200 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Rubro</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={categoria}
                            onChange={handleChangeRubro}
                            input={<OutlinedInput label="Rubro" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {rubro.map((rbr) => (
                                <MenuItem key={rbr} value={rbr}>
                                    <Checkbox checked={categoria.indexOf(rbr) > -1} />
                                    <ListItemText primary={rbr} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                {/* ------------------------------- */}

                {/* JORNADA */}
                <div>
                    <FormControl sx={{ m: 1, width: 200 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Jornada</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple
                            value={jornada}
                            onChange={handleChangeJornada}
                            input={<OutlinedInput label="Jornada" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {jornadaLaboral.map((time) => (
                                <MenuItem key={time} value={time}>
                                    <Checkbox checked={jornada.indexOf(time) > -1} />
                                    <ListItemText primary={time} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

            </div>
        </>


    );
}
