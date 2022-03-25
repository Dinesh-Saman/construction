const cors = require("cors");
const express = require('express');
const bodyparser = require('body-parser')
const { success, error } = require("consola");
const { connect } = require('mongoose')

const { DB, PORT } = require('./config')

const app = express()

app.use(cors())
app.use(bodyparser.urlencoded({
    extended: true
}));


app.use("/api/employee-manage", require("./routes/employee-manage"))
app.use("/api/project-manage", require("./routes/project-manage"))
app.use("/api/supplier-manage" , require("./routes/supplier-manage"))
app.use("/api/purchase-manage" , require("./routes/purchase-manage"))
app.use("/api/project-issue-manage" , require("./routes/project-issue-manage"))
app.use("/api/project-issue-item-manage" , require("./routes/project-issue-items-manage"))
app.use("/api/category-manage" , require("./routes/Category-manage"))

app.use("/api/employee-manage", require("./routes/employee-manage"))
app.use("/api/supplier-manage", require("./routes/supplier-manage"))
app.use("/api/purchase-manage", require("./routes/purchase-manage"))
app.use("/api/employee-manage", require("./routes/employee-manage"))
app.use("/api/attandance-manage", require("./routes/attandance-manage"))
app.use("/api/salary-manage", require("./routes/salary-manage"))

app.use("/api/item-manage", require("./routes/item-manage"))
app.use("/api/request-manage", require("./routes/request-manage"))
app.use("/api/employee-manage", require("./routes/employee-manage"))
app.use("/api/project-manage", require("./routes/project-manage"))
app.use("/api/supplier-manage", require("./routes/supplier-manage"))
app.use("/api/purchase-manage", require("./routes/purchase-manage"))
app.use("/api/employee-manage" , require("./routes/employee-manage"))
app.use("/api/attandance-manage" , require("./routes/attandance-manage"))
app.use("/api/salary-manage" , require("./routes/salary-manage"))

app.use("/api/item-manage" , require("./routes/item-manage"))
app.use("/api/request-manage" , require("./routes/request-manage"))
app.use("/api/employee-manage", require("./routes/employee-manage"))
app.use("/api/project-manage", require("./routes/project-manage"))
app.use("/api/supplier-manage" , require("./routes/supplier-manage"))
app.use("/api/purchase-manage" , require("./routes/purchase-manage"))
app.use("/api/project-issue-manage" , require("./routes/project-issue-manage"))
app.use("/api/project-issue-item-manage" , require("./routes/project-issue-items-manage"))

app.use("/api/project-issue-manage", require("./routes/project-issue-manage"))
app.use("/api/project-issue-item-manage", require("./routes/project-issue-items-manage"))


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