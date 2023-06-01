export type Action = {type: "ADD_TOKEN" | "ADD_ID"; payload: string}

//armazena o token
export const addToken = (token: string) => ({
    type: "ADD_TOKEN",
    payload: token
})

//armazena o id do usuario
export const addId = (id: string) => ({
    type: "ADD_ID",
    payload: id
})