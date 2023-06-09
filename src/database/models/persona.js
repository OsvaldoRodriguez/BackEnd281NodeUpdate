'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Persona.hasMany(models.Usuario, {
        foreignKey : 'PersonaId'
      });
    }
  }
  Persona.init({
    nombre: DataTypes.STRING,
    paterno: DataTypes.STRING,
    materno: DataTypes.STRING,
    fecha_nac: DataTypes.DATE,
    sexo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};