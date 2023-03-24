interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getuser(): Usuario {
    return {
        nome: 'Humberto',
        email: 'humberto_luciano@hotmial.com'
    }
}

function setUser(usuario: Usuario) {
    // ...
}