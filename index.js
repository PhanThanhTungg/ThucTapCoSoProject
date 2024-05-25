const express = require('express')
const database = require('./config/database.js')
var path = require('path');// cua tinymce
const bodyParser = require("body-parser") // nhan data cua searchMulti
const flash = require("express-flash") // thư hiện express-flash: dùng để hiện thông báo tạm thời
const cookieParser = require("cookie-parser") // Thư viện liên quan đến express-flash
const session = require("express-session") // Thư viện liên quan đến express-flash
var methodOverride = require('method-override') // thu vien methodOverride de thay doi phuong thuc gui fom


const moment = require("moment") // convert time

require("dotenv").config() // Cấu hình env

const systemConfig = require("./config/system.js")

const route = require('./routes/client/index.route') // lấy route
const routeAdmin = require('./routes/admin/index.route.js')

database.connect() // connect toi dtb

const app = express()
const port = process.env.PORT 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.locals.prefixAdmin = systemConfig.prefixAdmin // Khai báo biến toàn cục prefixAdmin
app.locals.moment = moment
//li thuyết express: app.locals dùng để tạo biến toàn cục mà file pug nào cũng dùng được


//tinymce
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));


//Cấu hình pug
app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')

app.use(express.static(`${__dirname}/public`))  // nhúng file tĩnh

app.use(methodOverride('_method'))

//Cấu hình express-flash
app.use(cookieParser('Tung cookie'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());

route(app) //gọi đến route
routeAdmin(app)

app.get("*", (req, res) => {
    res.render("client/pages/errors/404", {
      pageTitle: "404 Not Found",
    });
});

  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})