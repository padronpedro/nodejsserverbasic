const db = require("./app/models");

const Role = db.role;
const User = db.user;
var bcrypt = require("bcryptjs");

exports.initial = () => {
    Role.create({
      id: 1,
      name: "user"
    });
   
    Role.create({
      id: 2,
      name: "admin"
    });

    User.create({
        id: 1,
        name: 'Administrator',
        email: 'a@a.com',
        password: bcrypt.hashSync('a', 8)
    })
        .then(user => {
            Role.findByPk(2)
                .then(thisRole => {
                    user.setRoles(thisRole).then(()=>{

                    })
                })
        })
        .catch(err => {
            console.log('Error creating admin user: '+err.message)
        })
}
