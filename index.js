const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/' , (req , res)=>{

   res.json({info: 'La API esta en ejeucion'});

});

app.get('/usuario' , (req , res)=>{

    res.json({id: 1, nombre: 'Oscar', apellidos: 'Villanueva'});

})

app.listen(port, () => {

    console.log(`API corriendo en el pueto ${port}`);

});
