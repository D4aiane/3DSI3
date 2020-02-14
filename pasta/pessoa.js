"use strict";
var empresa;
(function (empresa) {
    var Pessoa = /** @class */ (function () {
        // é obrigado a mostrar o cpf  e nome
        function Pessoa(nome, cpf) {
            this.cpf = cpf;
            this.nome = nome;
        }
        Pessoa.prototype.getCpf = function () {
            return this.cpf;
        };
        //pega/mostra o valor do atributo
        Pessoa.prototype.getNome = function () {
            return this.nome;
        };
        // altera o valor
        Pessoa.prototype.setNome = function (nome) {
            this.nome = nome;
        };
        Pessoa.prototype.getIdade = function () {
            return this.idade;
        };
        Pessoa.prototype.setIdade = function (idade) {
            this.idade = idade;
        };
        return Pessoa;
    }());
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
