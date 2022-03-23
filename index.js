const cors = require("cors");
const express = require('express');
const bodyparser = require('body-parser')
const { success, error } = require("consola");
const { connect } = require('mongoose')

const { DB, PORT } = require('./config')

const app = express()

app.use(cors())
app.use(bodyparser.json())

<<<<<<< HEAD
app.use("/api/employee-manage" , require("./routes/employee-manage"))
app.use("/api/item-manage" , require("./routes/item-manage"))
app.use("/api/request-manage" , require("./routes/request-manage"))
=======
app.use("/api/employee-manage", require("./routes/employee-manage"))
app.use("/api/project-manage", require("./routes/project-manage"))
>>>>>>> 5ebfd0c7bd4ba9549cf53324514a10197d98cf01

const startApp = async() => {
    try {
        await connect(DB);
        success({
            message: `Successfully connected with the Database ${DB}`,
            badge: true
        })

        app.listen(PORT, () => success({ message: `Server started on PORT ${PORT}`, badge: true }))
    } catch (err) {

        error({
            message: `Unable to connect with the Database ${DB}`,
            badge: true
        })
        startApp();
    }


}

startApp();