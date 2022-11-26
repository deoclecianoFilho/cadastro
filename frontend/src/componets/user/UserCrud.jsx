import React, {Component} from "react";
import Main from "../templete/Main";

const headerProps = {
    inco: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

export default class UsurCrud extends Component {
    render(){
        return(
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}