module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario";
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        lastname: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        address: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        avatar: {
            type:dataTypes.STRING(500),
            allowNull: false
        },
        nickname: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        birthday: {
            type: dataTypes.DATE,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        //Les agrego este campo, para que me muestre el nombre de la categoria usuario
        usersProfile_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references:{
                model: "usersProfile",
                key: "id"
            }
        }
    };

    let config = {
        tableName:"users",
        timestamps: false,
    };

    const Usuario = sequelize.define(alias,cols,config);
    //Asociación relación de muchos a uno 
    Usuario.associate = function (models) {
        Usuario.belongsTo(models.Perfil, { 
            as: "profile",
            foreignKey: "usersProfile_id"
        })
    }
    return Usuario;
}