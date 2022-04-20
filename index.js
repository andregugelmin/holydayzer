import express from 'express';

const app = express();

const holidays = [
    { date: '1/1/2022', name: 'Confraternização mundial' },
    { date: '1/3/2022', name: 'Carnaval' },
    { date: '4/17/2022', name: 'Páscoa' },
    { date: '4/21/2022', name: 'Tiradentes' },
    { date: '5/1/2022', name: 'Dia do trabalho' },
    { date: '6/16/2022', name: 'Corpus Christi' },
    { date: '9/7/2022', name: 'Independência do Brasil' },
    { date: '10/12/2022', name: 'Nossa Senhora Aparecida' },
    { date: '11/2/2022', name: 'Finados' },
    { date: '11/15/2022', name: 'Proclamação da República' },
    { date: '12/25/2022', name: 'Natal' },
];

app.get('/holidays', (req, res) => {
    res.send(holidays);
});

app.get('/holidays/:mesDoUsuario', (req, res) => {
    const mes = req.params.mesDoUsuario;
    let mesHolidays = [];
    holidays.forEach((element) => {
        let arrString = element.date.split('/');
        if (arrString[0] === mes) mesHolidays.push(element);
    });
    res.send(mesHolidays);
});

app.get('/is-today-holiday', (req, res) => {
    const hoje = new Date();
    let resString = 'Não, hoje não é feriado';
    holidays.forEach((element) => {
        if (hoje.toLocaleDateString('en-US') == element.date)
            resString = `Sim, hoje é ${element.name}`;
    });

    res.send(resString);
});

app.listen(4000);
