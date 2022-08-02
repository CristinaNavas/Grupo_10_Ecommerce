module.exports = (sequelize, dataTypes) => {
    let alias = "Perfil";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        profile: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        
    };

    let config = {
        tableName:"userProfile",
        timestamps: false,
    };

    const Perfil = sequelize.define(alias,cols,config);

    //Asociación relación de uno a muchos 
    
    Perfil.associate = function (models) {
        Perfil.hasMany(models.Usuario, { 
            as: "usuarios",
            foreignKey: "usersProfile_id"
        })
    }
    return Perfil;
}